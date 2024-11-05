import { Methods } from '../types';

export const methodsData: Methods = {
    find: {
        title: 'db.collection.find()',
        syntax: 'db.collection.find(query, projection, options)',
        description: 'Selects documents in a collection or view and returns a cursor to the selected documents.',
        returns: {
            title: 'Returns:',
            content: 'A cursor to the documents that match the query criteria. When the find() method "returns documents," the method is actually returning a cursor to the documents.'
        },
        compatibility: {
            title: 'Compatibility',
            content: 'This method is available in deployments hosted in the following environments:',
            items: [
                'MongoDB Atlas: The fully managed service for MongoDB deployments in the cloud'
            ]
        },
        example: `Bson filter = Filters.eq("name", "Elena");
FindIterable<Document> elementsFound = collection.find(filter);
for (Document document : elementsFound) {
    System.out.println(document);
}`
    },
    insertOne: {
        title: 'db.collection.insertOne()',
        syntax: 'db.collection.insertOne(document, options)',
        description: 'Inserts a single document into a collection.',
        returns: {
            title: 'Returns:',
            content: 'An InsertOneResult object containing the _id of the inserted document.'
        },
        compatibility: {
            title: 'Compatibility',
            content: 'This method is available in deployments hosted in the following environments:',
            items: [
                'MongoDB Atlas: The fully managed service for MongoDB deployments in the cloud'
            ]
        },
        example: `Document data = new Document()
    .append("name", "Juan")
    .append("age", 22);
InsertOneResult insertOneResult = collection.insertOne(data);
System.out.println(insertOneResult.getInsertedId());`
    },
    insertMany: {
        title: 'db.collection.insertMany()',
        syntax: 'db.collection.insertMany(documents, options)',
        description: 'Inserts multiple documents into a collection.',
        returns: {
            title: 'Returns:',
            content: 'An InsertManyResult object containing the _ids of the inserted documents.'
        },
        compatibility: {
            title: 'Compatibility',
            content: 'This method is available in deployments hosted in the following environments:',
            items: [
                'MongoDB Atlas: The fully managed service for MongoDB deployments in the cloud'
            ]
        },
        example: `List<Document> severalData = new ArrayList<Document>();
severalData.add(new Document()
    .append("name", "Elena")
    .append("age", 33));
severalData.add(new Document()
    .append("name", "Ana")
    .append("lastname", "Bolena")
    .append("age", 35));
InsertManyResult insertManyResult = collection.insertMany(severalData);
System.out.println(insertManyResult.getInsertedIds());`
    },
    updateOne: {
        title: 'db.collection.updateOne()',
        syntax: 'db.collection.updateOne(filter, update, options)',
        description: 'Updates a single document within the collection based on the filter.',
        returns: {
            title: 'Returns:',
            content: 'An UpdateResult object containing the number of documents that matched the filter and were updated.'
        },
        compatibility: {
            title: 'Compatibility',
            content: 'This method is available in deployments hosted in the following environments:',
            items: [
                'MongoDB Atlas: The fully managed service for MongoDB deployments in the cloud'
            ]
        },
        example: `Bson filter = Filters.eq("name", "Ana");
Bson newAge = Updates.set("age", 25);
UpdateResult updateOne = collection.updateOne(filter, newAge);
System.out.println(updateOne.getModifiedCount());`
    },
    deleteMany: {
        title: 'db.collection.deleteMany()',
        syntax: 'db.collection.deleteMany(filter, options)',
        description: 'Removes all documents that match the filter from a collection.',
        returns: {
            title: 'Returns:',
            content: 'A DeleteResult object containing the number of documents that matched the filter and were deleted.'
        },
        compatibility: {
            title: 'Compatibility',
            content: 'This method is available in deployments hosted in the following environments:',
            items: [
                'MongoDB Atlas: The fully managed service for MongoDB deployments in the cloud'
            ]
        },
        example: `Bson filter = Filters.eq("name", "Pedro");
DeleteResult deleteResult = collection.deleteMany(filter);
System.out.println(deleteResult.getDeletedCount());`
    },
    search: {
        title: 'db.collection.search()',
        syntax: 'db.collection.search(query, projection, options)',
        description: 'Selects documents in a collection or view and returns a cursor to the selected documents.',
        returns: {
            title: 'Returns:',
            content: 'A cursor to the documents that match the query criteria. When the find() method "returns documents," the method is actually returning a cursor to the documents.'
        },
        compatibility: {
            title: 'Compatibility',
            content: 'This method is available in deployments hosted in the following environments:',
            items: [
                'MongoDB Atlas: The fully managed service for MongoDB deployments in the cloud'
            ]
        },
        example: `package ejemploMongo;

import org.bson.Document;
import org.bson.conversions.Bson;

import com.mongodb.MongoClientException;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.Updates;
import com.mongodb.client.result.DeleteResult;
import com.mongodb.client.result.UpdateResult;

public class TestMongo {

	public static void main(String[] args) {
		String url = "mongodb://127.0.01:27017";
		try{
			MongoClient mongoClient = MongoClients.create(url);
			MongoDatabase db = mongoClient.getDatabase("labs");
			
			//Creamos una coleccion si no existe,
			MongoCollection<Document> collection = db.getCollection("personas");
			
			
			/*
            //Insertamos un documento
			Document data = new Document().append("name", "Juan").append("age", 22);
            InsertOneResult insertOneResult = collection.insertOne(data);
            System.out.println("\n--- insert one result ---");
            System.out.println(insertOneResult.getInsertedId());
            
            //Insertamos otro
            data = new Document().append("name", "Pedro").append("lastname", "Almodovar").append("age", 68);
            insertOneResult = collection.insertOne(data);
            System.out.println("\n--- insert one result ---");
            System.out.println(insertOneResult.getInsertedId());
           
            //Insertar varios al mismo tiempo
            List<Document> severalData = new ArrayList<Document>();
            severalData.add(new Document().append("name", "Elena").append("age", 33));
            severalData.add(new Document().append("name", "Ana").append("lastname", "Bolena").append("age", 35));
            InsertManyResult insertManyResult = collection.insertMany(severalData);
            System.out.println("\n--- insert many result ---");
            System.out.println(insertManyResult.getInsertedIds());
			
            // Consultar con un filtro
            Bson filter = Filters.eq("name", "Elena");
            FindIterable<Document> elementsFound = collection.find(filter);
            System.out.println("\n--- find(filter) result ---");
            for (Document document : elementsFound)
            	System.out.println(document);
            

            // Consultar toda la colección
            FindIterable<Document> allCollection = collection.find();
            System.out.println("\n--- find() result ---");
            for (Document document : allCollection)
            	System.out.println(document);
            
            		
            // Modificar un elemento de la colección
			Bson filter = Filters.eq("name", "Ana");
            Bson newAge = Updates.set("age", 25);
            UpdateResult updateOne = collection.updateOne(filter, newAge);
            FindIterable<Document> elementsFound = collection.find(filter);
            System.out.println("\n--- updateOne() result ---");
            System.out.println(updateOne.getMatchedCount());
            for (Document document : elementsFound)
            	System.out.println(document);
           
         
            // Borrar un elemento
			Bson filter = Filters.eq("name", "Pedro");
            DeleteResult deleteResult = collection.deleteMany(filter);
            System.out.println("\n--- Number of deleted elements with filter ---");
            System.out.println(deleteResult.getDeletedCount());
			 */
            // Borrar todo
			//DeleteResult deleteResult = collection.deleteMany(Filters.empty());
            //System.out.println("\n--- Number of deleted elements with empty filter ---");
            //System.out.println(deleteResult.getDeletedCount());
			FindIterable<Document> allCollection = collection.find();
            System.out.println("\n--- find() result ---");
            for (Document document : allCollection) {
            	System.out.println("DOC");
            	System.out.println(document);
            }
			
		}
		catch (MongoClientException e) {
			System.out.println(e.getMessage());
		}
	}
}`
    }
};