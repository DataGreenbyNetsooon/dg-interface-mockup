import React from "react";

const mockNews = [
  {
    id: 1,
    title: "DataGreen Launches New Sensor Technology",
    summary: "DataGreen has launched a new line of sensors that are more accurate and energy-efficient.",
    link: "#"
  },
  {
    id: 2,
    title: "DataGreen Partners with GreenTech",
    summary: "DataGreen has announced a partnership with GreenTech to develop sustainable data solutions.",
    link: "#"
  },
  {
    id: 3,
    title: "DataGreen Wins Innovation Award",
    summary: "DataGreen has been awarded the Innovation Award for its groundbreaking work in data analytics.",
    link: "#"
  }
];

const News = () => {
  return (
    <div>
      <ul className="mt-4 space-y-2">
        {mockNews.map((item) => (
          <li key={item.id} className="p-4 bg-green-100 border border-green-300 rounded-lg">
            <h4 className="text-xl font-bold">{item.title}</h4>
            <p className="text-sm text-gray-600">{item.summary}</p>
            <a href={item.link} className="text-green-600 underline">Read more</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;