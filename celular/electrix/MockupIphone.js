import React from 'react';
import styled from 'styled-components';
import AppInterface from './AppInterface';

const MockupIphone = () => {
  return (
    <StyledWrapper>
      <div className="iphone-frame">
        <div className="btn-silent" />
        <div className="btn-up" />
        <div className="btn-down" />
        <div className="btn-power" />

        <div className="screen-content">
          <AppInterface />
        </div>

        {/* Dynamic Island removida para não obstruir a imagem */}
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  .iphone-frame {
    width: 280px;
    height: 580px;
    background: #000;
    border-radius: 50px;
    border: 4px solid #333;
    padding: 12px;
    position: relative;
    box-shadow: 0 20px 50px rgba(0,0,0,0.5);
  }

  .screen-content {
    background: #0A0A0A;
    height: 100%;
    width: 100%;
    border-radius: 38px;
    overflow: hidden;
    position: relative;
  }

  /* Botões Laterais */
  .btn-silent, .btn-up, .btn-down, .btn-power {
    position: absolute;
    background: #333;
    width: 3px;
    border-radius: 2px;
  }

  .btn-silent { height: 25px; left: -6px; top: 100px; }
  .btn-up { height: 50px; left: -6px; top: 150px; }
  .btn-down { height: 50px; left: -6px; top: 210px; }
  .btn-power { height: 80px; right: -6px; top: 180px; }
`;

export default MockupIphone;