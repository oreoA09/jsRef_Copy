 // start with strings, numbers and booleans
 //these are immutable bcos  the values dont change when re-assigned. unlike arrays & objects

    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
    console.log(players);

    // and we want to make a copy of it.
    const team = players;
    console.log(team);

    // You might think we can just do something like this:
    //an array is muttable oor changeable
    // however what happens when we update that array?
    team[3] = 'Lux';
    console.log(team);
    // now here is the problem!
    console.log(players);
    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!
    // So, how do we fix this? We take a copy instead!
    //to copy array without changing
    const team2 = players.slice();
    console.log("team 2 =", team2);

    // or create a new array and concat the old one in
    //to copy array without changing
    const team3 = [].concat(players);
    console.log("team 3 =", team3);

    // or use the new ES6 Spread
    //to copy array without changing
    const team4 = [...players];
    console.log("team 4 =", team4);
    // now when we update it, the original one isn't changed
    team4[3] = "Oreo";
    console.log("team 4 =", team4);
    console.log("players is still =", players);
    
    // another way
    const team5 = Array.from(players);
    console.log("team 5 =", team5);

    


    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };
    console.log("person =", person);

    // and think we make a copy:
    const captain = person;
    captain.age = 99;
    console.log("captain =", captain);
    console.log("person is now=", person);

    // how do we take a copy instead?
    const cap2 = Object.assign({}, person, {age:79, name:"Oreo"});
    console.log("Captain2 =", cap2);
    console.log("person is still=", person);

    // We will hopefully soon see the object ...spread
    // const cap3 = {...person};

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
    const wes = {
        name: 'Wes',
        age: 100,
        social: {
          twitter: '@wesbos',
          facebook: 'wesbos.developer'
        }
      };
  
      console.clear();
      console.log(wes);
  
      const dev = Object.assign({}, wes);
  
      const dev2 = JSON.parse(JSON.stringify(wes));
  

  