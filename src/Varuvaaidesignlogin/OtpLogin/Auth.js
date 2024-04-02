import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './Loginfirebase';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  

const Auth = () => {
    const [Phonenum, setPhoneNum] = useState('');
    const [otp, setOtp] = useState('');
    const [user, setUser] = useState(null);
    const [verificationInProgress, setVerificationInProgress] = useState(false);
    const[Vetifyotpdialog,setVerifyotpdialog]=useState(false)
    const navi = useNavigate();

    const getOTP = async () => {
        setVerifyotpdialog(true)
        try {
            let recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});
            let confirmation = await signInWithPhoneNumber(auth, Phonenum, recaptchaVerifier);
            setUser(confirmation);
            setVerificationInProgress(true);
        } catch (error) {
            console.log(error);
        }
    };


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const verifyOTP = async () => {
        try {
            await user.confirm(otp);
            navi("/Login");
        } catch (error) {
            console.log(error);
        }
    };


    const formatPhoneNumber = (number) => {
        // Check if the number starts with '+91', if not, add it
        if (!number.startsWith('+91')) {
            return '+91' + number;
        }
        return number;
    };

    return (
        <div className='auth_login'>
            <div>
                <input
                    type="num"
                 
                    placeholder='enter Number'
              
                    value={Phonenum}
                    onChange={(e) => setPhoneNum(formatPhoneNumber(e.target.value))}
                />
                <button onClick={getOTP}  className='otp-button'>Sent OTP</button>
                <div id='recaptcha-container'></div>
            </div>

            {verificationInProgress ? (
                <div className='otp-button'>
                    <input
                        type='text'
                        placeholder='enter OTP'
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                    <button onClick={verifyOTP}  className='otp-button'>Verify OTP</button>
                </div>
            ) : null}
<div>

</div>

        </div>
    );
};

export default Auth;
