// SEC-63: Backup Leak — allowBackup enabled without restrictions
// Test: TC-CR-066
package com.example;

import android.app.Application;

public class MyApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        // AndroidManifest.xml has allowBackup=true
        // All SharedPreferences and internal storage files
        // including auth tokens and passwords are backed up
        // to cloud / ADB backup — easily extractable
    }
}
