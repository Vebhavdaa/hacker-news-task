import React, { useState } from 'react';
import { Button, Box } from '@mui/material';

interface MenuHeaderProps {
  setApi: React.Dispatch<React.SetStateAction<string>>;
  setStart: React.Dispatch<React.SetStateAction<number>>;
  setEnd: React.Dispatch<React.SetStateAction<number>>;
}

const MenuHeader: React.FC<MenuHeaderProps> = ({ setApi, setStart, setEnd }) => {
  const [activeButton, setActiveButton] = useState<string>('');

  const handleChange = (inp: string) => {
    if (activeButton === '' && inp === 'Past') return;
    setActiveButton(inp);
    const newApi = inp === 'New' ? 'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty' : 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
    setApi(newApi);
    setStart(0);
    setEnd(5);
  };

  return (
    <Box mt={2} pr={2} pl={2}>
      <Button
        style={{ backgroundColor: activeButton === 'New' ? '#FBC91B' : '#F2F2F2', marginRight: '8px', padding: '6px 19px', borderRadius: '12px' }}
        onClick={() => handleChange('New')}
      >
        <span className='menu-button button-font'>New</span>
      </Button>
      <Button
        style={{ backgroundColor: activeButton === 'Past' ? '#FBC91B' : '#F2F2F2', padding: '6px 19px', borderRadius: '12px' }}
        onClick={() => handleChange('Past')}
      >
        <span className='menu-button button-font'>Past</span>
      </Button>
    </Box>
  );
};

export default MenuHeader;
