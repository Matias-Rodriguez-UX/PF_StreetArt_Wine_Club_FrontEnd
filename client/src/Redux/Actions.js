import axios from "axios";
export const ORDER_STATES = "ORDER_STATES";

export function orderStates(payload) {
    return {
      type: ORDER_BY,
      payload,
    };
  }