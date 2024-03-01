import React from 'react';
import { Icons } from '../../assets/icons';
import {
  Button,
  Rating,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from '@material-tailwind/react';
import { tabsData } from '../../data';

const ProductInfo = ({ title, setLiked, liked }) => {
  const [activeTab, setActiveTab] = React.useState('Характеристики');

  return (
    <div className="w-[570px] h-full ">
      <h2 className="text-3xl font-bold leading-9">{title}</h2>
      <span className="text-blue-gray-300 text-sm leading-[18px] block font-normal mt-[10px]">
        Код товара: 366666-2
      </span>

      <div className="flex items-center gap-8 mt-6">
        <Button
          variant="text"
          className="px-2"
          onClick={() => setLiked(!liked)}>
          <Icons.likeIcon color={liked && 'red'} />
        </Button>
        <Rating
          value={4}
          unratedColor="blue"
          ratedColor="blue"
        />
      </div>
      <Tabs
        value={activeTab}
        className="w-[370px] mt-8">
        <TabsHeader
          className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 flex gap-5"
          indicatorProps={{
            className:
              'bg-transparent border-b-[1px] border-gray-900 shadow-none  rounded-none',
          }}>
          {tabsData.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={activeTab === value ? 'text-gray-900 w-max' : 'w-max'}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {tabsData.map(({ value, desc }) => (
            <TabPanel
              className="p-0 mt-2"
              key={value}
              value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
      <span className="underline text-primary text-sm font-normal leading-4 mt-4 block cursor-pointer">
        Показать еще
      </span>
      <Button className='bg-primary uppercase mt-5 rounded py-4 px-14'>купить</Button>
    </div>
  );
};

export default ProductInfo;
