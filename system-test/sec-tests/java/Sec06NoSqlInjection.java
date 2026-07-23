// SEC-06: NoSQL Injection
// Test: TC-CR-012
package com.example;

import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

public class MongoUserDao {
    public Document findUser(String username, MongoCollection<Document> coll) {
        Document query = new Document("username", username)
            .append("password", new Document("$ne", null));
        return coll.find(query).first();
    }
}
