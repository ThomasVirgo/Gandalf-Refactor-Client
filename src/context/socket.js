import socketio from "socket.io-client";
import { createContext } from "react";
import { SOCKET_URL } from "../config";

export const socket = socketio.connect(SOCKET_URL, { autoConnect: false });
export const SocketContext = createContext();