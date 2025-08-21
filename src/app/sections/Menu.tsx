'use client';

import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import Preloader from '../components/Preloader';
import MenuItem from '../components/MenuItem';
import { filters } from '../data/data';
import './menu.css';

// Define the shape of a menu item
type MenuItemType = {
  id: number;
  name: string;
  price: number;
  preview: string;
  ingredients: string;
  category: string;
  description: string;
};

export default function Menu() {
  const [data, setData] = useState<MenuItemType[]>([]);
  const [items, setItems] = useState<MenuItemType[]>([]);

  const menu: MenuItemType[] = [
    {
      id: 1,
      name: 'Lobster Bisque',
      price: 5.95,
      preview: '/assets/images/menu/lobster-bisque.jpg',
      ingredients: 'Lorem, deren, trataro, filede, nerada',
      category: 'starters',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 2,
      name: 'Bread Barrel',
      price: 6.95,
      preview: '/assets/images/menu/bread-barrel.jpg',
      ingredients: 'Lorem, deren, trataro, filede, nerada',
      category: 'specialty',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 3,
      name: 'Crab Cake',
      price: 7.95,
      preview: '/assets/images/menu/cake.jpg',
      ingredients:
        'A delicate crab cake served on a toasted roll with lettuce and tartar sauce',
      category: 'starters',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 4,
      name: 'Caesar Selections',
      price: 8.95,
      preview: '/assets/images/menu/caesar.jpg',
      ingredients: 'Lorem, deren, trataro, filede, nerada',
      category: 'salads',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 5,
      name: 'Tuscan Grilled',
      price: 9.95,
      preview: '/assets/images/menu/tuscan-grilled.jpg',
      ingredients:
        'Grilled chicken with provolone, artichoke hearts, and roasted red pesto',
      category: 'specialty',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 6,
      name: 'Mozzarella Stick',
      price: 4.95,
      preview: '/assets/images/menu/mozzarella.jpg',
      ingredients: 'Lorem, deren, trataro, filede, nerada',
      category: 'starters',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 7,
      name: 'Greek Salad',
      price: 9.95,
      preview: '/assets/images/menu/greek-salad.jpg',
      ingredients: 'Fresh spinach, crisp romaine, tomatoes, and Greek olives',
      category: 'salads',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 8,
      name: 'Spinach Salad',
      price: 9.95,
      preview: '/assets/images/menu/spinach-salad.jpg',
      ingredients:
        'Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette',
      category: 'salads',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 9,
      name: 'Lobster Roll',
      price: 12.95,
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'specialty',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
  ];

  //const getMenuData = () => {
    //fetch('http://localhost:3000/api/menu')
      //.then(res => res.json())
      //.then(menu => setData(menu))
      //.catch(e => console.log(e.message));
  //};

  useEffect(() => {
    setData(menu)
    //getMenuData();
  }, []);

  useEffect(() => {
    setItems(data);
  }, [data]);

  const handleFilterAcive = (id: number) => {
    filters.map(filter => {
      filter.active = false;
      if (filter.id === id) filter.active = true;
    });
  };

  const handleFilterChange = (id: number, category: string) => {
    handleFilterAcive(id);
    if (category === 'all') {
      setItems(data);
    } else {
      setItems(
        data.filter((item: { category: string }) => item.category === category)
      );
    }
  };

  return (
    <section id="menu" className="menu section-bg">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Our Menu" subtitle="Check Our Tasty Menu" />

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="menu-flters">
              {filters.map(filter => (
                <li
                  key={filter.id}
                  className={`${filter.active ? 'filter-active' : undefined}`}
                  onClick={() => handleFilterChange(filter.id, filter.category)}
                >
                  {filter.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="row menu-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {!items ? (
            <Preloader />
          ) : items.length > 0 ? (
            items.map(
              (item: {
                id: number;
                name: string;
                preview: string;
                price: number;
                ingredients: string;
              }) => <MenuItem key={item.id} item={item} />
            )
          ) : (
            <Preloader />
          )}
        </div>
      </div>
    </section>
  );
}
