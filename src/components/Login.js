import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth';
import classes from './Login.module.css';

const Login = () => {
    const dispatch = useDispatch();

    const loginHandler = () => {
        dispatch(authActions.login());
    }
    return (
        <div className={classes.login}>
            <button onClick={loginHandler}>Login</button>
        </div>
    )
}

export default Login;