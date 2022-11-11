/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { PageHeader, Button } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Styles = {
  backgroundColor: '#000',
  padding: '0 30px',
  // display: 'flow',
};

const botaoRegistrar = {
  color: '#5cf426',
  backgroundColor: '#000000',
  fontWeight: 'bold',
  float: 'right' as const,
  marginTop: 10,
};

const HeaderStyle = {};

function Header() {
  const router = useRouter();
  return (
    <div style={HeaderStyle}>
      <PageHeader
        style={Styles}
        // onBack={() => null}
        // title="Black Hole"
        // subTitle="Atravez das Dimensões"
      >
        <img width={60} src="./images/Blackhole-256px.png" />
        <Button
          type="primary"
          style={botaoRegistrar}
          onClick={() => router.push('/Registrar/Index')}
        >
          Registrar-se
        </Button>
      </PageHeader>
    </div>
  );
}
export default Header;
