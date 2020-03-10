import { connect } from 'react-redux';
import SplashScreen from './SplashScreen';
import { bindActionCreators, Dispatch } from 'redux';
import { IState } from '../../types/state';

const mapStateToProps = (state: IState) => ({
    isLoggedIn: state.account.isLoggedIn,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({}, dispatch);
};

export interface ISplashScreenReduxProps
    extends ReturnType<typeof mapStateToProps>,
        ReturnType<typeof mapDispatchToProps> {}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
