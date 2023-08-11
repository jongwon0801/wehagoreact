import React, { useState } from 'react';
import './FindpwForm.css';
import { Link, useNavigate } from 'react-router-dom';
import SignUpHeader from '../signUp/SignUpHeader';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axiosApi from '../../AxiosApi';
import { async } from 'q';
import Swal from 'sweetalert2';

const FindpwForm = () => {
  const navigate = useNavigate();
  const [searchOption, setSearchOption] = useState('email');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [responseCode, setResponseCode] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [showVerificationField, setShowVerificationField] = useState(false);
  const [error, setError] = useState('');
  const [idError, setIdError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSearchOptionChange = (e) => {
    setSearchOption(e.target.value);
    setError('');
    setShowVerificationField(false);
    setVerificationCode('');
  };

  const handleCancel = () => {
    window.location.reload();
  };

  const handleSendVerificationCode = async (e) => {
    if(id == '') {
      setIdError(true);
      document.getElementById('id').focus();
      return;
    } else {
      setIdError(false);
    }

    if(email == '') {
      setEmailError(true);
      document.getElementById('email').focus();
      return;
    } else {
      setEmailError(false);
    }
    // 회원이 있는지 확인
    axiosApi.post('/findpw', {
      t_user_id: id,
      t_user_email: email,
    }).then((res) => {
      axiosApi.post('/mailConfirm', {
        email: email
      }).then((response) => {
        Swal.fire({
          title: false,
          text: "입력하신 이메일로 인증 번호를 발송하였습니다.",
          icon: "success",
          showCancelButton: false, // cancel버튼 숨기기. 기본은 원래 없음
          confirmButtonColor: "#3085d6", // confrim 버튼 색깔 지정
          cancelButtonColor: "#d33", // cancel 버튼 색깔 지정
          confirmButtonText: "확인", // confirm 버튼 텍스트 지정
          cancelButtonText: "취소", // cancel 버튼 텍스트 지정
          // reverseButtons: true, // 버튼 순서 거꾸로
        }).then((result) => {
          if(result.isConfirmed) {
            document.getElementById("id").disabled = true;
            document.getElementById("email").disabled = true;
            setError('');
            setShowVerificationField(true);
          }
        });
        setResponseCode(response.data);
      }).catch((response) => {
        Swal.fire({
          title: false,
          text: "인증 번호 발송에 실패했습니다.",
          icon: "error",
          showCancelButton: false, // cancel버튼 숨기기. 기본은 원래 없음
          confirmButtonColor: "#3085d6", // confrim 버튼 색깔 지정
          cancelButtonColor: "#d33", // cancel 버튼 색깔 지정
          confirmButtonText: "확인", // confirm 버튼 텍스트 지정
          cancelButtonText: "취소", // cancel 버튼 텍스트 지정
          // reverseButtons: true, // 버튼 순서 거꾸로
        });
      })
    }).catch((res) => {
      setError('아이디 또는 이메일이 일치하지 않습니다.');
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (verificationCode === '') {
      setError('인증번호를 입력해주세요.');
      document.getElementById("verificationCode").focus();
      return;
    }

    if(verificationCode == responseCode) {
      navigate('/updatepw', {state: id});
    } else {
      setError('인증번호가 일치하지 않습니다.');
      document.getElementById("verificationCode").focus();
      return;
    }
  };

  return (
    <>
      <SignUpHeader />
      <div className="find-pw-container">
        <form className="find-pw-form">
          <div className="find-pw-title">
            <LockOutlinedIcon fontSize="large" />
            비밀번호 찾기
          </div>
          <div className="find-pw-description">
            WEHAGO에 등록된 회원정보로 비밀번호를 찾으실 수 있습니다.
          </div>
          <div className="find-pw-form-group">
            <label className="find-pw-form-label" htmlFor="name">
              아이디
            </label>
            <input
              className="find-pw-form-input"
              type="text"
              id="id"
              name='id'
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
            {idError && <small className='input-id-error'>아이디를 입력하세요.</small>}
          </div>
          {searchOption === 'email' && (
            <div className="find-pw-form-group">
              <label className="find-pw-form-label" htmlFor="email">
                이메일
              </label>
              <input
                className="find-pw-form-input"
                type="email"
                id="email"
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {emailError && <small className='input-email-error'>이메일을 입력하세요.</small>}
            </div>
          )}
          <Link to={"/findid"} className='find-id-link'>
            아이디 찾기
          </Link>
          {!showVerificationField && (
            <button
            type="button"
            className="find-pw-form-button"
            onClick={handleSendVerificationCode}
            >
              인증번호 발송
            </button>
          )}
          {showVerificationField && (
            <div className="find-pw-form-group">
              <label className="find-pw-form-label" htmlFor="verificationCode">
                인증번호
              </label>
              <input
                className="find-pw-form-input"
                type="text"
                id="verificationCode"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                required
              />
              <div className="find-pw-button-group">
                <button
                  type="button"
                  className="find-pw-confirm-button"
                  onClick={handleSubmit}
                >
                  확인
                </button>
                <button
                  type="button"
                  className="find-pw-cancel-button"
                  onClick={handleCancel}
                >
                  취소
                </button>
              </div>
            </div>
          )}
          
          {error && <div className="find-pw-error">{error}</div>}
        </form>
      </div>
    </>
  );
};

export default FindpwForm;