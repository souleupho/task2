import NewCollectionHeader from "./new-collection-header/new-collections-header";
import Cards from "./collection-cards/collection-cards";
import "./new-collection.css";
const NewCollection = () => {
  const cards_info = [
    {
      image:
        "https://images.unsplash.com/photo-1524095731963-b4e38d1b3329?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "title 1",
      subTitle: "sub_title",
      price: 1,
      id : 12,
    },
    {
      image:
        "https://images.unsplash.com/photo-1524095731963-b4e38d1b3329?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "title 2",
      subTitle: "sub_title",
      price: 1,
      id : 13,
    },
    {
      image:
        "https://images.unsplash.com/photo-1524095731963-b4e38d1b3329?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "title 3",
      subTitle: "sub_title",
      price: 1,
      id : 14,
    },
    {
      image:
        "https://images.unsplash.com/photo-1524095731963-b4e38d1b3329?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "title 4",
      subTitle: "sub_title",
      price: 1,
      id : 15,
    },
    {
      image:
        "https://images.unsplash.com/photo-1524095731963-b4e38d1b3329?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "title 5",
      subTitle: "sub_title",
      price: 1,
      id : 16,
    },
  ];
  return (
    <div className="new-collection">
      <NewCollectionHeader />
      <div className="list-cards">
        {cards_info.map((item, index) => {
          return (
            <Cards
              id={item.id}
              key={index}
              image={item.image}
              title={item.title}
              sub_title={item.subTitle}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;
