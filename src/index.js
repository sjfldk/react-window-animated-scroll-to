import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import AnimatedList from './AnimatedList';
import ItemRenderer from './ItemRenderer';

function easeInOutQuint(t) {
  return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
}

class App extends React.Component {
  state = {
    isAnimating: false,
  };

  render() {
    return (
      <div>
        <button disabled={this.state.isAnimating} onClick={this.jumpToRandom}>
          Jump to random
        </button>
        <br />
        <br />
        <AnimatedList
          className="List"
          duration={2500}
          easing={easeInOutQuint}
          width={300}
          height={300}
          onAnimationComplete={this.animationComplete}
          itemCount={10000}
          itemSize={30}
          scrollToItem={this.state.scrollToItem}
          style={{
            backgroundColor: '#eee',
          }}
        >
          {ItemRenderer}
        </AnimatedList>
      </div>
    );
  }

  animationComplete = () =>
    this.setState({
      isAnimating: false,
    });

  jumpToRandom = () => {
    const scrollToItem = Math.round(Math.random() * 999);
    this.setState({
      isAnimating: true,
      scrollToItem,
    });
  };
}

render(<App />, document.getElementById('root'));
