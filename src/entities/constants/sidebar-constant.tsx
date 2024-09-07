import { Link } from "@tanstack/react-router";
import { lazily } from "react-lazily";
import type { MenuProps } from "antd";

const {
  ApartmentOutlined,
  BarcodeOutlined,
  BookOutlined,
  DashboardFilled,
  FormOutlined,
  SettingFilled,
  UserOutlined,
} = lazily(() => import("@ant-design/icons"));

export const sidebarItems: MenuProps["items"] = [
  {
    key: "dashboard",
    label: <Link to="/dashboard">Dashboard</Link>,
    icon: <DashboardFilled />,
  },
  {
    key: "user",
    label: "Users",
    icon: <UserOutlined />,
    children: [
      {
        key: "list-user",
        label: <a href="#">User</a>,
        icon: <UserOutlined />,
      },
      {
        key: "list-role",
        label: <a href="#">Role</a>,
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
        label: <a href="#">Product</a>,
        icon: <BarcodeOutlined />,
      },
      {
        key: "product-category",
        label: <a href="#">Product Category</a>,
        icon: <ApartmentOutlined />,
      },
      {
        key: "ingridient",
        label: <a href="#">Ingridient</a>,
        icon: <BookOutlined />,
      },
      {
        key: "recipe",
        label: <a href="#">Recipe</a>,
        icon: <FormOutlined />,
      },
    ],
  },
];
