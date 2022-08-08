# Json Sizer

A simple way to split a large JSON file into multiple files based on limit size  
[NPM Module](https://www.npmjs.com/package/json-sizer)

## Algorithm Explanation

Given a large json file, we can split the file into multiple ones by using the `.split()` function.  
It will calculate the number of elements needed in each array of the matrix to not exceed the limit size.  
The calculation is pretty simple:

```
File Size: 130MB
File Elements: 107.000
Files Size Limit: 15MB

Elements in each array: File Elements / (File Size / Size Limit) -> 107000 / (130/15) = 8
```

In this case, we will need 12.346 (or less) elements in each array to have 8 files with a maximum size of 15MB.
The whole data will be passed to the `BatchArray` class to generate a matrix.

A 133MB Size file after Json Sizer:
![img](https://i.imgur.com/Gn0R9k2.png)

Previous screenshot file's benchmark  
![img](https://i.imgur.com/co0gW5Q.png)
