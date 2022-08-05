const {taskOne,taskTwo} = require('./tasks');

async function main(){
    try {
        console.time('Measuring time');
        const results = await Promise.all([taskOne(),taskTwo()])
      
        console.timeEnd('Measuring time')

        console.log('task one returned', results[0]);
        console.log('task two returned', results[1]);
    } catch (error) {
        console.log(error)
    }
}

main()