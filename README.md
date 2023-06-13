# Multimedia App Bounty Description
The Two Features that i decided to implement are Sorting & Searching. The Reason for choosing these features is simple as the app has more files it becomes little harder to find files if you cant search or sort the files by its type, size or name.these fetures make use of the app more seamless and smooth.

# Sorting 
This the First feature which allows user to sort the file by its name,type or size. in both Ascending and Descnding orders.as for how it works it is done using js sort() function with custom condition . name and type are available in data but size is calculated once while loading the page and updates the data with size property.and then the files are sorted according to the option selected in dropdown.

```
  const [UpdatedData, setUpdatedData] = useState([])

 useEffect(() => {
    const calculateFileSize = async () => {
      const updatedFiles = await Promise.all(
        data.map(async (file) => {
          const response = await fetch(file.path);
          const blob = await response.blob();
          const size = blob.size;
          return { ...file, size };
        })
      );
      setUpdatedData(updatedFiles);
      setMyFiles(updatedFiles);
    };

    calculateFileSize();
  }, [])

const sortFiles = (value) => {
    let sortedFiles = [];

    switch (value) {
      case "default":
        sortedFiles = [...UpdatedData];
        break;
      case "nameASC":
        sortedFiles = [...myFiles].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "typeASC":
        sortedFiles = [...myFiles].sort((a, b) => a.type.localeCompare(b.type));
        break;
      case "sizeASC":
        sortedFiles = [...myFiles].sort((a, b) => a.size - b.size);
        break;
      case "nameDESC":
        sortedFiles = [...myFiles].sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "typeDESC":
        sortedFiles = [...myFiles].sort((a, b) => b.type.localeCompare(a.type));
        break;
      case "sizeDESC":
        sortedFiles = [...myFiles].sort((a, b) => b.size - a.size);
        break;
      default:
        sortedFiles = [...UpdatedData];
        break;
    }

    setMyFiles(sortedFiles);
  };


  <label htmlFor="">Sort Files By :</label><select style={styles.controlDDL}
              onChange={(event) => {
                sortFiles(event.target.value);
              }}>
              <option value="default">--Select--</option>
              <option value="typeASC">Type ASC</option>
              <option value="nameASC">Name ASC</option>
              <option value="sizeASC">Size ASC</option>
              <option value="typeDESC">Type DESC</option>
              <option value="nameDESC">Name DESC</option>
              <option value="sizeDESC">Size DESC</option>
            </select>
```
here this code is for sorting feature where size is calculated on page load so the files can sorted with it.then after when any option is selected it calls function sortFiles which matchs the value in switch case and sorts the files accordingly and the files are shown once setMyFiles(sortedFiles) is called.

# Searching
This feature takes the input from search bar and filters the files by it name and only displays the files which contain the string from search bar.this feature makes use of app extreemly smooth and fast.

```
  const [searchText, setSearchText] = useState(null)

    useEffect(() => {
    searchFiles(searchText)
  }, [searchText])

  const searchFiles = (value) => {
    if (value != "") {
      let Files = [];

      UpdatedData.forEach((file) => {
        if (file.name.toLowerCase().includes(value.toLowerCase())) {
          Files.push(file);
        }
      })

      setMyFiles(Files);
    } else {
      setMyFiles(UpdatedData)
    }
  };

  <input type="text" placeholder='Search Files' style={{ ...styles.controlSearch, float: "right", clear: "both" }}
              value={searchText}
              onInput={(event) => setSearchText(event.target.value)}
            />
            <i class="fa-sharp fa-solid fa-xmark" onClick={() => {
              setSearchText("");
            }} style={styles.close}></i>
```

this here creates a state varible  searchText which has twoway binding with search bar.so when text is changed in search bar use efffect is called and calls searchFiles(searchText) which check if each file name contains the string from searchbar.and it also has a has clear button which is fa icon which clears the earch bar and filters.