import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const ChatGPT: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const sendMessage = async () => {
        if (!input.trim()) return;

        setError(null);
        const userMessage: Message = {
            role: 'user',
            content: input
        };

        const newMessages: Message[] = [...messages, userMessage];
        setMessages(newMessages);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [{
                        role: 'system',
                        content: 'You are a MongoDB expert assistant. Provide helpful, accurate information about MongoDB.'
                    }, ...newMessages.map(msg => ({
                        role: msg.role,
                        content: msg.content
                    }))],
                    temperature: 0.7
                })
            });

            if (!response.ok) {
                let errorMessage = 'Error en la solicitud';

                if (response.status === 429) {
                    errorMessage = 'Demasiadas solicitudes. Por favor, espera un momento y vuelve a intentar.';
                } else {
                    try {
                        const errorData = await response.json();
                        errorMessage = errorData.error?.message || errorMessage;
                    } catch (e) {
                        // Si no podemos parsear el error, usamos el mensaje por defecto
                    }
                }

                throw new Error(errorMessage);
            }

            const data = await response.json();

            if (!data.choices || !data.choices[0] || !data.choices[0].message) {
                throw new Error('Respuesta invalida del servidor');
            }

            const assistantMessage: Message = {
                role: 'assistant',
                content: data.choices[0].message.content
            };

            setMessages([...newMessages, assistantMessage]);
        } catch (error) {
            console.error('Error:', error);
            const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
            setError(errorMessage);

            // Agregar mensaje de error al chat
            setMessages([
                ...newMessages,
                {
                    role: 'assistant',
                    content: `Error: ${errorMessage}`
                }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 w-96 bg-white rounded-lg shadow-xl border border-gray-200">
            <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold">MongoDB Assistant</h3>
            </div>

            <div className="h-96 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'
                            }`}
                    >
                        <div
                            className={`max-w-[80%] p-3 rounded-lg ${message.role === 'user'
                                    ? 'bg-green-500 text-white'
                                    : 'bg-gray-100 text-gray-800'
                                }`}
                        >
                            {message.content}
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="bg-gray-100 p-3 rounded-lg">
                            Typing...
                        </div>
                    </div>
                )}
                {error && (
                    <div className="flex justify-center">
                        <div className="bg-red-100 text-red-600 p-3 rounded-lg text-sm">
                            {error}
                        </div>
                    </div>
                )}
            </div>

            <div className="p-4 border-t border-gray-200">
                <div className="flex space-x-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                        placeholder="Ask about MongoDB..."
                        className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button
                        onClick={sendMessage}
                        disabled={isLoading}
                        className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:opacity-50"
                    >
                        <Send size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatGPT;