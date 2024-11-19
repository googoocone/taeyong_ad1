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
      alert("상담 신청이 접수되었습니다. 곧 연락드리겠습니다");
      const result = await sendEmail(new FormData(e.target));
      gtag_report_conversion();
    } catch (error) {
      alert("이메일 전송에 실패했습니다. 다시 시도해주세요.");
      console.error(error);
    }
  };
  const gtag_report_conversion = () => {
    if (typeof window !== "undefined" && typeof gtag === "function") {
      gtag("event", "conversion", {
        send_to: "AW-16722031338/cGQFCIa3quYZEOrl16U-",
      });
    }
  };

  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTitle}>
          <h3 className={styles.brownFont}>
            <a href="tel:070-4138-0508" className={styles.brownFont}>
              즉시 상담 : 070-4138-0508
            </a>
          </h3>
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
