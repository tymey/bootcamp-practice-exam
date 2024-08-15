// var mocha = require('mocha');
// var chai = require('chai');
// var sinon = require('sinon');

// const assert = chai.assert;
// const expect = chai.expect;
// const should = chai.should();
// chai.use(require('sinon-chai'));


// const stdout = require("test-console").stdout;
// const stderr = require("test-console").stderr;


describe('cancelSubscriptions', function() {
  let sandbox = sinon.createSandbox();
  
  beforeEach(() => {
    sinon.spy(console, 'log');
    sandbox.data = [
      {
      name: "HBOMax",
      type: 'streaming',
      costPerMonth: 14.99,
      cancel: false
    },
    {
      name: 'Hulu',
      type: 'streaming',
      costPerMonth: 7.99,
      cancel: false
    },
    {
      name: 'Netflix',
      type: 'streaming',
      costPerMonth: 9.99,
      cancel: false
    },
    {
      name: 'Express VPN',
      type: 'software',
      costPerMonth: 12.95,
      cancel: false
    },
    {
      name: 'Adobe Premiere Pro',
      type: 'software',
      costPerMonth: 20.99,
      cancel: false
    },
  ];
    
  });

  afterEach(() => {
    console.log.restore();
    sandbox.restore();
  });

//   it('should log something', function(){
//     cancelSubscriptions();
//     console.log(console.log.args.flat());
//   })

  it('should update cancel property', function(){
    cancelSubscriptions(sandbox.data);
    expect(sandbox.data[0].cancel).to.equal(true);
    expect(sandbox.data[4].cancel).to.equal(true);
  });
  it('should not update cancel properties on wrong items', function(){
    cancelSubscriptions(sandbox.data);
    expect(sandbox.data[1].cancel).to.equal(false);
    expect(sandbox.data[2].cancel).to.equal(false);
  });
});

describe('subscriptionList', function(){
  it('should return a string', function(){
    assert.equal(typeof subscriptionList(subscriptions), 'string');
  });
  it('should return a properly formatted string', function(){
    let correct = "HBOMax - 14.99\nHulu - 7.99\nNetflix - 9.99\nExpress VPN - 12.95\nAdobe Premiere Pro - 20.99\n";
    assert.equal(subscriptionList(subscriptions), correct);
  });
  it('should use native reduce method', function(){
    let func = subscriptionList.toString();
    assert.equal(func.includes('.reduce('), true);
  });
});

describe('getSubscriptionObject', function() {
  it('should return an object if subscription is found', function() {
    let result = getSubscriptionObject(subscriptions, 'Hulu');
    assert.equal(typeof result, 'object')
  });
  it('should return the correct object if found', function(){
    let result = getSubscriptionObject(subscriptions, 'Hulu');
    assert.deepEqual(result, { name: 'Hulu', costPerMonth: 7.99});
  });
  it('should return an object if subscription is not found', function(){
    let result = getSubscriptionObject(subscriptions, 'Disney Plus');
    assert.deepEqual(result, { name: null, costPerMonth: null });
  });
  it('should use recursion', function(){
    let func = getSubscriptionObject.toString();
    expect(func.includes('getSubscriptionObject(')).to.equal(true);
  });
});

describe('updateSubscription', function(){
  let sandbox = sinon.createSandbox();
  
  beforeEach(() => {
    sandbox.data = [
      {
      name: "HBOMax",
      type: 'streaming',
      costPerMonth: 14.99,
      cancel: false
      },
      {
        name: 'Hulu',
        type: 'streaming',
        costPerMonth: 7.99,
        cancel: false
      },
      {
        name: 'Netflix',
        type: 'streaming',
        costPerMonth: 9.99,
        cancel: false
      },
      {
        name: 'Express VPN',
        type: 'software',
        costPerMonth: 12.95,
        cancel: false
      },
      {
        name: 'Adobe Premiere Pro',
        type: 'software',
        costPerMonth: 20.99,
        cancel: false
      },
    ];
  });

  afterEach(() => {
    sandbox.restore();
  });
  
  it('should return an object', function(){
    let result = updateSubscription(sandbox.data[0], [ ['name', 'Max'], ['costPerMonth', 12.99] ]);
    assert.equal(typeof result, 'object');
  });
  
  it('should properly update the input object', function(){
    let result = updateSubscription(sandbox.data[0], [ ['name', 'Max'], ['costPerMonth', 12.99] ]);
    assert.deepEqual(result, {
      name: 'Max',
      type: 'streaming',
      costPerMonth: 12.99,
      cancel: false
    });
  });
});

describe('getMultipleUsers', function(){
  it('should return an array', function(){
    assert.equal(Array.isArray(getMultipleUsers(subscriptions)), true);
  });
  it('should use the native filter method', function(){
    let func = getMultipleUsers.toString();
    assert.equal(func.includes('.filter('), true);
  });
  it('should return an array of subscriptions with multiple users', function(){
    assert.deepEqual(getMultipleUsers(subscriptions), [
      {
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
      {
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
      }
    ])
  });
});

describe('getUsersArray', function(){
  it('should return an array', function(){
    assert.equal(Array.isArray(getUsersArray(subscriptions)), true);
  });
  it('should return a mapped array', function(){
    assert.deepEqual(getUsersArray(subscriptions), [
      {
        name: 'HBOMax',
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
      {
        name: 'Hulu',
        users: [
          {
            ip: '184.190.92.50',
            lastAccessed: '5/22/2023'
          }
        ]
      },
      {
        name: 'Netflix',
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
      {
        name: 'Express VPN',
        users: [
          {
            ip: '184.190.92.50',
            lastAccessed: '5/22/2023'
          }
        ]
      },
      {
        name: 'Adobe Premiere Pro',
        users: [
          {
            ip: '184.190.92.50',
            lastAccessed: '5/22/2023'
          }
        ]
      }
    ])
  });
  it('should use the native map method', function(){
    let func = getUsersArray.toString();
    assert.equal(func.includes('.map('), true);
  });
});