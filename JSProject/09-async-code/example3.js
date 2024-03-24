let waitingTime = 0;

const ticket = (id) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if(waitingTime < 50)
            resolve(serverTheMeal(id));
        else
            reject(cancelOrder(id));
    }, 5000);
});


// A function which will create a ticket for the meal
const createTicket = (id) => {
    waitingTime = 5;
    ticket(id).then(() => {
        console.log(`Order: ${id} => Ticket resolved, waiting time: ${waitingTime}`);
    }).catch(() => {
        console.log(`Order: ${id} => Ticket rejected, waiting time: ${waitingTime}`);
    }).finally(() => {
        console.log(`Order: ${id} => Ticket processing finished.`);
    });
}

// Async-await version of createTicket
const createTicketAsync = async (id) => {
    waitingTime = 5;
    try {
        await ticket(id);
        console.log(`Order: ${id} => Ticket resolved, waiting time: ${waitingTime}`);
    } catch {
        console.log(`Order: ${id} => Ticket rejected, waiting time: ${waitingTime}`);
    } finally {
        console.log(`Order: ${id} => Ticket processing finished.`);
    }
}

// A function which will cook the meal
const cookMeal = (id) => {
    // wait for the meal to be cooked
    setTimeout(() => {
        // set a random number between 40 and 70 in waitingTime
        waitingTime = Math.floor(Math.random() * (70 - 40 + 1) + 40);
        console.log(`Order: ${id} => Meal cooked, waiting time: ${waitingTime}`);
    }, 2000);
}

// A function which will serve the meal
const serverTheMeal = (id) => {
    console.log(`Order: ${id} => Meal served, waiting time: ${waitingTime}`);
}

// A function which will cancel the order
const cancelOrder = (id) => {
    console.log(`Order: ${id} => Order cancelled, waiting time: ${waitingTime}`);
}


// A function which will call createTicket function and then wait for coocking the meal
const orderMeal = () => {
    const id = Math.floor(Math.random() * 1000);
    createTicket(id);
    cookMeal(id);

    console.log(`Order ${id} placed`);
}

// Async-await version of orderMeal
const orderMealAsync = async () => {
    const id = Math.floor(Math.random() * 1000);
    await createTicketAsync(id);
    cookMeal(id);

    console.log(`Order ${id} placed`);
}



// Finally place the order
orderMeal();

//await orderMealAsync();
