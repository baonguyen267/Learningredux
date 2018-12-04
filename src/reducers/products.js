var initialState = [
    {
        id: 1,
        name: 'IphoneXS max',
        image: 'https://static.chotot.com.vn/1/images/3QDrXECN27w9PmUpmSriBzN2x2kT74h1RQsryKKZbcfM9CCnZfekPgnEqpqSnExga1eHgzB.ANAne5sYGymgjNj7LbpuDpvszYeb8g6J7saivYs8MZNH',
        description: 'Made in America',
        price: 1300,
        inventory: 10,
        rating: 5
    },
    {
        id: 2,
        name: 'Iphone x',
        image: 'https://www.iclarified.com/images/news/63089/304043/304043-640.jpg',
        description: 'Made in America',
        price: 800,
        inventory: 80,
        rating: 4
    },
    {
        id: 3,
        name: 'Samsung galaxy note 9',
        image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1539696016-galaxy-s9-1539695980.jpg',
        description: 'Made in Korea',
        price: 1200,
        inventory: 20,
        rating: 4
    }
];

const products = (state = initialState, action)=>{
    switch(action.type){
        default:
        return state;
    }
};

export default products;