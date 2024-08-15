# bootcamp-practice-exam

### Required Practice Exam

#### Welcome to Subscription Manager, a web application that tracks how many services a user subscribes to. As a newly hired web developer, you will need to complete some initial tasks.

1. Create a function called `cancelSubscriptions` that takes in one parameter - `array` - that represents an array of subscription objects. This function should iterate through the input array of subscriptions and set EVERY OTHER subscription object's `cancel` property to true, but only if the cost of the subscription is more than 10 dollars.
- [ {check for cancellation}, {}, {check for cancellation}, {}, {check for cancellation}];
2. Create a function called `subscriptionList` that takes in one parameter - `array` - which represents an array of subscription objects. This function should use the native reduce method to return a string that formats the subscriptions like as such:
```
HBOMax - 14.99
Hulu - 7.99
Netflix - 9.99
Express VPN - 12.95
Adobe Premiere Pro - 20.99

```
- This is an example of what the return value should look like as a string: `"HBOMax - 14.99\nHulu - 7.99\nNetflix - 9.99\nExpress VPN - 12.95\nAdobe Premiere Pro - 20.99\n"`
  
3. Create a function called `getSubscriptionObject` that takes in two parameters - `array` and `name`. `array` represents an array of subscription objects; `name` is a string of a subscription (example: 'HBOMax'). This function should use recursion to find the subscription object matching the input name. If the subscriptio is found, the function should return an object containing the subscription's name and cost property. If no subscription is found, the function should return an object with the name and cost properties set to null.
- getSubscriptionObject('HBOMax'); // => { name: 'HBOMax', costPerMonth: 14.99 }
- getSubscriptionObject('Disney Plus'); // => { name: null, costPerMonth: null }

4. Create a function called `updateSubscription` that takes in two parameters - `object` and `updates`. `object` represents a single subscription object; `updates` represents an array of arrays, where each subarray contains a property to update and a value to assign to that property. This function should use this `updates` array to access the necessary properties on the input object and assign the new values. `updateSubscription` should return the input object after modifying it.
```
updateSubscription(
{
  name: "HBOMax",
  type: 'streaming',
  costPerMonth: 14.99,
  cancel: false
}, [ ['name', 'Max'], ['costPerMonth', 12.99] ] 
);

// returns =>

{
  name: 'Max',
  type: 'streaming',
  costPerMonth: 12.99,
  cancel: false
}

```
5. Create a function called `getMultipleUsers` that takes in one parameter - `array` - which represents an array of subscription objects. This function should use the native filter method to return a new array of only the subscriptions that have multiple users.
6. Create a function called `getUsersArray` that takes in one parameter - `array` which represents an array of subscription objects. This function should use the native map method to return a new array of objects that only contains the `name` property of the subscription and `users` property pointing to an array of the users.
```
getUsersArray(subscriptions); // returns => 
[
  { name: 'HBOMax', users: [ [Object], [Object] ] },
  { name: 'Hulu', users: [ [Object] ] },
  { name: 'Netflix', users: [ [Object], [Object], [Object] ] },
  { name: 'Express VPN', users: [ [Object] ] },
  { name: 'Adobe Premiere Pro', users: [ [Object] ] }
]
```
