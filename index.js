function getButter() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Husband got butter.');
            resolve('Butter');
        }, 2000); // Simulating a 2-second delay
    });
}

// Simulating a function to get cold drinks
function getColdDrinks() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Husband got cold drinks.');
            resolve('Cold Drinks');
        }, 1500); // Simulating a 1.5-second delay
    });
}

// Using Promises
getButter()
    .then(butter => {
        console.log(`Husband got ${butter}. Now getting cold drinks...`);
        return getColdDrinks();
    })
    .then(drinks => {
        console.log(`Husband got ${drinks}.`);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Using async/await
async function getButterAndDrinksAsync() {
    try {
        const butter = await getButter();
        console.log(`Husband got ${butter}. Now getting cold drinks...`);
        const drinks = await getColdDrinks();
        console.log(`Husband got ${drinks}.`);
    } catch (error) {
        console.error('Error:', error);
    }
}