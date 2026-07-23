// SEC-08: Unsafe Deserialization
// Test: TC-CR-014
package com.example;

import java.io.*;

public class DeserializeUtil {
    public Object deserialize(byte[] data) throws Exception {
        ByteArrayInputStream bis = new ByteArrayInputStream(data);
        ObjectInputStream ois = new ObjectInputStream(bis);
        return ois.readObject();
    }
}
