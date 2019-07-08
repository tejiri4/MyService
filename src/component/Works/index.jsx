// react libraries
import React, { useState, useEffect } from 'react';

// components
import CustomizeText from '../CustomizeText/index';
import NavBar from '../NavBar/index';

// styles
import './Works.scss';

// fixtures
import { works } from './fixtures';

// Create a Context
const WorksContext = React.createContext();

const Works = () => {
  const [selectedNavDataArr, setSelectedNavDataArr] = useState([]);

  useEffect(() => {
    const { data } = works.find(work => work.key === 'all')
    setSelectedNavDataArr(data)
  }, []);

  const selectedNavElement = (selectedValue) => {
    const { data } = works.find(work => work.key === selectedValue)
    setSelectedNavDataArr(data)
  }

  const renderBody = () => {
    return selectedNavDataArr.map((link, index) => <div className='work' key={index}><img src={link} alt='work' /></div>)
  }

  const renderDesign = (position, top, right, paddingTop, alignItems, backgroundColor, transform) => (
    design({
      position,
      top,
      right,
      paddingTop,
      alignItems
    }, { backgroundColor, opacity: 0.7, transform })
  )

  const design = (style, styleTriangle) => (
    <div style={style} className='works-component__triangle'>
      <div className='triangle' style={styleTriangle} />
      <div className='triangle' style={styleTriangle} />
      <div className='triangle' style={styleTriangle} />
    </div>
  );

  return (
    <WorksContext.Provider works={works}>
      <div className='works-component'>
        <div>
          {design({
            position: 'absolute',
            paddingTop: '55px',
            alignItems: 'flex-start'
          }, { backgroundColor: '#FAFAFA', opacity: 0.7, transform: 'rotate(90deg)' })}
          {design({
            position: 'absolute',
            paddingTop: '10px',
            alignItems: 'flex-start'
          }, { backgroundColor: '#F3F3F3', opacity: 0.9, transform: 'rotate(90deg)' })}
        </div>
        <div className='works-component__content'>
          <div className='works-component__content--header'>
            <div className='works-component__content--title'>My creative <CustomizeText text='Work' color='#2868C1' /></div>
            <div>
              <NavBar
                navArray={works}
                showTips={true}
                active={'all'}
                fontSize='9px'
                marginRight='10px'
                selectedNavElement={selectedNavElement}
                workLength={selectedNavDataArr.length}
              />
            </div>
          </div>
          <div className='works-component__content--body'>
            {renderBody()}
          </div>
        </div>
        <div>
          {renderDesign('absolute', '-50px', 0, '55px', 'flex-end', '#FAFAFA', 'rotate(-90deg)')}
          {renderDesign('absolute', '-50px', 0, '10px', 'flex-end', '#F3F3F3', 'rotate(-90deg)')}
        </div>
      </div>
    </WorksContext.Provider>
  );
}

export default Works;
