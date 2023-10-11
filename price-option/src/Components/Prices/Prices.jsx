import Price from "../Price/Price";


const Prices = () => {

    const Prices =  [
        {
          "id": 1,
          "name": "Basic Membership",
          "features": [
            "Access to gym facilities",
            "Locker room access",
            "Standard workout equipment",
            "24/7 access",
            "Free parking"
          ],
          "price": 30.00
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "features": [
            "Access to gym facilities",
            "Locker room access",
            "Access to group fitness classes",
            "Premium workout equipment",
            "Personal trainer sessions (2/month)",
            "Sauna access",
            "Towel service"
          ],
          "price": 50.00
        },
        {
          "id": 3,
          "name": "VIP Membership",
          "features": [
            "Access to gym facilities",
            "Locker room access",
            "Access to group fitness classes",
            "Premium workout equipment",
            "Personal trainer sessions (4/month)",
            "Access to spa and sauna",
            "Free smoothie bar",
            "Priority booking for fitness classes"
          ],
          "price": 80.00
        }
      ]

    return (
        <div className="mt-10 p-10">
            <h2 className="text-5xl text-center text-yellow-400 p-4">Best Prices of the Town </h2>
           <div className="grid md:grid-cols-3 gap-5  mt-10 ">
                {
                 Prices.map(option => <Price key={option.id} option={option}></Price>)
                }
           </div>
        </div>
    );
};

export default Prices;