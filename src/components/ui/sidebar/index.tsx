"use client";
import type { FC, ReactElement } from "react";
import { Flex, Menu, Typography, Layout } from "antd";
import { MenuProps } from "antd";
import {
  ApartmentOutlined,
  BarcodeOutlined,
  BookOutlined,
  DashboardFilled,
  FormOutlined,
  SettingFilled,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "@tanstack/react-router";

const sidebarItems: MenuProps["items"] = [
  {
    key: "dashboard",
    label: <Link href="/">Dashboard</Link>,
    icon: <DashboardFilled />,
  },
  {
    key: "user",
    label: "Users",
    icon: <UserOutlined />,
    children: [
      {
        key: "list-user",
        label: <Link href="/user">User</Link>,
        icon: <UserOutlined />,
      },
      {
        key: "list-role",
        label: <Link href="/role">Role</Link>,
        icon: <SettingFilled />,
      },
    ],
  },
  {
    key: "products",
    label: "Products",
    icon: <BarcodeOutlined />,
    children: [
      {
        key: "product",
        label: <Link href="/product">Product</Link>,
        icon: <BarcodeOutlined />,
      },
      {
        key: "product-category",
        label: <Link href="/product-category">Product Category</Link>,
        icon: <ApartmentOutlined />,
      },
      {
        key: "ingridient",
        label: <Link href="/ingridient">Ingridient</Link>,
        icon: <BookOutlined />,
      },
      {
        key: "recipe",
        label: <Link href="/recipe">Recipe</Link>,
        icon: <FormOutlined />,
      },
    ],
  },
];

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
      <Menu
        mode="inline"
        style={{ height: "100%", borderRight: 0 }}
        items={sidebarItems}
      />
    </Sider>
  );
};
