import { string } from 'prop-types';
import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import './App.less';
import Header from './Header';
import { getDescription, getTitle, store } from './store';

function App(props) {
  // store value as selector
  const title = useSelector((state) => state?.hello.title);

  // store value as props to component
  const { description } = props;

  useEffect(() => {
    store.dispatch(getTitle());
    store.dispatch(getDescription());
  });

  return (
    <>
      <Header />
      <div style={{ padding: '50px' }}>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra, lacus non congue tincidunt, eros augue vulputate
          tortor, at vulputate quam velit vitae tellus. Duis nec mauris iaculis, efficitur turpis vel, convallis purus. Praesent
          tempus sodales magna, non tincidunt ligula varius a. Duis et ultricies tortor. Sed aliquam risus vitae magna bibendum
          vehicula. Sed eu dui ligula. Nam ut dolor iaculis, porta libero ac, fringilla elit. Pellentesque vel ultricies velit.
          Vestibulum condimentum eros et mauris consequat laoreet. Quisque vel nibh ut quam viverra laoreet. Fusce eget sodales
          nulla. Quisque maximus risus arcu, ut commodo augue imperdiet sit amet. Maecenas pretium at odio non lacinia.
          Suspendisse vel eros nunc. Mauris dignissim est sed tortor consequat laoreet. Aliquam at ante vitae quam tincidunt
          accumsan eget eu leo. Vestibulum ac est gravida, eleifend massa at, fermentum arcu. Quisque vel velit vel nibh bibendum
          tincidunt. Mauris pellentesque, lorem vitae fermentum mollis, quam quam imperdiet lacus, ut ultrices eros ipsum eget
          augue. Donec convallis hendrerit metus nec facilisis. Sed pretium velit in sem iaculis dignissim. Quisque feugiat
          gravida viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus
          id nulla tempus, semper est ac, vestibulum sem. Sed id sapien est. Sed tristique cursus posuere. Proin faucibus
          efficitur enim, at rutrum nunc maximus nec. Maecenas rutrum nunc eget nulla pharetra vulputate. Sed odio felis, mollis
          vel velit vitae, porttitor ornare metus. Nulla ultricies nisi mauris, at eleifend nulla gravida volutpat. Cras ut felis
          id nunc eleifend euismod in nec ipsum. Suspendisse suscipit felis nisl, ac euismod felis commodo at. Suspendisse
          efficitur ultricies velit in dictum. Nullam lectus mauris, cursus a nisi id, vulputate aliquam dui. Nullam ut enim
          nulla. In mollis felis et arcu viverra fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Duis ultricies maximus placerat. Sed quis lorem risus. Pellentesque molestie dolor vel lacinia
          semper. Nullam nec lectus in nisi tincidunt laoreet. Curabitur metus velit, posuere vitae sapien in, interdum facilisis
          elit. Nunc porta magna nunc, in blandit urna aliquam sit amet. Proin pellentesque id augue sed eleifend. Donec auctor a
          ante at fermentum. Proin in lorem ipsum. Donec nec fringilla lorem. Cras rhoncus elit non enim ultrices laoreet. Nam
          vehicula leo id mauris vehicula, eget ornare mi lacinia. Praesent sodales eget urna et facilisis. Nullam non tincidunt
          diam. Praesent turpis enim, ornare a dui vel, vulputate scelerisque purus. Nam tincidunt, velit at tempor maximus,
          lectus turpis lacinia dolor, id dignissim nisi diam id lectus. Nunc eget blandit massa. Integer at augue mauris. Aenean
          lorem turpis, commodo vel rutrum a, eleifend in arcu. Quisque sodales scelerisque ipsum non vulputate. Ut scelerisque
          ante sit amet odio porta eleifend. In egestas id elit a fermentum. Mauris eu massa quis metus lobortis eleifend.
          Suspendisse sit amet justo ex. Aliquam eget vehicula massa. Mauris sed condimentum purus. Sed consequat elit ex, at
          viverra arcu consequat id. Aliquam erat volutpat. Nullam tristique risus ac tincidunt pharetra. Proin semper urna sed
          diam volutpat tincidunt. Etiam et nunc eu risus aliquam varius. Donec ante leo, ullamcorper nec augue ut, placerat
          convallis diam.
        </p>
      </div>
    </>
  );
}

App.propTypes = {
  title: string,
  description: string,
};

App.defaultProps = {
  title: '',
  description: '',
};

function mapStateToProps(state) {
  return { ...state.hello };
}
export default connect(mapStateToProps)(App);
