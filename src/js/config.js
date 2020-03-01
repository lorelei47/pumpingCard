/**
 * 卡池概率
 * 蓝卡: 83.14%
 * 橙卡: 16.63%
 * 红卡: 0.023%
 */
const Url = "http://q6inprpbx.bkt.clouddn.com/";

const Cards = [
    { id: 1, weight: 2, level: 2 },
    { id: 2, weight: 2, level: 2 },
    { id: 3, weight: 2, level: 2 },
    { id: 4, weight: 2, level: 2 },
    { id: 5, weight: 2, level: 2 },
    { id: 6, weight: 2, level: 2 },
    { id: 7, weight: 2, level: 2 },
    { id: 8, weight: 2, level: 2 },
    { id: 9, weight: 2, level: 2 },
    { id: 10, weight: 2, level: 2 },
    { id: 11, weight: 2, level: 2 },
    { id: 12, weight: 2, level: 2 },
    { id: 13, weight: 2, level: 2 },
    { id: 14, weight: 2, level: 2 },
    { id: 15, weight: 2, level: 2 },
    { id: 16, weight: 2, level: 2 },
    { id: 17, weight: 2, level: 2 },
    { id: 18, weight: 2, level: 2 },
    { id: 19, weight: 2, level: 2 },
    { id: 20, weight: 2, level: 2 },
    { id: 21, weight: 2, level: 2 },
    { id: 22, weight: 2, level: 2 },
    { id: 23, weight: 2, level: 2 },
    { id: 24, weight: 2, level: 2 },
    { id: 25, weight: 2, level: 2 },
    { id: 26, weight: 2, level: 2 },
    { id: 27, weight: 2, level: 2 },
    { id: 28, weight: 2, level: 2 },
    { id: 29, weight: 2, level: 2 },
    { id: 30, weight: 2, level: 2 },
    { id: 31, weight: 2, level: 2 },
    { id: 32, weight: 2, level: 2 },
    { id: 33, weight: 2, level: 2 },
    { id: 34, weight: 2, level: 2 },
    { id: 35, weight: 2, level: 2 },
    { id: 36, weight: 2, level: 2 },
    { id: 37, weight: 5, level: 3 },
    { id: 38, weight: 5, level: 3 },
    { id: 39, weight: 5, level: 3 },
    { id: 40, weight: 5, level: 3 },
    { id: 41, weight: 5, level: 3 },
    { id: 42, weight: 5, level: 3 },
    { id: 43, weight: 5, level: 3 },
    { id: 44, weight: 5, level: 3 },
    { id: 45, weight: 5, level: 3 },
    { id: 46, weight: 5, level: 3 },
    { id: 47, weight: 5, level: 3 },
    { id: 48, weight: 5, level: 3 },
    { id: 49, weight: 5, level: 3 },
    { id: 50, weight: 5, level: 3 },
    { id: 51, weight: 5, level: 3 },
    { id: 52, weight: 5, level: 3 },
    { id: 53, weight: 5, level: 3 },
    { id: 54, weight: 5, level: 3 },
    { id: 55, weight: 5, level: 3 },
    { id: 56, weight: 5, level: 3 },
    { id: 57, weight: 5, level: 3 },
    { id: 58, weight: 5, level: 3 },
    { id: 59, weight: 5, level: 3 },
    { id: 60, weight: 5, level: 3 },
    { id: 61, weight: 5, level: 3 },
    { id: 62, weight: 5, level: 3 },
    { id: 63, weight: 5, level: 3 },
    { id: 64, weight: 5, level: 3 },
    { id: 65, weight: 5, level: 3 },
    { id: 66, weight: 5, level: 3 },
    { id: 67, weight: 5, level: 3 },
    { id: 68, weight: 5, level: 3 },
    { id: 69, weight: 5, level: 3 },
    { id: 70, weight: 5, level: 3 },
    { id: 71, weight: 5, level: 3 },
    { id: 72, weight: 5, level: 3 },
    { id: 73, weight: 5, level: 3 },
    { id: 74, weight: 5, level: 3 },
    { id: 75, weight: 5, level: 3 },
    { id: 76, weight: 5, level: 3 },
    { id: 77, weight: 5, level: 3 },
    { id: 78, weight: 5, level: 3 },
    { id: 79, weight: 5, level: 3 },
    { id: 80, weight: 5, level: 3 },
    { id: 81, weight: 5, level: 3 },
    { id: 82, weight: 5, level: 3 },
    { id: 83, weight: 5, level: 3 },
    { id: 84, weight: 5, level: 3 },
    { id: 85, weight: 5, level: 3 },
    { id: 86, weight: 5, level: 3 },
    { id: 87, weight: 5, level: 3 },
    { id: 88, weight: 5, level: 3 },
    { id: 89, weight: 5, level: 3 },
    { id: 90, weight: 5, level: 3 },
    { id: 91, weight: 5, level: 3 },
    { id: 92, weight: 5, level: 3 },
    { id: 93, weight: 5, level: 3 },
    { id: 94, weight: 5, level: 3 },
    { id: 95, weight: 5, level: 3 },
    { id: 96, weight: 5, level: 3 },
    { id: 97, weight: 5, level: 3 },
    { id: 98, weight: 5, level: 3 },
    { id: 99, weight: 5, level: 3 },
    { id: 100, weight: 5, level: 3 },
    { id: 101, weight: 5, level: 3 },
    { id: 102, weight: 5, level: 3 },
    { id: 103, weight: 5, level: 3 },
    { id: 104, weight: 5, level: 3 },
    { id: 105, weight: 5, level: 3 },
    { id: 106, weight: 5, level: 3 },
    { id: 107, weight: 5, level: 3 },
    { id: 108, weight: 5, level: 3 },
    { id: 109, weight: 1, level: 1 }
];