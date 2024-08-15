/////////////////////////////////////////////////////////////////
///////////////////////////// BOOTCAMP //////////////////////////
////////////////////// REQUIRED PRACTICE EXAM ///////////////////
/////////////////////////////////////////////////////////////////

let subscriptions = [
    {  // 0
      name: "HBOMax",
      type: 'streaming',
      costPerMonth: 14.99,
      cancel: false,
      users: [
        {
          ip: '184.190.92.50',
          lastAccessed: '5/22/2023'
        },
        {
          ip: '175.100.90.40',
          lastAccessed: '5/18/2023'
        }
      ]
    },
    { // 1
      name: 'Hulu',
      type: 'streaming',
      costPerMonth: 7.99,
      cancel: false,
       users: [
        {
          ip: '184.190.92.50',
          lastAccessed: '5/22/2023'
        },
      ]
    },
    { // 2
      name: 'Netflix',
      type: 'streaming',
      costPerMonth: 9.99,
      cancel: false,
       users: [
        {
          ip: '184.190.92.50',
          lastAccessed: '5/22/2023'
        },
        {
          ip: '175.100.90.40',
          lastAccessed: '5/18/2023'
        },
         {
           ip: '180.145.75.25',
           lastAccessed: '5/20/2023'
         }
      ]
    },
    { // 3
      name: 'Express VPN',
      type: 'software',
      costPerMonth: 12.95,
      cancel: false,
       users: [
        {
          ip: '184.190.92.50',
          lastAccessed: '5/22/2023'
        },
      ]
    },
    { // 4
      name: 'Adobe Premiere Pro',
      type: 'software',
      costPerMonth: 20.99,
      cancel: false,
       users: [
        {
          ip: '184.190.92.50',
          lastAccessed: '5/22/2023'
        },
      ]
    },
  ];
  
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #1 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  
  /**
   * I: The function receives an array of substriction objects.
   * O: The function returns the input array after updating every OTHER
   *    subscription's cancel property to true IF the costPerMonth property
   *    is greater than 10.
   * C: N/A
   * E: N/A
   */
  
  let cancelSubscriptions = function(array){
    // Iterate through array incrementing by 2 each loop and starting a 0
    for (let i = 0; i < array.length; i += 2) {
      // Check if array[i].costPerMonth > 10
      if (array[i].costPerMonth > 10) {
        // Reassign array[i].cancel to true
        array[i].cancel = true;
      }
    }
    // Return array
    return array;
  };
  
  
  /*
  NOTE: If you test this function in the console, remember to comment 
  out the test because this function will DESTRUCTIVELY alter the subscriptions 
  array.
  */
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #2 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  
  /**
   * I: The function receives an array of subscription object.
   * O: The function returns a string of each subscription's <name> - 
   *    <costPerMonth> with a line break after each subscription.
   * C: Must use the native reduce method.
   * E: N/A
   */
  
  let subscriptionList = function(array){
    // Return the reduction of array
    return array.reduce((acc, sub) => {
      // Concat and reassgin acc with `<sub.name> - <sub.costPerMonth>\n`
      acc += `${sub.name} - ${sub.costPerMonth}\n`;
      // Return acc
      return acc;
    // Seed value: an empty string ('')
    }, '')
  };
  
  
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #3 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  
  /**
   * I: The function receives an array of subscription objects and a 
   *    string representing the name of a subscription.
   * O: The function returns an object containing the matching input 
   *    name and its costPerMonth property. If no subscription is found,
   *    return an object with the properties set to null.
   * C: Must use recursion.
   * E: N/A
   */
  
  let getSubscriptionObject = function(array, string){
    // BASE:
    // Check if array is empty 
    if (array.length === 0) {
      // Return the null object
      return { name: null, costPerMonth: null };
    // Check else if array[0]'s name property matches input string
    } else if (array[0].name === string) {
      // Return an object with array[0]'s name and costPerMonth property
      return { name: array[0].name, costPerMonth: array[0].costPerMonth }
    }
    // RECURSION:
    // Return the recursive call of getSubscriptionObject() with array.slice(1) & string
    return getSubscriptionObject(array.slice(1), string);
  };
  
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #4 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  
  /**
   * I: The function receives an object representing a single subscription
   *    object and an array of arrays where each subarray contains a
   *    property to update and a value to assign to that property.
   * O: The function returns the input object after updating it with
   *    the updates array of arrays.
   * C: N/A
   * E: N/A
   */
  
  let updateSubscription = function(object, updates){
    // Iterate through updates array
    for (let i = 0; i < updates.length; i++) {
      // Reassign input object's updates[i][0] key with updates[i][1] value
      object[updates[i][0]] = updates[i][1];
    }
    // Return object
    return object;
  };
  
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #5 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  
  /**
   * I: The function receives an array of subscription objects.
   * O: The function returns a new array of only the subscriptions that
   *    have multiple users.
   * C: Must use the native filter method.
   * E: N/A
   */

  let getMultipleUsers = function(array){
    // Return the filter of array using sub to check if sub.users.length > 1
    return array.filter(sub => sub.users.length > 1);
  }; 
  
  
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #6 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  
  /**
   * I: The function receives an array of subscription objects.
   * O: The function returns a new array of objects that only contains
   *    the name property of the subscription and users property pointing
   *    to an array of the users.
   * C: Must use the native map method.
   * E: N/A
   */

  let getUsersArray = function(array){
    // Return the mapping of array using sub to get an object of the name and user property
    return array.map(sub => {return { name: sub.name, users: sub.users }});
  };
  
  
