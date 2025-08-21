'use client';

import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import SpecialsItem from '../components/SpecialsItem';
import './specials.css';
import Preloader from '../components/Preloader';
import { specialsFilters } from '../data/data';

export default function Specials() {
  const [data, setData] = useState<any | []>([]);
  const [items, setItems] = useState<any | []>([]);
  const specials = [
    {
      id: 1,
      image: './assets/images/specials/specials-1.png',
      title: 'Architecto ut aperiam autem id',
      subtitle:
        'Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka',
      content:
        'Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero',
      active: true,
    },
    {
      id: 2,
      image: './assets/images/specials/specials-2.png',
      title: 'Et blanditiis nemo veritatis excepturi',
      subtitle:
        'Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka',
      content:
        'Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal',
      active: false,
    },
    {
      id: 3,
      image: './assets/images/specials/specials-3.png',
      title: 'Impedit facilis occaecati odio neque aperiam sit',
      subtitle:
        'Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut',
      content:
        'Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae',
      active: false,
    },
    {
      id: 4,
      image: './assets/images/specials/specials-4.png',
      title:
        'Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore',
      subtitle:
        'Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus',
      content:
        'Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore',
      active: false,
    },
    {
      id: 5,
      image: './assets/images/specials/specials-5.png',
      title: 'Est eveniet ipsam sindera pad rone matrelat sando reda',
      subtitle: 'Omnis blanditiis saepe eos autem qui sunt debitis porro quia.',
      content:
        'Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel',
      active: false,
    },
  ];

  //const getSpecialsData = () => {
    //fetch('http://localhost:3000/api/specials')
      //.then(res => res.json())
      //.then(data => setData(data))
      //.catch(e => console.log(e.message));
  //};

  useEffect(() => {
    setData(specials)
    //getSpecialsData();
  }, []);

  useEffect(() => {
    setItems(data);
  }, [data]);

  const handleFilterAcive = (id: number) => {
    specialsFilters.map(filter => {
      filter.active = false;
      if (filter.id === id) filter.active = true;
    });
  };

  const handleSpecialChange = (id: number): void => {
    handleFilterAcive(id);
    const updatedItems = items.map(
      (item: {
        id: number;
        image: string;
        title: string;
        subtitle: string;
        content: string;
        active: boolean;
      }) => {
        item.active = false;
        if (item.id === id) item.active = true;
        return item;
      }
    );

    setItems(updatedItems);
  };

  return (
    <section id="specials" className="specials">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Specials" subtitle="Check Our Specials" />

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column">
              {specialsFilters.map(filter => (
                <li className="nav-item" key={filter.id}>
                  <a
                    className={`nav-link ${filter.active ? 'active show' : ''}`}
                    onClick={() => handleSpecialChange(filter.id)}
                  >
                    {filter.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-9 mt-4 mt-lg-0">
            <div className="tab-content">
              {!items ? (
                <Preloader />
              ) : items.length > 0 ? (
                items.map(
                  (item: {
                    id: number;
                    image: string;
                    title: string;
                    subtitle: string;
                    content: string;
                    active: boolean;
                  }) => <SpecialsItem key={item.id} item={item} />
                )
              ) : (
                <Preloader />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
