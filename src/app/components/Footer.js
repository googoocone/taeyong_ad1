// components/Footer.js
"use client";
import React, { useState } from "react";
import styles from "./Footer.module.css";
import { sendEmail } from "../../../lib/action"; // sendEmail 함수 임포트

const Footer = () => {
  // 폼 데이터 상태 관리
  const [formData, setFormData] = useState({
    name: "",
    number: "",
  });

  // 인풋 값 변경 시 상태 업데이트
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 폼 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 전화번호가 11자리가 아닐 경우 경고 메시지
    if (formData.number.length !== 11) {
      alert("전화번호는 11자리여야 합니다.");
      return;
    }

    try {
      // 폼 데이터를 서버에 전송
      const result = await sendEmail(new FormData(e.target));
      alert("상담 신청이 접수되었습니다.");
    } catch (error) {
      console.error(error);
      alert("이메일 전송에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTitle}>
          <span className={styles.brownFont}>딱! 한번의</span> 전문상담으로
          채무를 해결해보세요.
        </div>
        <div className={styles.footerForm}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.flexBox}>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  name="name"
                  placeholder="이름"
                  className={styles.input}
                  required
                  value={formData.name}
                  onChange={handleChange}
                />

                <input
                  type="tel"
                  name="number"
                  placeholder="전화번호"
                  className={styles.input}
                  required
                  value={formData.number}
                  onChange={handleChange}
                />
              </div>
              <div>
                <button type="submit" className={styles.button}>
                  상담 신청
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
