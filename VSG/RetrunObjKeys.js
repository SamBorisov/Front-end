const data = JSON.parse("[{\"GroupName\":\"Appraisal\",\"Label\":\"Appraisal Type As Stabilized\",\"IdUser\":null,\"Id\":10917},{\"GroupName\":\"General\",\"Label\":\"City\",\"IdUser\":null,\"Id\":10875},{\"GroupName\":\"General\",\"Label\":\"Property Type\",\"IdUser\":null,\"Id\":10882},{\"GroupName\":\"CollateralUDF\",\"Label\":\"second UDF retest\",\"IdUser\":null,\"Id\":10979},{\"GroupName\":null,\"Label\":\"Omg this doesn\'t have a group name\",\"IdUser\":null,\"Id\":99999},{\"GroupName\":\"CollateralUDF\",\"Label\":\"Map Date\",\"IdUser\":null,\"Id\":10950},{\"GroupName\":\"General\",\"Label\":\"Value Actual Cost\",\"IdUser\":null,\"Id\":10895},{\"GroupName\":\"General\",\"Label\":\"Value Land Value\",\"IdUser\":null,\"Id\":10893},{\"GroupName\":\"Appraisal\",\"Label\":\"Appraisal Order Date\",\"IdUser\":null,\"Id\":10931},{\"GroupName\":\"General\",\"Label\":\"Value As Complete\",\"IdUser\":null,\"Id\":10891},{\"GroupName\":\"CollateralUDF\",\"Label\":\"Community No.\",\"IdUser\":null,\"Id\":10976}]");

const JSONTransformation = (input) => {
    const result = {};
    result['General'] = [];
    
    input.forEach(item => {
      if (item.GroupName == null || item.GroupName == undefined) {
        result['General'].push(item);
      } else {
        if (result[item.GroupName] == null || item.GroupName == undefined) {
          result[item.GroupName] = [];
        }
        result[item.GroupName].push(item);
      }
    });
    
    return result;
  };
  
  console.log(JSON.stringify(JSONTransformation(data)));


//   Challenge:

// You have to create a function that takes input parameter as Array of Objects and returns an Object. The input is constructed from this JSON. You will see in the editor that we have already parsed it for you. If you are solving the task in a language other than JS, you can copy this JSON and convert it to an array of objects.

// "[{\"GroupName\":\"Appraisal\",\"Label\":\"Appraisal Type As Stabilized\",\"IdUser\":null,\"Id\":10917},{\"GroupName\":\"General\",\"Label\":\"City\",\"IdUser\":null,\"Id\":10875},{\"GroupName\":\"General\",\"Label\":\"Property Type\",\"IdUser\":null,\"Id\":10882},{\"GroupName\":\"CollateralUDF\",\"Label\":\"second UDF retest\",\"IdUser\":null,\"Id\":10979},{\"GroupName\":null,\"Label\":\"Omg this doesn\'t have a group name\",\"IdUser\":null,\"Id\":99999},{\"GroupName\":\"CollateralUDF\",\"Label\":\"Map Date\",\"IdUser\":null,\"Id\":10950},{\"GroupName\":\"General\",\"Label\":\"Value Actual Cost\",\"IdUser\":null,\"Id\":10895},{\"GroupName\":\"General\",\"Label\":\"Value Land Value\",\"IdUser\":null,\"Id\":10893},{\"GroupName\":\"Appraisal\",\"Label\":\"Appraisal Order Date\",\"IdUser\":null,\"Id\":10931},{\"GroupName\":\"General\",\"Label\":\"Value As Complete\",\"IdUser\":null,\"Id\":10891},{\"GroupName\":\"CollateralUDF\",\"Label\":\"Community No.\",\"IdUser\":null,\"Id\":10976}]"


// The purpose of the task is to transform the input array so that the result is an object whose keys are the unique values of the GroupName field and the value is all elements with that GroupName. Please see the example.

// For those which 'GroupName' is undefined or null include them in General group
// General group should be on the top. In other words the first key on the output object must be equals to General.




// Here is an example for what should the function return:

// {
//   General: [
//    {
//     GroupName: 'General',
//     Label: 'City',
//     IdUser: null,
//     Id: 10875
//    },
//    ...
//   ],
//   Appraisal: [
//    {
//     GroupName: 'Appraisal',
//     Label: 'Appraisal Type As Stabilized',
//     IdUser: null,
//     Id: 10917
//    },
//    {
//     GroupName: 'Appraisal',
//     Label: 'Appraisal Order Date',
//     IdUser: null,
//     Id: 10931
//    },
//    ...
//   ]
// };