'use client'
import { useAppDispatch } from "@/Redux/Hooks";
import { fetchChatApiData, fetchChatMemberApiData } from "@/Redux/Reducers/ChatSlice";
import { useEffect } from "react";
import { Container, Row } from "reactstrap";
import { LeftSideBar } from "./LeftSideBar";
import UserChat from "./UserChat";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import { ChatTitle, PrivateChatTitle } from "@/Constant";

const Chat = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchChatMemberApiData());
    dispatch(fetchChatApiData());
  }, []);

  return (
    <>
      <Breadcrumbs mainTitle={PrivateChatTitle} parent={ChatTitle} title={PrivateChatTitle} />
      <Container fluid>
        <Row className="g-0">
          <LeftSideBar />
          <UserChat />
        </Row>
      </Container>g
    </>
  );
};

export default Chat;