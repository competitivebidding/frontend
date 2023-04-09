import React from 'react';
import AppHeader from '../../components/appHeader/AppHeader.jsx';
import CabinetStatistic from "@/pages/pageCabinet/CabinetStatistic";

const CabinetPage = ({title}) => {
  return (
      <>
          <AppHeader title={title}/>
          <CabinetStatistic/>
      </>
  );
}

export default CabinetPage;
