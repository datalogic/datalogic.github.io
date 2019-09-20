---
title: CE Device Sync API
sidebar_label: API
---

## static class USBLAN

### Methods

#### static bool StartProcess(string exec, string params)

Start a process on the device.

* **Parameters**
  * **string exe**: Path to the program to execute.
  * **string parms**: Parameters to send to exe. If using multiple parameters, seperate with a space.
* **Returns**: True if process successfully started, or was already running. False otherwise.

---

#### static IEnumerable<SimpleFileInfo> FindFiles(string directory, string mask)

 Search a directory on the device for files whose names satisfy the mask.

* **Parameters**
  * **string directory**: Path to the directory on device to search inside.
  * **string mask**: Name or pattern to search.
* **Returns**: IEnumerable of the query results. Entries contain info on files. Null if an error occured.

---

#### static IEnumerable<SimpleFileInfo> FindDirectories(string directory, string mask)

 Search a directory on the device for directories whose names satisfy the mask.

* **Parameters**
  * **string directory**: Path to the directory on device to search inside.
  * **string mask**: Name or pattern to search.
* **Returns**: IEnumerable of the query results. Entries contain info on directories. Null if an error occured.

---

#### static bool CreateDirectory(string deviceDirName)

 Create a new directory on the device.

* **Parameters**
  * **string deviceDirName**: The path to the new directory on the device.
* **Returns**: True if directory did not already exist and was successfully created. False otherwise.

---

#### static bool PushFileToDevice(string localFilePath, string deviceFilePath, bool replaceExisting)

 Copy a file from the host machine to the device.

* **Parameters**
  * **string localFilePath**: Source path on host.
  * **string deviceFilePath**: Destination path on device.
  * **bool replaceExisting**: Should an existing file be overwritten?
* **Returns**: True if file successfully copied to device, False otherwise.

---

#### static bool PullFileFromDevice(string deviceFilePath, string localFilePath, bool replaceExisting)

 Copy a file from the device to the host machine.

* **Parameters**
  * **string deviceFilePath**: Source path on device.
  * **string localFilePath**: Destination path on host.
  * **bool replaceExisting**: Should an existing file be overwritten?
* **Returns**: True if file successfully pulled from device and written to local file, False otherwise.

---

#### static bool SetFileDateTime(string deviceFilePath, DateTime lastWriteDateTime)

 Set the last modified time of a file on the device.

* **Parameters**
  * **string deviceFilePath**: Path to file on device.
  * **DateTime lastWriteDateTime**: The time the file will be set to.
* **Returns**: True if time on file is successfully set, False otherwise.

---

#### static bool DeleteFile(string deviceFilePath)

 Delete a specified file from the device.

* **Parameters**
  * **string deviceFilePath**: Path to file on device.
* **Returns**: True if file found, file is not Read-only, and file successfully deleted from device. False otherwise.

---

## class SimpleFileInfo

### Members

* **string Name**: The name of the file.
* **string DirectoryName**: The path of the directory the file is in.
* **string Extension**: The file extension.
* **string fullName**: The full file path.
* **DateTime LastWriteTime**: The last time the file was modified.
* **long Length**: Length of the file.

### Constructors

#### SimpleFileInfo(IO.FileInfo fi)

* **FileInfo fi**: Make a new object representing this object.

#### SimpleFileInfo(string fullName, long length, DateTime lastWriteTime)

* **string fullName**: Full file path.
* **long length**: Length of the file.
* **DateTime lastWriteTime**: Last modified time.
