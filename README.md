# Secure Storage Async Issue

This is a sample project to demonstrate an issue with the Secure Storage plugin in the `KeyValueStorage` implementation. Basically, it appears there are cases where Promises resolve prematurely.

The example provided is related to the usage of `destroyStorage()`. In this Ionic Starter project (`blank` `angular-standalone`):

- A storage instance is created
- A value is stored to the storage instance
- Then, an attempt to destroy immediately follows
- `destroyStorage()` throws an error. The following logs appear in the bowser console:

```console
cannot close: transaction is in progress

ERROR Error: database cannot be closed while a transaction is in progress
    at newSQLError (VM3:2992:18)
    at SQLitePlugin.close (VM3:3223:11)
    at Dt (main.07fdb3e40d682cbc.js:1:13225)
    at main.07fdb3e40d682cbc.js:1:17138
    at main.07fdb3e40d682cbc.js:1:11117
    at new c (polyfills.f8bea4ae787ca74b.js:1:18363)
    at main.07fdb3e40d682cbc.js:1:11089
    at Yt (main.07fdb3e40d682cbc.js:1:11331)
    at main.07fdb3e40d682cbc.js:1:16907
    at un (main.07fdb3e40d682cbc.js:1:17263)
handleError @ main.07fdb3e40d682cbc.js:1

cannot start next transaction: database not open
```

It appears that the `set()` transaction is still in progress when `destroyStorage()` is called. The project includes a few other buttons to try various scenarios, but the key issue is the button labeled "**Create/Destroy (Set)**"
