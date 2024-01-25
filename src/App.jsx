import { useState } from "react";
import Header from "./assets/components/Header";
import Form from "./assets/components/Form";
import PackingList from "./assets/components/PackingList";
import States from "./assets/components/States";
import { ItemContextProvider } from "./assets/context/itemContext";
import Layout from "./assets/components/Layout";
import Main from "./assets/components/Main";

export default function App() {
 
  return (
    <div className="app">
      <ItemContextProvider>
      <Layout>
      <Header/>
      <Main/>
      <States />
      </Layout>
        </ItemContextProvider>
    </div>
  );
}
