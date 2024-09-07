"use client";
import { Suspense, type FC, type ReactElement } from "react";
import { sidebarItems } from "@/entities/constants/sidebar-constant";
import { lazily } from "react-lazily";
import { Layout } from "antd";

const { Flex, Menu, Typography } = lazily(() => import("antd"));

export const Sidebar: FC = (): ReactElement => {
  const { Sider } = Layout;
  return (
    <Sider width={220}>
      <Flex
        style={{
          padding: "20px",
          backgroundColor: "white",
        }}
      >
        <Typography.Text strong style={{ fontSize: "16px" }}>
          Serasa Erat Backoffice
        </Typography.Text>
      </Flex>
      <Suspense
        fallback={
          <div
            style={{
              height: "100vh",
              backgroundColor: "white",
              borderRight: 0,
              padding: "49px",
            }}
          >
            Loading...
          </div>
        }
      >
        <Menu
          mode="inline"
          style={{ height: "100%", borderRight: 0 }}
          items={sidebarItems}
        />
      </Suspense>
    </Sider>
  );
};
