/* File generated on Mon May 23 2016 09:29:55 GMT-0400 (EDT) */
/* Version 2016-05-10 */
/* Expires on 2016/12/27 */
/* Locked to domains ["127.0.0.1","localhost","loginandtrade.com","cityindextest9.co.uk","cityindex.com","globallogic.com.ar","cityindexpd.ektron9.dev.cityindex.co.uk","cityindexpd.ektron9.qa.cityindex.co.uk","cityindexpd.ektron9.stg.cityindex.co.uk","cityindex.co.uk","trade.getuptick.com","trade.loginandtrade.com"] */
/*
 Copyright 2014-2015-2016 ChartIQ LLC
 */

(function () {
    var trialExpiration = "undefined";
    if (trialExpiration != "undefined") {
        var expiration = new Date(trialExpiration);
        var now = new Date();
        if (now.getTime() > expiration.getTime()) {
            alert("This license has expired!");
            console.log("This license has expired!");
        } else {
            var diffDays = (expiration.getTime() - now.getTime());
            diffDays = Math.round(Math.abs(diffDays / (1000 * 60 * 60 * 24)));
            if (diffDays < 3) {
                alert("This license expires in " + diffDays + " days!");
                console.log("This license expires in " + diffDays + " days!");
            }
        }
    }
    var version = ["Version 2016-05-10"];
    if (version.length > 0 && window.STXChart && STXChart.version.length > 0) {
        if (version[0] != STXChart.version[0])
            console.log("Mismatched kernel version stxChart:" + STXChart.version[0] + " stxKernel:" + version[0]);
    }

    var domains = ["127.0.0.1", "localhost", "loginandtrade.com", "cityindextest9.co.uk", "cityindex.com", "globallogic.com.ar", "cityindexpd.ektron9.dev.cityindex.co.uk", "cityindexpd.ektron9.qa.cityindex.co.uk", "cityindexpd.ektron9.stg.cityindex.co.uk", "cityindex.co.uk", "trade.getuptick.com", "trade.loginandtrade.com"];
    if (domains.length) {
        var href = document.location.href;
        var foundOne = false;
        for (var i = 0; i < domains.length; i++) {
            var domain = domains[i];
            if (href.indexOf(domain) != -1) {
                foundOne = true;
            }
        }
        if (!foundOne) {
            console.log("!!!! Not licensed for domain " + document.location.href);
        }
    }
})();
var t0l = {
        'W6x': function (k6x, H6x) {
            return k6x & H6x;
        }
        , 'Q7N': function (B7N, r7N) {
            return B7N * r7N;
        }
        , 'U8B': function (R8B, C8B) {
            return R8B === C8B;
        }
        , 'Z7j': function (z7j, c7j) {
            return z7j / c7j;
        }
        , 'J9N': function (U9N, R9N, C9N) {
            return U9N - R9N - C9N;
        }
        , 'y7a': function (Q7a, B7a) {
            return Q7a <= B7a;
        }
        , 'q6L': function (X6L, b6L) {
            return X6L > b6L;
        }
        , 'I2j': function (N2j, p2j) {
            return N2j === p2j;
        }
        , 'x7f': function (t7f, J7f) {
            return t7f - J7f;
        }
        , 'q9N': function (X9N, b9N) {
            return X9N >= b9N;
        }
        , 'o8N': function (f8N, s8N) {
            return f8N >= s8N;
        }
        , 'Y7N': function (n7N, I7N) {
            return n7N / I7N;
        }
        , 'U4a': function (R4a, C4a) {
            return R4a === C4a;
        }
        , 'd7o': function (w7o, v7o) {
            return w7o !== v7o;
        }
        , 'T1B': function (K1B, G1B) {
            return K1B / G1B;
        }
        , 'H9B': function (a9B, L9B) {
            return a9B !== L9B;
        }
        , 'z4L': function (c4L, l6L) {
            return c4L * l6L;
        }
        , 'l7L': function (A7L, T7L) {
            return A7L <= T7L;
        }
        , 'K5o': function (G5o, W5o) {
            return G5o != W5o;
        }
        , 'S3f': function (q3f, X3f) {
            return q3f == X3f;
        }
        , 'P22': function (e22, x22) {
            return e22 < x22;
        }
        , 'L7H': function (h7H, P7H) {
            return h7H == P7H;
        }
        , 'z32': 3, 'S7H': function (q7H, X7H) {
            return q7H < X7H;
        }
        , 'G4j': function (W4j, k4j) {
            return W4j - k4j;
        }
        , 'W6': function (k6, H6) {
            return k6 * H6;
        }
        , 'I22': function (N22, p22) {
            return N22 > p22;
        }
        , 'I0B': function (N0B, p0B) {
            return N0B - p0B;
        }
        , 'y6B': function (Q6B, B6B) {
            return Q6B - B6B;
        }
        , 'g1': function (u1, E1) {
            return u1 / E1;
        }
        , 'T4H': function (K4H, G4H) {
            return K4H - G4H;
        }
        , 'o6r': function (f6r, s6r) {
            return f6r * s6r;
        }
        , 'z9H': function (c9H, l0H) {
            return c9H > l0H;
        }
        , 'X6x': function (b6x, Z6x) {
            return b6x > Z6x;
        }
        , 'y72': function (Q72, B72) {
            return Q72 <= B72;
        }
        , 'i9o': function (g9o, u9o) {
            return g9o == u9o;
        }
        , 'c5r': function (l1r, A1r) {
            return l1r - A1r;
        }
        , 't2B': function (J2B, U2B) {
            return J2B < U2B;
        }
        , 'u7H': function (E7H, j7H) {
            return E7H == j7H;
        }
        , 'C4': function (D4, y4) {
            return D4 / y4;
        }
        , 'E0H': function (j0H, S0H) {
            return j0H != S0H;
        }
        , 'x1f': function (t1f, J1f) {
            return t1f < J1f;
        }
        , 'h92': function (P92, e92) {
            return P92 < e92;
        }
        , 'W9': function (k9, H9) {
            return k9 / H9;
        }
        , 'V4r': function (o4r, f4r) {
            return o4r - f4r;
        }
        , 'G1H': function (W1H, k1H) {
            return W1H < k1H;
        }
        , 'K8f': function (G8f, W8f) {
            return G8f / W8f;
        }
        , 'T8x': function (K8x, G8x) {
            return K8x < G8x;
        }
        , 'q6a': function (X6a, b6a) {
            return X6a === b6a;
        }
        , 'A6L': function (T6L, K6L) {
            return T6L / K6L;
        }
        , 'c7L': function (l9L, A9L) {
            return l9L / A9L;
        }
        , 'u8L': function (E8L, j8L) {
            return E8L !== j8L;
        }
        , 'r4H': function (F4H, m4H) {
            return F4H === m4H;
        }
        , 'z4f': function (c4f, l6f) {
            return c4f == l6f;
        }
        , 'm1f': function (O1f, Y1f) {
            return O1f / Y1f;
        }
        , 'h4a': function (P4a, e4a) {
            return P4a * e4a;
        }
        , 'e8r': function (x8r, t8r) {
            return x8r === t8r;
        }
        , 'V1B': function (o1B, f1B) {
            return o1B === f1B;
        }
        , 'L9N': function (h9N, P9N) {
            return h9N * P9N;
        }
        , 'd72': function (w72, v72) {
            return w72 < v72;
        }
        , 'd5': function (w5, v5) {
            return w5 == v5;
        }
        , 'X5f': function (b5f, Z5f) {
            return b5f < Z5f;
        }
        , 'Y3H': function (n3H, I3H) {
            return n3H - I3H;
        }
        , 'a9H': function (L9H, h9H) {
            return L9H - h9H;
        }
        , 'l3a': function (A3a, T3a) {
            return A3a > T3a;
        }
        , 'T0r': function (K0r, G0r) {
            return K0r < G0r;
        }
        , 'Q8f': function (B8f, r8f) {
            return B8f == r8f;
        }
        , 'N5r': function (p5r, d5r) {
            return p5r > d5r;
        }
        , 'Z6H': function (z6H, c6H) {
            return z6H < c6H;
        }
        , 'O72': function (Y72, n72) {
            return Y72 < n72;
        }
        , 'z5': function (c5, l1) {
            return c5 != l1;
        }
        , 'N8f': function (p8f, d8f) {
            return p8f === d8f;
        }
        , 'Z6f': function (z6f, c6f) {
            return z6f >= c6f;
        }
        , 'o7r': function (f7r, s7r) {
            return f7r >= s7r;
        }
        , 'q7B': function (X7B, b7B, Z7B) {
            return X7B - b7B + Z7B;
        }
        , 'n6L': function (I6L, N6L) {
            return I6L - N6L;
        }
        , 'n1H': function (I1H, N1H) {
            return I1H > N1H;
        }
        , 'v1f': function (V1f, o1f) {
            return V1f < o1f;
        }
        , 'o2': function (f2, s2) {
            return f2 < s2;
        }
        , 'V5H': function (o5H, f5H) {
            return o5H <= f5H;
        }
        , 'b8L': function (Z8L, z8L) {
            return Z8L / z8L;
        }
        , 'J7j': function (U7j, R7j) {
            return U7j < R7j;
        }
        , 'I9': function (N9, p9) {
            return N9 == p9;
        }
        , 'h1H': function (P1H, e1H) {
            return P1H == e1H;
        }
        , 'j5j': function (S5j, q5j) {
            return S5j == q5j;
        }
        , 'Y8L': function (n8L, I8L) {
            return n8L == I8L;
        }
        , 'Z8H': function (z8H, c8H) {
            return z8H / c8H;
        }
        , 'O1B': function (Y1B, n1B) {
            return Y1B < n1B;
        }
        , 'q9r': function (X9r, b9r, Z9r, z9r) {
            return X9r - b9r + Z9r - z9r;
        }
        , 'F1x': function (m1x, O1x) {
            return m1x <= O1x;
        }
        , 'N7j': function (p7j, d7j) {
            return p7j === d7j;
        }
        , 's9': function (M9, i9) {
            return M9 / i9;
        }
        , 'c2N': function (l4N, A4N) {
            return l4N < A4N;
        }
        , 'p1a': function (d1a, w1a) {
            return d1a != w1a;
        }
        , 'O3r': function (Y3r, n3r) {
            return Y3r - n3r;
        }
        , 'c1x': function (l8x, A8x) {
            return l8x - A8x;
        }
        , 'n2x': function (I2x, N2x, p2x) {
            return I2x - N2x + p2x;
        }
        , 'l52': 2, 'w3L': function (v3L, V3L) {
            return v3L < V3L;
        }
        , 't5j': function (J5j, U5j) {
            return J5j - U5j;
        }
        , 'o8L': function (f8L, s8L) {
            return f8L == s8L;
        }
        , 'S8r': function (q8r, X8r) {
            return q8r / X8r;
        }
        , 'E6a': function (j6a, S6a) {
            return j6a - S6a;
        }
        , 'H8B': function (a8B, L8B) {
            return a8B - L8B;
        }
        , 'X0r': function (b0r, Z0r, z0r, c0r) {
            return b0r - Z0r + z0r - c0r;
        }
        , 'W5x': function (k5x, H5x) {
            return k5x * H5x;
        }
        , 'A1N': function (T1N, K1N) {
            return T1N - K1N;
        }
        , 'Q0N': function (B0N, r0N) {
            return B0N < r0N;
        }
        , 'y6o': function (Q6o, B6o) {
            return Q6o < B6o;
        }
        , 'x6N': function (t6N, J6N) {
            return t6N === J6N;
        }
        , 'J8f': function (U8f, R8f) {
            return U8f === R8f;
        }
        , 'u0a': function (E0a, j0a) {
            return E0a < j0a;
        }
        , 'o1x': function (f1x, s1x) {
            return f1x != s1x;
        }
        , 'B0': function (r0, F0) {
            return r0 < F0;
        }
        , 'g6': function (u6, E6) {
            return u6 === E6;
        }
        , 'l5r': function (A5r, T5r) {
            return A5r < T5r;
        }
        , 'a0x': function (L0x, h0x) {
            return L0x > h0x;
        }
        , 'e62': function (x62, t62) {
            return x62 - t62;
        }
        , 'C3H': function (D3H, y3H) {
            return D3H < y3H;
        }
        , 't0x': function (J0x, U0x) {
            return J0x == U0x;
        }
        , 'd9': function (w9, v9) {
            return w9 * v9;
        }
        , 'r6': function (F6, m6) {
            return F6 * m6;
        }
        , 'J8a': function (U8a, R8a) {
            return U8a == R8a;
        }
        , 's22': function (M22, i22) {
            return M22 > i22;
        }
        , 'X6o': function (b6o, Z6o) {
            return b6o - Z6o;
        }
        , 'W9H': function (k9H, H9H) {
            return k9H > H9H;
        }
        , 't1o': function (J1o, U1o) {
            return J1o >= U1o;
        }
        , 'S7': function (q7, X7) {
            return q7 >= X7;
        }
        , 'u3': function (E3, j3) {
            return E3 > j3;
        }
        , 'w7B': function (v7B, V7B) {
            return v7B == V7B;
        }
        , 's4L': function (M4L, i4L) {
            return M4L == i4L;
        }
        , 'Z6': function (z6, c6) {
            return z6 - c6;
        }
        , 's5f': function (M5f, i5f) {
            return M5f >= i5f;
        }
        , 'u2N': function (E2N, j2N) {
            return E2N > j2N;
        }
        , 'u8a': function (E8a, j8a) {
            return E8a < j8a;
        }
        , 'a5a': function (L5a, h5a) {
            return L5a != h5a;
        }
        , 'z5j': function (c5j, l1j) {
            return c5j == l1j;
        }
        , 'S8N': function (q8N, X8N) {
            return q8N > X8N;
        }
        , 'X0x': function (b0x, Z0x) {
            return b0x * Z0x;
        }
        , 't2f': function (J2f, U2f) {
            return J2f - U2f;
        }
        , 'B9f': function (r9f, F9f) {
            return r9f / F9f;
        }
        , 'O5x': function (Y5x, n5x) {
            return Y5x <= n5x;
        }
        , 'D9j': function (y9j, Q9j) {
            return y9j == Q9j;
        }
        , 't9H': function (J9H, U9H) {
            return J9H < U9H;
        }
        , 'B2x': function (r2x, F2x) {
            return r2x / F2x;
        }
        , 'I5a': function (N5a, p5a) {
            return N5a < p5a;
        }
        , 'y5a': function (Q5a, B5a) {
            return Q5a >= B5a;
        }
        , 'G92': function (W92, k92) {
            return W92 === k92;
        }
        , 'j5a': function (S5a, q5a) {
            return S5a >= q5a;
        }
        , 'T5x': function (K5x, G5x) {
            return K5x * G5x;
        }
        , 'a5L': function (L5L, h5L) {
            return L5L - h5L;
        }
        , 'd3r': function (w3r, v3r) {
            return w3r / v3r;
        }
        , 'S9B': function (q9B, X9B) {
            return q9B < X9B;
        }
        , 'g9': function (u9, E9) {
            return u9 > E9;
        }
        , 'a5': function (L5, h5) {
            return L5 > h5;
        }
        , 'j6o': function (S6o, q6o) {
            return S6o < q6o;
        }
        , 'H1j': function (a1j, L1j) {
            return a1j == L1j;
        }
        , 'H6H': function (a6H, L6H) {
            return a6H < L6H;
        }
        , 'c3N': function (l5N, A5N) {
            return l5N < A5N;
        }
        , 'C0j': function (D0j, y0j) {
            return D0j < y0j;
        }
        , 'e0a': function (x0a, t0a) {
            return x0a < t0a;
        }
        , 'D4f': function (y4f, Q4f) {
            return y4f - Q4f;
        }
        , 'P7a': function (e7a, x7a) {
            return e7a === x7a;
        }
        , 'H6L': function (a6L, L6L) {
            return a6L - L6L;
        }
        , 'j4f': function (S4f, q4f) {
            return S4f - q4f;
        }
        , 'Y4': function (n4, I4) {
            return n4 / I4;
        }
        , 'L7B': function (h7B, P7B) {
            return h7B == P7B;
        }
        , 'l02': function (A02, T02) {
            return A02 >= T02;
        }
        , 't5x': function (J5x, U5x) {
            return J5x < U5x;
        }
        , 'G9f': function (W9f, k9f) {
            return W9f - k9f;
        }
        , 'O0B': function (Y0B, n0B) {
            return Y0B > n0B;
        }
        , 'L4': function (h4, P4) {
            return h4 == P4;
        }
        , 'W22': function (k22, H22) {
            return k22 < H22;
        }
        , 'K7j': function (G7j, W7j) {
            return G7j <= W7j;
        }
        , 'U9j': function (R9j, C9j) {
            return R9j / C9j;
        }
        , 'w2N': function (v2N, V2N) {
            return v2N > V2N;
        }
        , 'Z9f': function (z9f, c9f) {
            return z9f < c9f;
        }
        , 'D6L': function (y6L, Q6L) {
            return y6L - Q6L;
        }
        , 'r7a': function (F7a, m7a) {
            return F7a <= m7a;
        }
        , 'L8a': function (h8a, P8a) {
            return h8a > P8a;
        }
        , 'e7': function (x7, t7) {
            return x7 < t7;
        }
        , 'Z3o': function (z3o, c3o) {
            return z3o < c3o;
        }
        , 'w4x': function (v4x, V4x) {
            return v4x / V4x;
        }
        , 'a1B': function (L1B, h1B) {
            return L1B !== h1B;
        }
        , 'H2x': function (a2x, L2x) {
            return a2x <= L2x;
        }
        , 'e3': function (x3, t3) {
            return x3 / t3;
        }
        , 'b4': function (Z4, z4) {
            return Z4 * z4;
        }
        , 'N3f': function (p3f, d3f) {
            return p3f * d3f;
        }
        , 'P2j': function (e2j, x2j) {
            return e2j == x2j;
        }
        , 'S7L': function (q7L, X7L) {
            return q7L == X7L;
        }
        , 'M8f': function (i8f, g8f) {
            return i8f > g8f;
        }
        , 'b0a': function (Z0a, z0a) {
            return Z0a == z0a;
        }
        , 't5f': function (J5f, U5f) {
            return J5f < U5f;
        }
        , 'H2o': function (a2o, L2o) {
            return a2o !== L2o;
        }
        , 'K4': function (G4, W4) {
            return G4 <= W4;
        }
        , 'F2': function (O2, Y2) {
            return O2 == Y2;
        }
        , 'p9o': function (d9o, w9o) {
            return d9o - w9o;
        }
        , 'F0j': function (m0j, O0j) {
            return m0j < O0j;
        }
        , 'k62': function (H62, a62) {
            return H62 != a62;
        }
        , 'k3f': function (H3f, a3f) {
            return H3f * a3f;
        }
        , 'M8r': function (i8r, g8r) {
            return i8r * g8r;
        }
        , 'X4f': function (b4f, Z4f) {
            return b4f == Z4f;
        }
        , 'M0o': function (i0o, g0o) {
            return i0o < g0o;
        }
        , 'Q02': function (B02, r02) {
            return B02 / r02;
        }
        , 'D4j': function (y4j, Q4j, B4j) {
            return y4j * Q4j / B4j;
        }
        , 'G1N': function (W1N, k1N) {
            return W1N / k1N;
        }
        , 'k3L': function (H3L, a3L) {
            return H3L == a3L;
        }
        , 'x9f': function (t9f, J9f) {
            return t9f * J9f;
        }
        , 'N5B': function (p5B, d5B) {
            return p5B / d5B;
        }
        , 'q9o': function (X9o, b9o) {
            return X9o !== b9o;
        }
        , 'r5x': function (F5x, m5x) {
            return F5x >= m5x;
        }
        , 'z8': function (c8, l7f) {
            return c8 == l7f;
        }
        , 'u7L': function (E7L, j7L) {
            return E7L - j7L;
        }
        , 'j0x': function (S0x, q0x) {
            return S0x < q0x;
        }
        , 'x1a': function (t1a, J1a) {
            return t1a == J1a;
        }
        , 'e8N': function (x8N, t8N) {
            return x8N == t8N;
        }
        , 'Q3j': function (B3j, r3j) {
            return B3j === r3j;
        }
        , 'S0j': function (q0j, X0j) {
            return q0j == X0j;
        }
        , 'W6B': function (k6B, H6B) {
            return k6B * H6B;
        }
        , 'V2f': function (o2f, f2f) {
            return o2f - f2f;
        }
        , 's7o': function (M7o, i7o) {
            return M7o - i7o;
        }
        , 'C02': function (D02, y02) {
            return D02 >= y02;
        }
        , 'Y3N': function (n3N, I3N) {
            return n3N == I3N;
        }
        , 'R5L': function (C5L, D5L) {
            return C5L == D5L;
        }
        , 'D2': function (Q2, B2) {
            return Q2 < B2;
        }
        , 'V9L': function (o9L, f9L) {
            return o9L - f9L;
        }
        , 'U3o': function (R3o, C3o) {
            return R3o in C3o;
        }
        , 'n1f': function (I1f, N1f) {
            return I1f < N1f;
        }
        , 'Q2L': function (B2L, r2L) {
            return B2L > r2L;
        }
        , 'Y0N': function (n0N, I0N) {
            return n0N / I0N;
        }
        , 'n4f': function (I4f, N4f) {
            return I4f * N4f;
        }
        , 'N4': function (p4, d4) {
            return p4 < d4;
        }
        , 'y8': function (Q8, B8) {
            return Q8 == B8;
        }
        , 'F62': (function (b62) {
                var u62 = {}
                    , n62 = function (I62, N62) {
                        var p62 = N62 & ((62., 109) >= (1.037E3, 0x1BA) ? (0xED, 32.) : (81, 1.12E2) < 100.60E1 ? (0x7B, 0xffff) : (0xB4, 9.36E2));
                        var d62 = N62 - p62;
                        return ((d62 * I62 | ((0x254, 38.1E1) >= (0x4, 47) ? (21, 0) : (93., 137))) + (p62 * I62 | (5. >= (40.6E1, 0x25) ? 3 : 0x215 < (4.61E2, 1.08E2) ? (129.6E1, 10) : 79.7E1 >= (44., 0xDB) ? (47.1E1, 0) : (0x96, 0x190)))) | ((8., 130) <= 11.81E2 ? (48.30E1, 0) : (7, 0x150));
                    }
                    , j62 = (function () {
                        }
                    ).constructor(new b62((((128., 0xF8) <= 34 ? (1.7E2, 0xA3) : (0x63, 11.450E2) > (0x247, 9.92E2) ? (48, "y") : (102, 0x1B8)) + ((119., 0x1E3) > 68. ? (102., "l") : (0x95, 145) >= (123., 0x1F2) ? "t" : 66.3E1 > (17.90E1, 82.30E1) ? (42., 15) : (0x22E, 0x1C5)) + "{|" + (136.5E1 >= (0x256, 0x19D) ? (1.407E3, "y") : (0x15F, 9.34E2)) + ((24, 73) > (65., 142) ? 0x182 : (0x72, 0xAC) >= (129, 0x59) ? (11.57E2, "u") : (2, 0x235)) + "\'" + (11.16E2 <= (4., 39) ? 8 : (1.2630E3, 0x183) > 7 ? (31.90E1, "k") : (6., 89.) >= 2.85E2 ? 8 : (1.218E3, 3.36E2)) + "vj" + ((2.61E2, 48.) < 1.368E3 ? (140., "|") : (10.60E1, 0x203)) + "t" + ((84.60E1, 36) >= 0x30 ? 67.4E1 : (8.3E1, 0x161) < 12.700E2 ? (53.1E1, "l") : (7.49E2, 5.17E2)) + "u" + "{" + "5" + "k" + "v" + "th" + ((0x7B, 122.) > (0x1D1, 37.) ? (0x62, "p") : (0x1DC, 9)) + "uB")).Z62((0x236 >= (0x49, 132) ? (82.80E1, 7) : (128., 4.850E2) < (57, 20.8E1) ? 0x69 : (38.1E1, 30.1E1))))(), m62 = function (w62, v62, V62) {
                        if (u62[V62] !== undefined) {
                            return u62[V62];
                        }
                        var o62 = 0xcc9e2d51, f62 = (0x210 > (9.46E2, 0x230) ? (113, "n") : (6.86E2, 2.42E2) >= 149. ? (0xE2, 0x1b873593) : (33., 92) >= 14.41E2 ? (0x1C5, 0.0) : (0x211, 0x12));
                        var s62 = V62;
                        var M62 = v62 & ~0x3;
                        for (var i62 = 0; i62 < M62; i62 += 4) {
                            var g62 = (w62.charCodeAt(i62) & 0xff) | ((w62.charCodeAt(i62 + 1) & ((0x18B, 0x1B1) <= 140.0E1 ? (109, 0xff) : (0x95, 49))) << 8) | ((w62.charCodeAt(i62 + 2) & 0xff) << ((0x1A3, 0x1AB) >= 0x46 ? (8.01E2, 16) : (70, 40) > 0x39 ? (97, 'g') : (14.02E2, 0x95))) | ((w62.charCodeAt(i62 + 3) & ((0x174, 135.5E1) > 69.3E1 ? (0x1A7, 0xff) : (56, 28.40E1) >= (41., 10.69E2) ? 138. : (84., 0x197))) << 24);
                            g62 = n62(g62, o62);
                            g62 = ((g62 & (133 <= (12, 0x1C4) ? (119, 0x1ffff) : (11., 9.0E2))) << 15) | (g62 >>> 17);
                            g62 = n62(g62, f62);
                            s62 ^= g62;
                            s62 = ((s62 & 0x7ffff) << 13) | (s62 >>> 19);
                            s62 = (s62 * 5 + 0xe6546b64) | 0;
                        }
                        g62 = 0;
                        switch (v62 % (1 < (41., 0x142) ? (8, 4) : (1.048E3, 0x17D) >= 0x191 ? "u" : (34., 0xD3) <= 8. ? 9.0E1 : (102., 0x36))) {
                            case 3:
                                g62 = (w62.charCodeAt(M62 + ((65., 31.1E1) > (43.40E1, 0x113) ? (2.06E2, 2) : (51., 131.) <= 104 ? "Q" : (63, 53.) > (64, 146.) ? 6 : (0x13F, 0x251))) & 0xff) << 16;
                            case 2:
                                g62 |= (w62.charCodeAt(M62 + ((3.45E2, 10.69E2) >= 0x9 ? (0xA0, 1) : (0x202, 1.45E3))) & 0xff) << ((0x21F, 0x1CC) >= 0xCB ? (123, 8) : 35. > (129., 81) ? " " : (71, 6.57E2) > (0x4A, 12.39E2) ? 9.59E2 : (57.90E1, 59.));
                            case 1:
                                g62 |= (w62.charCodeAt(M62) & ((21, 0xD3) > 1.055E3 ? 1000 : 0x1A6 > (9.15E2, 0x257) ? (19, 1000) : (0x117, 58) <= 82 ? (128., 0xff) : (0x1AB, 4.09E2)));
                                g62 = n62(g62, o62);
                                g62 = ((g62 & 0x1ffff) << 15) | (g62 >>> 17);
                                g62 = n62(g62, f62);
                                s62 ^= g62;
                        }
                        s62 ^= v62;
                        s62 ^= s62 >>> (1.311E3 < (52, 4.75E2) ? (61.1E1, 0x1E4) : (149, 0x127) <= 0x200 ? (74., 16) : (0x231, 134.));
                        s62 = n62(s62, 0x85ebca6b);
                        s62 ^= s62 >>> 13;
                        s62 = n62(s62, 0xc2b2ae35);
                        s62 ^= s62 >>> 16;
                        u62[V62] = s62;
                        return s62;
                    }
                    , Y62 = function (q62, X62, T32) {
                        var E62;
                        var S62;
                        if (T32 > (49.90E1 >= (12.42E2, 26) ? (71.60E1, 0) : (0x156, 0x61))) {
                            E62 = j62.substring(q62, T32);
                            S62 = E62.length;
                            return m62(E62, S62, X62);
                        }
                        else if (q62 === ((133.4E1, 0x2F) <= 71 ? (0x18C, null) : (33., 1.0E1) >= (0x1F6, 73.7E1) ? 77.7E1 : (146., 34)) || q62 <= ((62, 141.) > (0x6, 0x3C) ? (121, 0) : 84.30E1 < (99.30E1, 0x139) ? (0x86, 'U') : (103., 104.) >= 0x191 ? (35.1E1, 0.499) : (24., 1.94E2))) {
                            E62 = j62.substring(0, j62.length);
                            S62 = E62.length;
                            return m62(E62, S62, X62);
                        }
                        E62 = j62.substring(j62.length - q62, j62.length);
                        S62 = E62.length;
                        return m62(E62, S62, X62);
                    }
                    ;
                return {n62: n62, m62: m62, Y62: Y62}
                    ;
            })(function (z62) {
                this.z62 = z62;
                this.Z62 = function (c62) {
                    var l32 = new String();
                    for (var A32 = 0; A32 < z62.length; A32++) {
                        l32 += String.fromCharCode(z62.charCodeAt(A32) - c62);
                    }
                    return l32;
                }
            }
        ), 'p9r': function (d9r, w9r) {
            return d9r > w9r;
        }
        , 'Z3B': function (z3B, c3B) {
            return z3B === c3B;
        }
        , 'z2f': function (c2f, l4f) {
            return c2f === l4f;
        }
        , 'f1j': function (s1j, M1j) {
            return s1j > M1j;
        }
        , 'H1r': function (a1r, L1r) {
            return a1r <= L1r;
        }
        , 'o6B': function (f6B, s6B) {
            return f6B - s6B;
        }
        , 'x6a': function (t6a, J6a) {
            return t6a >= J6a;
        }
        , 'a7a': function (L7a, h7a) {
            return L7a - h7a;
        }
        , 'C8N': function (D8N, y8N) {
            return D8N * y8N;
        }
        , 'F7n': 16, 'u3x': function (E3x, j3x) {
            return E3x !== j3x;
        }
        , 'd9L': function (w9L, v9L) {
            return w9L > v9L;
        }
        , 't0r': function (J0r, U0r) {
            return J0r > U0r;
        }
        , 'Z5x': function (z5x, c5x) {
            return z5x <= c5x;
        }
        , 'X9L': function (b9L, Z9L) {
            return b9L <= Z9L;
        }
        , 'n9o': function (I9o, N9o) {
            return I9o == N9o;
        }
        , 'w1x': function (v1x, V1x) {
            return v1x & V1x;
        }
        , 'y4B': function (Q4B, B4B, r4B) {
            return Q4B - B4B + r4B;
        }
        , 'D1r': function (y1r, Q1r) {
            return y1r / Q1r;
        }
        , 'u4o': function (E4o, j4o) {
            return E4o == j4o;
        }
        , 'W9N': function (k9N, H9N, a9N) {
            return k9N - H9N + a9N;
        }
        , 'R2j': function (C2j, D2j) {
            return C2j == D2j;
        }
        , 'v1r': function (V1r, o1r) {
            return V1r <= o1r;
        }
        , 'S4': function (q4, X4) {
            return q4 <= X4;
        }
        , 'e3L': function (x3L, t3L) {
            return x3L * t3L;
        }
        , 'l7B': function (A7B, T7B) {
            return A7B == T7B;
        }
        , 'K3B': function (G3B, W3B) {
            return G3B == W3B;
        }
        , 'Y9B': function (n9B, I9B) {
            return n9B - I9B;
        }
        , 'W9L': function (k9L, H9L) {
            return k9L - H9L;
        }
        , 'e0N': function (x0N, t0N) {
            return x0N < t0N;
        }
        , 'd5N': function (w5N, v5N) {
            return w5N === v5N;
        }
        , 'c4B': function (l6B, A6B) {
            return l6B == A6B;
        }
        , 'b6B': function (Z6B, z6B, c6B) {
            return Z6B - z6B + c6B;
        }
        , 'A1': function (T1, K1) {
            return T1 <= K1;
        }
        , 'u7r': function (E7r, j7r) {
            return E7r == j7r;
        }
        , 's2x': function (M2x, i2x) {
            return M2x < i2x;
        }
        , 'K2L': function (G2L, W2L) {
            return G2L * W2L;
        }
        , 'E1N': function (j1N, S1N) {
            return j1N * S1N;
        }
        , 'b5B': function (Z5B, z5B) {
            return Z5B < z5B;
        }
        , 'j0B': function (S0B, q0B, X0B) {
            return S0B - q0B - X0B;
        }
        , 'k0o': function (H0o, a0o) {
            return H0o !== a0o;
        }
        , 'w7H': function (v7H, V7H) {
            return v7H === V7H;
        }
        , 'h4f': function (P4f, e4f) {
            return P4f == e4f;
        }
        , 'A1L': function (T1L, K1L) {
            return T1L < K1L;
        }
        , 'N3H': function (p3H, d3H) {
            return p3H / d3H;
        }
        , 'R3r': function (C3r, D3r) {
            return C3r > D3r;
        }
        , 'X0': function (b0, Z0) {
            return b0 === Z0;
        }
        , 'u2B': function (E2B, j2B) {
            return E2B < j2B;
        }
        , 'O5H': function (Y5H, n5H) {
            return Y5H < n5H;
        }
        , 'A2x': function (T2x, K2x) {
            return T2x >= K2x;
        }
        , 'c3H': function (l5H, A5H) {
            return l5H <= A5H;
        }
        , 'l7': function (A7, T7) {
            return A7 == T7;
        }
        , 'a8': function (L8, h8) {
            return L8 == h8;
        }
        , 'N1': function (p1, w1) {
            return p1 >= w1;
        }
        , 'u8r': function (E8r, j8r) {
            return E8r == j8r;
        }
        , 'S': function (X, Z) {
            return X == Z;
        }
        , 'b9B': function (Z9B, z9B) {
            return Z9B / z9B;
        }
        , 'k5o': function (H5o, a5o) {
            return H5o != a5o;
        }
        , 'h6N': function (P6N, e6N) {
            return P6N === e6N;
        }
        , 'o0a': function (f0a, s0a) {
            return f0a < s0a;
        }
        , 'm1H': function (O1H, Y1H) {
            return O1H < Y1H;
        }
        , 'G9j': function (W9j, k9j) {
            return W9j > k9j;
        }
        , 'g5N': function (u5N, E5N) {
            return u5N - E5N;
        }
        , 'Y3a': function (n3a, I3a) {
            return n3a / I3a;
        }
        , 'J7': function (U7, R7) {
            return U7 == R7;
        }
        , 'G6f': function (W6f, k6f) {
            return W6f - k6f;
        }
        , 'y1o': function (Q1o, B1o) {
            return Q1o < B1o;
        }
        , 'l7j': function (A7j, T7j) {
            return A7j >= T7j;
        }
        , 'g0B': function (u0B, E0B) {
            return u0B > E0B;
        }
        , 'z4a': function (c4a, l6a) {
            return c4a >= l6a;
        }
        , 'q6N': function (X6N, b6N) {
            return X6N * b6N;
        }
        , 'K0j': function (G0j, W0j) {
            return G0j < W0j;
        }
        , 'k0a': function (H0a, a0a) {
            return H0a < a0a;
        }
        , 'M8j': function (i8j, g8j) {
            return i8j >= g8j;
        }
        , 'M4': function (i4, g4) {
            return i4 <= g4;
        }
        , 'd5f': function (w5f, v5f) {
            return w5f !== v5f;
        }
        , 'V4N': function (o4N, f4N) {
            return o4N === f4N;
        }
        , 'I4N': function (N4N, p4N) {
            return N4N - p4N;
        }
        , 'I3r': function (N3r, p3r) {
            return N3r / p3r;
        }
        , 'l8L': function (A8L, T8L) {
            return A8L == T8L;
        }
        , 'Q7B': function (B7B, r7B) {
            return B7B == r7B;
        }
        , 'L7L': function (h7L, P7L) {
            return h7L < P7L;
        }
        , 'Z1a': function (z1a, c1a) {
            return z1a > c1a;
        }
        , 'K7H': function (G7H, W7H) {
            return G7H == W7H;
        }
        , 'N1x': function (p1x, d1x) {
            return p1x >= d1x;
        }
        , 'O6x': function (Y6x, n6x) {
            return Y6x > n6x;
        }
        , 'n1r': function (I1r, N1r) {
            return I1r > N1r;
        }
        , 'j8x': function (S8x, q8x, X8x, b8x) {
            return S8x - q8x + X8x - b8x;
        }
        , 'j1': function (S1, q1) {
            return S1 * q1;
        }
        , 'm9j': function (O9j, Y9j) {
            return O9j / Y9j;
        }
        , 'g4j': function (u4j, E4j) {
            return u4j === E4j;
        }
        , 'H1a': function (a1a, L1a) {
            return a1a > L1a;
        }
        , 'm4f': function (O4f, Y4f) {
            return O4f < Y4f;
        }
        , 'j1o': function (S1o, q1o) {
            return S1o < q1o;
        }
        , 's5': function (M5, i5) {
            return M5 / i5;
        }
        , 'P6': function (e6, x6) {
            return e6 < x6;
        }
        , 'H92': function (a92, L92) {
            return a92 / L92;
        }
        , 'C8L': function (D8L, y8L) {
            return D8L == y8L;
        }
        , 'v6L': function (V6L, o6L) {
            return V6L === o6L;
        }
        , 'o3B': function (f3B, s3B) {
            return f3B == s3B;
        }
        , 'a4H': function (L4H, h4H) {
            return L4H * h4H;
        }
        , 'o2N': function (f2N, s2N) {
            return f2N < s2N;
        }
        , 'y4H': function (Q4H, B4H) {
            return Q4H == B4H;
        }
        , 'c7N': function (l9N, A9N) {
            return l9N - A9N;
        }
        , 'p0L': function (d0L, w0L) {
            return d0L / w0L;
        }
        , 'j0': function (S0, q0) {
            return S0 / q0;
        }
        , 'l2L': function (A2L, T2L) {
            return A2L in T2L;
        }
        , 'G9o': function (W9o, k9o) {
            return W9o != k9o;
        }
        , 'N3a': function (p3a, d3a) {
            return p3a > d3a;
        }
        , 'C5r': function (D5r, y5r) {
            return D5r < y5r;
        }
        , 'z6o': function (c6o, l3o) {
            return c6o / l3o;
        }
        , 'g22': function (u22, E22) {
            return u22 < E22;
        }
        , 'a22': function (L22, h22) {
            return L22 - h22;
        }
        , 'X5L': function (b5L, Z5L) {
            return b5L == Z5L;
        }
        , 'r5H': function (F5H, m5H) {
            return F5H == m5H;
        }
        , 'b8a': function (Z8a, z8a, c8a) {
            return Z8a - z8a - c8a;
        }
        , 'D1a': function (y1a, Q1a) {
            return y1a - Q1a;
        }
        , 'w3f': function (v3f, V3f) {
            return v3f > V3f;
        }
        , 'V0B': function (o0B, f0B) {
            return o0B < f0B;
        }
        , 's5x': function (M5x, i5x) {
            return M5x != i5x;
        }
        , 'F3L': function (m3L, O3L) {
            return m3L * O3L;
        }
        , 'o8a': function (f8a, s8a) {
            return f8a > s8a;
        }
        , 'q8H': function (X8H, b8H) {
            return X8H > b8H;
        }
        , 'd4H': function (w4H, v4H) {
            return w4H >= v4H;
        }
        , 'q92': function (X92, b92) {
            return X92 < b92;
        }
        , 'Z1H': function (z1H, c1H) {
            return z1H - c1H;
        }
        , 'V1': function (o1, f1) {
            return o1 == f1;
        }
        , 'K7L': function (G7L, W7L) {
            return G7L == W7L;
        }
        , 'T6o': function (K6o, G6o) {
            return K6o != G6o;
        }
        , 'l0f': function (A0f, T0f) {
            return A0f >= T0f;
        }
        , 'v0L': function (V0L, o0L) {
            return V0L != o0L;
        }
        , 'V4a': function (o4a, f4a) {
            return o4a !== f4a;
        }
        , 'Z8B': function (z8B, c8B) {
            return z8B - c8B;
        }
        , 'u7B': function (E7B, j7B, S7B) {
            return E7B - j7B + S7B;
        }
        , 'M3N': function (i3N, g3N) {
            return i3N * g3N;
        }
        , 'D6H': function (y6H, Q6H) {
            return y6H > Q6H;
        }
        , 'k2H': function (H2H, a2H) {
            return H2H < a2H;
        }
        , 'j5H': function (S5H, q5H) {
            return S5H >= q5H;
        }
        , 'y3r': function (Q3r, B3r) {
            return Q3r < B3r;
        }
        , 'M2': function (i2, g2) {
            return i2 == g2;
        }
        , 'T5H': function (K5H, G5H) {
            return K5H == G5H;
        }
        , 'a2': function (L2, h2) {
            return L2 === h2;
        }
        , 'v9j': function (V9j, o9j) {
            return V9j / o9j;
        }
        , 'A9x': function (T9x, K9x, G9x) {
            return T9x * K9x / G9x;
        }
        , 'N8N': function (p8N, d8N) {
            return p8N - d8N;
        }
        , 'g4N': function (u4N, E4N) {
            return u4N == E4N;
        }
        , 'G6a': function (W6a, k6a) {
            return W6a != k6a;
        }
        , 'b2L': function (Z2L, z2L) {
            return Z2L == z2L;
        }
        , 's5N': function (M5N, i5N) {
            return M5N == i5N;
        }
        , 'Q9B': function (B9B, r9B) {
            return B9B < r9B;
        }
        , 'l7r': function (A7r, T7r) {
            return A7r / T7r;
        }
        , 'Y7': function (n7, I7) {
            return n7 < I7;
        }
        , 'b4x': function (Z4x, z4x) {
            return Z4x >= z4x;
        }
        , 'S7r': function (q7r, X7r) {
            return q7r !== X7r;
        }
        , 'G9B': function (W9B, k9B) {
            return W9B == k9B;
        }
        , 'L1x': function (h1x, P1x) {
            return h1x & P1x;
        }
        , 'N7H': function (p7H, d7H) {
            return p7H < d7H;
        }
        , 'm8o': function (O8o, Y8o) {
            return O8o | Y8o;
        }
        , 'R7a': function (C7a, D7a) {
            return C7a > D7a;
        }
        , 'f1L': function (s1L, M1L) {
            return s1L == M1L;
        }
        , 'K3': function (G3, W3) {
            return G3 === W3;
        }
        , 'L0o': function (h0o, P0o) {
            return h0o !== P0o;
        }
        , 'D2x': function (y2x, Q2x) {
            return y2x === Q2x;
        }
        , 'Z2r': function (z2r, c2r, l4r, A4r) {
            return z2r - c2r + l4r + A4r;
        }
        , 'V4H': function (o4H, f4H) {
            return o4H <= f4H;
        }
        , 'a0r': function (L0r, h0r) {
            return L0r * h0r;
        }
        , 'x6f': function (t6f, J6f) {
            return t6f === J6f;
        }
        , 'w0a': function (v0a, V0a) {
            return v0a < V0a;
        }
        , 'O2j': function (Y2j, n2j) {
            return Y2j === n2j;
        }
        , 'f9r': function (s9r, M9r) {
            return s9r <= M9r;
        }
        , 'E1H': function (j1H, S1H) {
            return j1H - S1H;
        }
        , 'M3x': function (i3x, g3x) {
            return i3x / g3x;
        }
        , 'b5o': function (Z5o, z5o) {
            return Z5o > z5o;
        }
        , 'F7r': function (m7r, O7r) {
            return m7r < O7r;
        }
        , 'J8r': function (U8r, R8r) {
            return U8r == R8r;
        }
        , 'H6N': function (a6N, L6N) {
            return a6N / L6N;
        }
        , 'I7a': function (N7a, p7a) {
            return N7a - p7a;
        }
        , 'F0f': function (m0f, O0f) {
            return m0f != O0f;
        }
        , 'O5N': function (Y5N, n5N) {
            return Y5N - n5N;
        }
        , 'd5L': function (w5L, v5L) {
            return w5L != v5L;
        }
        , 'L62': function (h62, P62) {
            return h62 < P62;
        }
        , 'a7x': function (L7x, h7x) {
            return L7x - h7x;
        }
        , 'm6L': function (O6L, Y6L) {
            return O6L - Y6L;
        }
        , 'l7H': function (A7H, T7H) {
            return A7H == T7H;
        }
        , 'D3o': function (y3o, Q3o) {
            return y3o > Q3o;
        }
        , 'g5L': function (u5L, E5L) {
            return u5L == E5L;
        }
        , 'a72': function (L72, h72) {
            return L72 < h72;
        }
        , 'f6H': function (s6H, M6H) {
            return s6H === M6H;
        }
        , 'b7L': function (Z7L, z7L) {
            return Z7L == z7L;
        }
        , 'x1j': function (t1j, J1j) {
            return t1j == J1j;
        }
        , 'A6j': function (T6j, K6j) {
            return T6j === K6j;
        }
        , 'L3': function (h3, P3) {
            return h3 * P3;
        }
        , 'G2': function (W2, H2) {
            return W2 === H2;
        }
        , 'j7o': function (S7o, q7o) {
            return S7o > q7o;
        }
        , 'J2L': function (U2L, R2L) {
            return U2L == R2L;
        }
        , 'y2j': function (Q2j, B2j) {
            return Q2j == B2j;
        }
        , 'C2H': function (D2H, y2H) {
            return D2H < y2H;
        }
        , 'J0': function (U0, R0) {
            return U0 > R0;
        }
        , 'm9a': function (O9a, Y9a) {
            return O9a < Y9a;
        }
        , 'J1x': function (U1x, R1x) {
            return U1x & R1x;
        }
        , 'N0N': function (p0N, d0N, w0N) {
            return p0N - d0N + w0N;
        }
        , 'd6': function (w6, v6) {
            return w6 / v6;
        }
        , 'y7o': function (Q7o, B7o) {
            return Q7o <= B7o;
        }
        , 'C8r': function (D8r, y8r) {
            return D8r == y8r;
        }
        , 'O4H': function (Y4H, n4H) {
            return Y4H == n4H;
        }
        , 's8x': function (M8x, i8x) {
            return M8x >= i8x;
        }
        , 'm9N': function (O9N, Y9N) {
            return O9N / Y9N;
        }
        , 'Q7r': function (B7r, r7r) {
            return B7r - r7r;
        }
        , 'b4B': function (Z4B, z4B) {
            return Z4B <= z4B;
        }
        , 'l0a': function (A0a, T0a) {
            return A0a == T0a;
        }
        , 'j22': function (S22, q22) {
            return S22 > q22;
        }
        , 's9L': function (M9L, i9L) {
            return M9L - i9L;
        }
        , 'P1': function (e1, J1) {
            return e1 == J1;
        }
        , 'S5B': function (q5B, X5B) {
            return q5B / X5B;
        }
        , 'm6j': function (O6j, Y6j) {
            return O6j === Y6j;
        }
        , 'J0o': function (U0o, R0o) {
            return U0o > R0o;
        }
        , 'o4B': function (f4B, s4B) {
            return f4B < s4B;
        }
        , 'c8f': function (l7x, A7x) {
            return l7x == A7x;
        }
        , 'K8H': function (G8H, W8H) {
            return G8H == W8H;
        }
        , 'E6j': function (j6j, S6j) {
            return j6j == S6j;
        }
        , 'b7': function (Z7, z7) {
            return Z7 - z7;
        }
        , 'T1o': function (K1o, G1o) {
            return K1o < G1o;
        }
        , 'k3H': function (H3H, a3H) {
            return H3H - a3H;
        }
        , 'D9r': function (y9r, Q9r) {
            return y9r <= Q9r;
        }
        , 'a8x': function (L8x, h8x) {
            return L8x - h8x;
        }
        , 'P72': function (e72, x72) {
            return e72 == x72;
        }
        , 'U6H': function (R6H, C6H) {
            return R6H > C6H;
        }
        , 'A9B': function (T9B, K9B) {
            return T9B !== K9B;
        }
        , 'N3L': function (p3L, d3L) {
            return p3L - d3L;
        }
        , 'C8f': function (D8f, y8f) {
            return D8f === y8f;
        }
        , 'c5B': function (l1B, A1B) {
            return l1B < A1B;
        }
        , 'H9j': function (a9j, L9j) {
            return a9j > L9j;
        }
        , 'U92': function (R92, C92) {
            return R92 == C92;
        }
        , 'f9a': function (s9a, M9a) {
            return s9a > M9a;
        }
        , 'V6x': function (o6x, f6x) {
            return o6x - f6x;
        }
        , 'R4L': function (C4L, D4L) {
            return C4L == D4L;
        }
        , 'R6B': function (C6B, D6B) {
            return C6B > D6B;
        }
        , 'j8': function (S8, q8) {
            return S8 == q8;
        }
        , 'Q0j': function (B0j, r0j) {
            return B0j / r0j;
        }
        , 'w7L': function (v7L, V7L) {
            return v7L < V7L;
        }
        , 'g8': function (u8, E8) {
            return u8 == E8;
        }
        , 'c3': function (l5, A5) {
            return l5 <= A5;
        }
        , 'N7L': function (p7L, d7L) {
            return p7L == d7L;
        }
        , 'K3j': function (G3j, W3j) {
            return G3j === W3j;
        }
        , 'w6r': function (v6r, V6r) {
            return v6r * V6r;
        }
        , 'r4r': function (F4r, m4r) {
            return F4r - m4r;
        }
        , 'Y7L': function (n7L, I7L) {
            return n7L == I7L;
        }
        , 'h1f': function (P1f, e1f) {
            return P1f > e1f;
        }
        , 'x4f': function (t4f, J4f) {
            return t4f < J4f;
        }
        , 'k7j': function (H7j, a7j) {
            return H7j < a7j;
        }
        , 'p8B': function (d8B, w8B) {
            return d8B === w8B;
        }
        , 'o9x': function (f9x, s9x) {
            return f9x >= s9x;
        }
        , 'N3j': function (p3j, d3j) {
            return p3j - d3j;
        }
        , 'g9H': function (u9H, E9H) {
            return u9H > E9H;
        }
        , 'T2B': function (K2B, G2B) {
            return K2B < G2B;
        }
        , 'C4o': function (D4o, y4o) {
            return D4o == y4o;
        }
        , 'h1a': function (P1a, e1a) {
            return P1a == e1a;
        }
        , 'C3f': function (D3f, y3f) {
            return D3f !== y3f;
        }
        , 'd1o': function (w1o, v1o) {
            return w1o == v1o;
        }
        , 'Q8a': function (B8a, r8a) {
            return B8a - r8a;
        }
        , 'U1j': function (R1j, C1j) {
            return R1j - C1j;
        }
        , 'M2B': function (i2B, g2B) {
            return i2B - g2B;
        }
        , 'k6r': function (H6r, a6r) {
            return H6r & a6r;
        }
        , 'W4N': function (k4N, H4N) {
            return k4N === H4N;
        }
        , 'F2H': function (m2H, O2H) {
            return m2H == O2H;
        }
        , 'q8B': function (X8B, b8B) {
            return X8B < b8B;
        }
        , 'r72': function (F72, m72) {
            return F72 == m72;
        }
        , 'n6j': function (I6j, N6j) {
            return I6j === N6j;
        }
        , 'k1x': function (H1x, a1x) {
            return H1x / a1x;
        }
        , 'x4x': function (t4x, J4x) {
            return t4x - J4x;
        }
        , 'W4L': function (k4L, H4L) {
            return k4L == H4L;
        }
        , 'j7f': function (S7f, q7f) {
            return S7f != q7f;
        }
        , 'K8N': function (G8N, W8N) {
            return G8N == W8N;
        }
        , 'o2L': function (f2L, s2L) {
            return f2L < s2L;
        }
        , 'e8a': function (x8a, t8a) {
            return x8a == t8a;
        }
        , 'C3N': function (D3N, y3N) {
            return D3N < y3N;
        }
        , 'E8H': function (j8H, S8H) {
            return j8H - S8H;
        }
        , 'P2': function (e2, J2) {
            return e2 - J2;
        }
        , 'k02': function (H02, a02) {
            return H02 >= a02;
        }
        , 'l3N': function (A3N, T3N) {
            return A3N !== T3N;
        }
        , 'w8f': function (v8f, V8f) {
            return v8f < V8f;
        }
        , 'L3a': function (h3a, P3a) {
            return h3a === P3a;
        }
        , 'Y8f': function (n8f, I8f) {
            return n8f < I8f;
        }
        , 'T5j': function (K5j, G5j) {
            return K5j in G5j;
        }
        , 'w9x': function (v9x, V9x) {
            return v9x < V9x;
        }
        , 'm1a': function (O1a, Y1a) {
            return O1a == Y1a;
        }
        , 'x1r': function (t1r, J1r) {
            return t1r / J1r;
        }
        , 'r8x': function (F8x, m8x) {
            return F8x == m8x;
        }
        , 'J3L': function (U3L, R3L) {
            return U3L > R3L;
        }
        , 'A1a': function (T1a, K1a) {
            return T1a - K1a;
        }
        , 'y9L': function (Q9L, B9L) {
            return Q9L > B9L;
        }
        , 'Y3x': function (n3x, I3x) {
            return n3x / I3x;
        }
        , 'n42': function (I42, N42) {
            return I42 >= N42;
        }
        , 't8': function (J8, U8) {
            return J8 == U8;
        }
        , 'F0a': function (m0a, O0a) {
            return m0a < O0a;
        }
        , 'l8H': function (A8H, T8H) {
            return A8H - T8H;
        }
        , 'u8N': function (E8N, j8N) {
            return E8N < j8N;
        }
        , 'k4o': function (H4o, a4o) {
            return H4o - a4o;
        }
        , 'U0L': function (R0L, C0L) {
            return R0L * C0L;
        }
        , 'e8H': function (x8H, t8H) {
            return x8H * t8H;
        }
        , 'R72': function (C72, D72) {
            return C72 <= D72;
        }
        , 'Y9x': function (n9x, I9x) {
            return n9x - I9x;
        }
        , 'b2N': function (Z2N, z2N) {
            return Z2N / z2N;
        }
        , 'u0j': function (E0j, j0j) {
            return E0j == j0j;
        }
        , 'X1B': function (b1B, Z1B) {
            return b1B < Z1B;
        }
        , 'b3H': function (Z3H, z3H) {
            return Z3H - z3H;
        }
        , 'f6j': function (s6j, M6j) {
            return s6j === M6j;
        }
        , 'o0j': function (f0j, s0j) {
            return f0j / s0j;
        }
        , 'e9x': function (x9x, t9x) {
            return x9x - t9x;
        }
        , 'F9x': function (m9x, O9x) {
            return m9x === O9x;
        }
        , 'd8': function (w8, v8) {
            return w8 >= v8;
        }
        , 'I4r': function (N4r, p4r) {
            return N4r / p4r;
        }
        , 'T52': 1, 'I9H': function (N9H, p9H) {
            return N9H == p9H;
        }
        , 'P8': function (e8, x8) {
            return e8 == x8;
        }
        , 'M3': function (i3, g3) {
            return i3 < g3;
        }
        , 'j5f': function (S5f, q5f) {
            return S5f < q5f;
        }
        , 'u2H': function (E2H, j2H) {
            return E2H < j2H;
        }
        , 'A3o': function (T3o, K3o) {
            return T3o - K3o;
        }
        , 'J4o': function (U4o, R4o) {
            return U4o - R4o;
        }
        , 'p9a': function (d9a, w9a) {
            return d9a / w9a;
        }
        , 'g4H': function (u4H, E4H) {
            return u4H <= E4H;
        }
        , 'e5B': function (x5B, t5B) {
            return x5B < t5B;
        }
        , 'W7a': function (k7a, H7a) {
            return k7a * H7a;
        }
        , 'A2o': function (T2o, K2o) {
            return T2o / K2o;
        }
        , 'o8j': function (f8j, s8j) {
            return f8j / s8j;
        }
        , 'u3N': function (E3N, j3N) {
            return E3N == j3N;
        }
        , 'N6r': function (p6r, d6r) {
            return p6r - d6r;
        }
        , 'j9L': function (S9L, q9L) {
            return S9L <= q9L;
        }
        , 'W2a': function (k2a, H2a) {
            return k2a < H2a;
        }
        , 'G6N': function (W6N, k6N) {
            return W6N - k6N;
        }
        , 'U42': function (R42, C42) {
            return R42 != C42;
        }
        , 'D1N': function (y1N, Q1N) {
            return y1N > Q1N;
        }
        , 'b8r': function (Z8r, z8r) {
            return Z8r === z8r;
        }
        , 'O5j': function (Y5j, n5j) {
            return Y5j - n5j;
        }
        , 't6B': function (J6B, U6B) {
            return J6B > U6B;
        }
        , 'a2f': function (L2f, h2f) {
            return L2f !== h2f;
        }
        , 'J5r': function (U5r, R5r) {
            return U5r < R5r;
        }
        , 's4H': function (M4H, i4H) {
            return M4H >= i4H;
        }
        , 'y1B': function (Q1B, B1B) {
            return Q1B / B1B;
        }
        , 'd1B': function (w1B, v1B) {
            return w1B === v1B;
        }
        , 'u1x': function (E1x, j1x) {
            return E1x > j1x;
        }
        , 'S2N': function (q2N, X2N) {
            return q2N < X2N;
        }
        , 'C7': function (D7, y7) {
            return D7 == y7;
        }
        , 'J3N': function (U3N, R3N) {
            return U3N > R3N;
        }
        , 'V4L': function (o4L, f4L) {
            return o4L < f4L;
        }
        , 'U1H': function (R1H, C1H) {
            return R1H !== C1H;
        }
        , 'Z9N': function (z9N, c9N) {
            return z9N < c9N;
        }
        , 'e7B': function (x7B, t7B) {
            return x7B == t7B;
        }
        , 'w2L': function (v2L, V2L) {
            return v2L in V2L;
        }
        , 'H1N': function (a1N, L1N) {
            return a1N === L1N;
        }
        , 'n0L': function (I0L, N0L) {
            return I0L >= N0L;
        }
        , 'v1N': function (V1N, o1N) {
            return V1N * o1N;
        }
        , 'D9o': function (y9o, Q9o) {
            return y9o >= Q9o;
        }
        , 'k7r': function (H7r, a7r) {
            return H7r / a7r;
        }
        , 'e0j': function (x0j, t0j) {
            return x0j * t0j;
        }
        , 'y5x': function (Q5x, B5x) {
            return Q5x > B5x;
        }
        , 'Y3f': function (n3f, I3f) {
            return n3f < I3f;
        }
        , 'T1r': function (K1r, G1r, W1r, k1r) {
            return K1r - G1r + W1r - k1r;
        }
        , 'o3j': function (f3j, s3j) {
            return f3j > s3j;
        }
        , 'V7a': function (o7a, f7a) {
            return o7a > f7a;
        }
        , 'x9o': function (t9o, J9o) {
            return t9o == J9o;
        }
        , 'q3r': function (X3r, b3r) {
            return X3r / b3r;
        }
        , 'L0j': function (h0j, P0j) {
            return h0j / P0j;
        }
        , 'v0N': function (V0N, o0N) {
            return V0N == o0N;
        }
        , 'j2x': function (S2x, q2x) {
            return S2x - q2x;
        }
        , 'D1': function (Q1, B1) {
            return Q1 == B1;
        }
        , 'J5o': function (U5o, R5o) {
            return U5o === R5o;
        }
        , 'C0N': function (D0N, y0N) {
            return D0N - y0N;
        }
        , 'u3H': function (E3H, j3H) {
            return E3H < j3H;
        }
        , 'a9x': function (L9x, h9x, P9x) {
            return L9x * h9x / P9x;
        }
        , 'u3B': function (E3B, j3B, S3B) {
            return E3B * j3B / S3B;
        }
        , 'e0f': function (x0f, t0f) {
            return x0f / t0f;
        }
        , 'r5N': function (F5N, m5N) {
            return F5N - m5N;
        }
        , 'O22': function (Y22, n22) {
            return Y22 <= n22;
        }
        , 'r5j': function (F5j, m5j) {
            return F5j !== m5j;
        }
        , 'i1f': function (g1f, u1f) {
            return g1f === u1f;
        }
        , 'f2o': function (s2o, M2o) {
            return s2o !== M2o;
        }
        , 't6o': function (J6o, U6o) {
            return J6o - U6o;
        }
        , 'S2H': function (q2H, X2H) {
            return q2H == X2H;
        }
        , 'p9j': function (d9j, w9j) {
            return d9j == w9j;
        }
        , 'y0B': function (Q0B, B0B) {
            return Q0B >= B0B;
        }
        , 'a7o': function (L7o, h7o) {
            return L7o >= h7o;
        }
        , 'd0B': function (w0B, v0B) {
            return w0B > v0B;
        }
        , 'D8H': function (y8H, Q8H) {
            return y8H * Q8H;
        }
        , 'X0o': function (b0o, Z0o) {
            return b0o < Z0o;
        }
        , 'L0a': function (h0a, P0a) {
            return h0a === P0a;
        }
        , 'c7H': function (l9H, A9H) {
            return l9H - A9H;
        }
        , 'g7o': function (u7o, E7o) {
            return u7o < E7o;
        }
        , 'q1r': function (X1r, b1r) {
            return X1r <= b1r;
        }
        , 'd5H': function (w5H, v5H) {
            return w5H >= v5H;
        }
        , 'S3a': function (q3a, X3a) {
            return q3a - X3a;
        }
        , 'T6': function (K6, G6) {
            return K6 / G6;
        }
        , 'M5o': function (i5o, g5o) {
            return i5o != g5o;
        }
        , 'S5o': function (q5o, X5o) {
            return q5o != X5o;
        }
        , 'G3o': function (W3o, k3o) {
            return W3o < k3o;
        }
        , 'j4a': function (S4a, q4a) {
            return S4a < q4a;
        }
        , 'h8B': function (P8B, e8B) {
            return P8B < e8B;
        }
        , 'q6j': function (X6j, b6j) {
            return X6j == b6j;
        }
        , 'p0H': function (d0H, w0H) {
            return d0H - w0H;
        }
        , 'C5B': function (D5B, y5B) {
            return D5B * y5B;
        }
        , 'N2N': function (p2N, d2N) {
            return p2N - d2N;
        }
        , 'c0f': function (l2f, A2f) {
            return l2f < A2f;
        }
        , 'a9r': function (L9r, h9r) {
            return L9r <= h9r;
        }
        , 'Q4': function (B4, r4) {
            return B4 / r4;
        }
        , 'H3o': function (a3o, L3o) {
            return a3o < L3o;
        }
        , 'R0B': function (C0B, D0B) {
            return C0B - D0B;
        }
        , 'k8j': function (H8j, a8j) {
            return H8j * a8j;
        }
        , 'X2a': function (b2a, Z2a) {
            return b2a == Z2a;
        }
        , 'h9o': function (P9o, e9o) {
            return P9o < e9o;
        }
        , 'O2f': function (Y2f, n2f) {
            return Y2f >= n2f;
        }
        , 'H4j': function (a4j, L4j) {
            return a4j == L4j;
        }
        , 'M7': function (i7, g7) {
            return i7 < g7;
        }
        , 'o02': function (f02, s02) {
            return f02 === s02;
        }
        , 'c7': function (l9, A9) {
            return l9 < A9;
        }
        , 'V72': function (o72, f72) {
            return o72 === f72;
        }
        , 'N9x': function (p9x, d9x) {
            return p9x - d9x;
        }
        , 'P6B': function (e6B, x6B) {
            return e6B < x6B;
        }
        , 'H4f': function (a4f, L4f) {
            return a4f == L4f;
        }
        , 'i1N': function (g1N, u1N) {
            return g1N * u1N;
        }
        , 'd7a': function (w7a, v7a) {
            return w7a < v7a;
        }
        , 'a0B': function (L0B, h0B) {
            return L0B / h0B;
        }
        , 'P5N': function (e5N, x5N) {
            return e5N == x5N;
        }
        , 'm2o': function (O2o, Y2o) {
            return O2o <= Y2o;
        }
        , 'W9r': function (k9r, H9r) {
            return k9r * H9r;
        }
        , 'u5B': function (E5B, j5B) {
            return E5B > j5B;
        }
        , 'p1f': function (d1f, w1f) {
            return d1f - w1f;
        }
        , 'Q3N': function (B3N, r3N) {
            return B3N == r3N;
        }
        , 'u02': function (E02, j02) {
            return E02 <= j02;
        }
        , 'O6': function (Y6, n6) {
            return Y6 > n6;
        }
        , 'v1j': function (V1j, o1j) {
            return V1j == o1j;
        }
        , 'F3N': function (m3N, O3N) {
            return m3N == O3N;
        }
        , 'h0H': function (P0H, e0H) {
            return P0H < e0H;
        }
        , 'p4f': function (d4f, w4f) {
            return d4f * w4f;
        }
        , 'B1f': function (r1f, F1f) {
            return r1f - F1f;
        }
        , 'T0x': function (K0x, G0x) {
            return K0x == G0x;
        }
        , 'H4a': function (a4a, L4a) {
            return a4a / L4a;
        }
        , 'J7N': function (U7N, R7N) {
            return U7N / R7N;
        }
        , 'S6r': function (q6r, X6r) {
            return q6r - X6r;
        }
        , 'g5j': function (u5j, E5j) {
            return u5j == E5j;
        }
        , 'J3a': function (U3a, R3a) {
            return U3a == R3a;
        }
        , 'L3H': function (h3H, P3H) {
            return h3H / P3H;
        }
        , 'P9r': function (e9r, x9r) {
            return e9r >= x9r;
        }
        , 'u7': function (E7, j7) {
            return E7 > j7;
        }
        , 'M9B': function (i9B, g9B) {
            return i9B - g9B;
        }
        , 'S3L': function (q3L, X3L) {
            return q3L - X3L;
        }
        , 'r2a': function (F2a, m2a) {
            return F2a == m2a;
        }
        , 'a1o': function (L1o, h1o) {
            return L1o < h1o;
        }
        , 'Z92': function (z92, c92) {
            return z92 === c92;
        }
        , 'I2a': function (N2a, p2a) {
            return N2a - p2a;
        }
        , 'Z1L': function (z1L, c1L) {
            return z1L == c1L;
        }
        , 'Q6r': function (B6r, r6r) {
            return B6r > r6r;
        }
        , 'n1N': function (I1N, N1N) {
            return I1N < N1N;
        }
        , 'g4f': function (u4f, E4f) {
            return u4f < E4f;
        }
        , 'z5f': function (c5f, l1f) {
            return c5f < l1f;
        }
        , 'S0a': function (q0a, X0a) {
            return q0a <= X0a;
        }
        , 'w4o': function (v4o, V4o) {
            return v4o == V4o;
        }
        , 'U9a': function (R9a, C9a) {
            return R9a / C9a;
        }
        , 'O0r': function (Y0r, n0r) {
            return Y0r > n0r;
        }
        , 'a5N': function (L5N, h5N) {
            return L5N == h5N;
        }
        , 'I7o': function (N7o, p7o) {
            return N7o == p7o;
        }
        , 'p3o': function (d3o, w3o) {
            return d3o * w3o;
        }
        , 'Y5r': function (n5r, I5r) {
            return n5r < I5r;
        }
        , 'K0N': function (G0N, W0N) {
            return G0N / W0N;
        }
        , 'a6': function (L6, h6) {
            return L6 * h6;
        }
        , 'i1a': function (g1a, u1a) {
            return g1a != u1a;
        }
        , 'M5B': function (i5B, g5B) {
            return i5B > g5B;
        }
        , 'R9L': function (C9L, D9L) {
            return C9L < D9L;
        }
        , 'n0H': function (I0H, N0H) {
            return I0H / N0H;
        }
        , 'I5j': function (N5j, p5j) {
            return N5j - p5j;
        }
        , 'E6N': function (j6N, S6N) {
            return j6N * S6N;
        }
        , 'r4j': function (F4j, m4j) {
            return F4j / m4j;
        }
        , 'd0r': function (w0r, v0r) {
            return w0r < v0r;
        }
        , 'w8a': function (v8a, V8a) {
            return v8a < V8a;
        }
        , 'U2o': function (R2o, C2o) {
            return R2o !== C2o;
        }
        , 'E1L': function (j1L, S1L) {
            return j1L * S1L;
        }
        , 'h4j': function (P4j, e4j) {
            return P4j - e4j;
        }
        , 'y8x': function (Q8x, B8x) {
            return Q8x == B8x;
        }
        , 'T5': function (K5, G5) {
            return K5 > G5;
        }
        , 'k7B': function (H7B, a7B) {
            return H7B < a7B;
        }
        , 'n1L': function (I1L, N1L) {
            return I1L - N1L;
        }
        , 'G0L': function (W0L, k0L) {
            return W0L === k0L;
        }
        , 'N4B': function (p4B, d4B) {
            return p4B > d4B;
        }
        , 'V4j': function (o4j, f4j) {
            return o4j === f4j;
        }
        , 'W2N': function (k2N, H2N) {
            return k2N * H2N;
        }
        , 'E9f': function (j9f, S9f) {
            return j9f / S9f;
        }
        , 'O6B': function (Y6B, n6B) {
            return Y6B / n6B;
        }
        , 'o7': function (f7, s7) {
            return f7 == s7;
        }
        , 'i3o': function (g3o, u3o) {
            return g3o * u3o;
        }
        , 'o3': function (f3, s3) {
            return f3 < s3;
        }
        , 'q7j': function (X7j, b7j) {
            return X7j < b7j;
        }
        , 'f1H': function (s1H, M1H) {
            return s1H * M1H;
        }
        , 'y2a': function (Q2a, B2a) {
            return Q2a == B2a;
        }
        , 't22': function (J22, U22) {
            return J22 >= U22;
        }
        , 'M8N': function (i8N, g8N) {
            return i8N >= g8N;
        }
        , 'm6N': function (O6N, Y6N) {
            return O6N > Y6N;
        }
        , 'K7B': function (G7B, W7B) {
            return G7B > W7B;
        }
        , 'L5B': function (h5B, P5B) {
            return h5B > P5B;
        }
        , 'c0a': function (l2a, A2a) {
            return l2a <= A2a;
        }
        , 'L8L': function (h8L, P8L) {
            return h8L > P8L;
        }
        , 'k3': function (H3, a3) {
            return H3 * a3;
        }
        , 'A2': function (T2, K2) {
            return T2 === K2;
        }
        , 'x9a': function (t9a, J9a) {
            return t9a > J9a;
        }
        , 'u3f': function (E3f, j3f) {
            return E3f - j3f;
        }
        , 'z9': function (c9, l0) {
            return c9 - l0;
        }
        , 'x42': function (t42, J42) {
            return t42 < J42;
        }
        , 'I4L': function (N4L, p4L) {
            return N4L < p4L;
        }
        , 'a5x': function (L5x, h5x) {
            return L5x - h5x;
        }
        , 'V8x': function (o8x, f8x) {
            return o8x <= f8x;
        }
        , 'i0H': function (g0H, u0H) {
            return g0H == u0H;
        }
        , 'u4x': function (E4x, j4x) {
            return E4x == j4x;
        }
        , 'b6r': function (Z6r, z6r) {
            return Z6r > z6r;
        }
        , 'S0f': function (q0f, X0f) {
            return q0f !== X0f;
        }
        , 'J2H': function (U2H, R2H) {
            return U2H > R2H;
        }
        , 'e7L': function (x7L, t7L) {
            return x7L < t7L;
        }
        , 'o3f': function (f3f, s3f) {
            return f3f > s3f;
        }
        , 'm3o': function (O3o, Y3o) {
            return O3o in Y3o;
        }
        , 'B1r': function (r1r, F1r) {
            return r1r !== F1r;
        }
        , 'k7H': function (H7H, a7H) {
            return H7H == a7H;
        }
        , 'V7o': function (o7o, f7o) {
            return o7o - f7o;
        }
        , 'x2x': function (t2x, J2x) {
            return t2x - J2x;
        }
        , 'h4r': function (P4r, e4r, x4r) {
            return P4r - e4r + x4r;
        }
        , 's5a': function (M5a, i5a) {
            return M5a - i5a;
        }
        , 'L3L': function (h3L, P3L) {
            return h3L - P3L;
        }
        , 'U6f': function (R6f, C6f) {
            return R6f === C6f;
        }
        , 'Z1f': function (z1f, c1f) {
            return z1f == c1f;
        }
        , 'a1y': null, 'T9': function (K9, G9) {
            return K9 / G9;
        }
        , 'g72': function (u72, E72) {
            return u72 != E72;
        }
        , 'S0N': function (q0N, X0N) {
            return q0N - X0N;
        }
        , 'j5N': function (S5N, q5N) {
            return S5N == q5N;
        }
        , 'H6f': function (a6f, L6f) {
            return a6f / L6f;
        }
        , 'Q62': function (B62, r62) {
            return B62 === r62;
        }
        , 'E8B': function (j8B, S8B) {
            return j8B == S8B;
        }
        , 'l6r': function (A6r, T6r) {
            return A6r & T6r;
        }
        , 'J8L': function (U8L, R8L) {
            return U8L == R8L;
        }
        , 'u7N': function (E7N, j7N) {
            return E7N != j7N;
        }
        , 'c3a': function (l5a, A5a) {
            return l5a != A5a;
        }
        , 'I2f': function (N2f, p2f) {
            return N2f == p2f;
        }
        , 'v8B': function (V8B, o8B) {
            return V8B === o8B;
        }
        , 'z4j': function (c4j, l6j) {
            return c4j === l6j;
        }
        , 'T7a': function (K7a, G7a) {
            return K7a <= G7a;
        }
        , 'n6H': function (I6H, N6H) {
            return I6H > N6H;
        }
        , 'h2x': function (P2x, e2x) {
            return P2x * e2x;
        }
        , 't5L': function (J5L, U5L) {
            return J5L < U5L;
        }
        , 'k0f': function (H0f, a0f) {
            return H0f / a0f;
        }
        , 'o4x': function (f4x, s4x) {
            return f4x == s4x;
        }
        , 'I0x': function (N0x, p0x) {
            return N0x > p0x;
        }
        , 'G1': function (W1, H1) {
            return W1 * H1;
        }
        , 'T0B': function (K0B, G0B) {
            return K0B / G0B;
        }
        , 'K8a': function (G8a, W8a) {
            return G8a !== W8a;
        }
        , 'W2f': function (k2f, H2f) {
            return k2f === H2f;
        }
        , 'B9a': function (r9a, F9a) {
            return r9a > F9a;
        }
        , 's2f': function (M2f, i2f) {
            return M2f / i2f;
        }
        , 'C2L': function (D2L, y2L) {
            return D2L == y2L;
        }
        , 'Z6a': function (z6a, c6a) {
            return z6a === c6a;
        }
        , 'r7o': function (F7o, m7o) {
            return F7o < m7o;
        }
        , 'o7N': function (f7N, s7N) {
            return f7N - s7N;
        }
        , 'm9f': function (O9f, Y9f) {
            return O9f - Y9f;
        }
        , 'd5x': function (w5x, v5x) {
            return w5x - v5x;
        }
        , 'L0f': function (h0f, P0f) {
            return h0f < P0f;
        }
        , 'U9o': function (R9o, C9o) {
            return R9o < C9o;
        }
        , 'D0L': function (y0L, Q0L) {
            return y0L < Q0L;
        }
        , 'N2H': function (p2H, d2H) {
            return p2H !== d2H;
        }
        , 'u5r': function (E5r, j5r) {
            return E5r - j5r;
        }
        , 'I0r': function (N0r, p0r) {
            return N0r > p0r;
        }
        , 'Z1j': function (z1j, c1j) {
            return z1j == c1j;
        }
        , 'g5': function (u5, E5) {
            return u5 == E5;
        }
        , 'M4o': function (i4o, g4o) {
            return i4o == g4o;
        }
        , 'N3N': function (p3N, d3N) {
            return p3N == d3N;
        }
        , 't1B': function (J1B, U1B) {
            return J1B - U1B;
        }
        , 's0B': function (M0B, i0B) {
            return M0B < i0B;
        }
        , 'H9a': function (a9a, L9a) {
            return a9a < L9a;
        }
        , 'm6f': function (O6f, Y6f) {
            return O6f == Y6f;
        }
        , 'y22': function (Q22, B22) {
            return Q22 > B22;
        }
        , 'h2o': function (P2o, e2o) {
            return P2o !== e2o;
        }
        , 'c3x': function (l5x, A5x) {
            return l5x > A5x;
        }
        , 'C7j': function (D7j, y7j) {
            return D7j > y7j;
        }
        , 'I72': function (N72, p72) {
            return N72 >= p72;
        }
        , 'L7j': function (h7j, P7j) {
            return h7j < P7j;
        }
        , 'y5f': function (Q5f, B5f) {
            return Q5f != B5f;
        }
        , 'N2r': function (p2r, d2r) {
            return p2r / d2r;
        }
        , 'd4r': function (w4r, v4r) {
            return w4r <= v4r;
        }
        , 'S4o': function (q4o, X4o) {
            return q4o * X4o;
        }
        , 'X7f': function (b7f, Z7f) {
            return b7f / Z7f;
        }
        , 'Q1x': function (B1x, r1x) {
            return B1x & r1x;
        }
        , 's2a': function (M2a, i2a) {
            return M2a == i2a;
        }
        , 'T5N': function (K5N, G5N) {
            return K5N == G5N;
        }
        , 't6': function (J6, U6) {
            return J6 < U6;
        }
        , 'Y2N': function (n2N, I2N) {
            return n2N / I2N;
        }
        , 'n1j': function (I1j, N1j) {
            return I1j == N1j;
        }
        , 'K8L': function (G8L, W8L) {
            return G8L == W8L;
        }
        , 'B8B': function (r8B, F8B) {
            return r8B === F8B;
        }
        , 'z7o': function (c7o, l9o) {
            return c7o == l9o;
        }
        , 'q8o': function (X8o, b8o) {
            return X8o > b8o;
        }
        , 'I5H': function (N5H, p5H) {
            return N5H == p5H;
        }
        , 'E1j': function (j1j, S1j) {
            return j1j <= S1j;
        }
        , 'z0o': function (c0o, l2o) {
            return c0o / l2o;
        }
        , 't0B': function (J0B, U0B) {
            return J0B / U0B;
        }
        , 'S7N': function (q7N, X7N) {
            return q7N - X7N;
        }
        , 'V2x': function (o2x, f2x) {
            return o2x < f2x;
        }
        , 'b9x': function (Z9x, z9x) {
            return Z9x < z9x;
        }
        , 'e7N': function (x7N, t7N) {
            return x7N / t7N;
        }
        , 'Q7j': function (B7j, r7j) {
            return B7j - r7j;
        }
        , 'G8B': function (W8B, k8B) {
            return W8B == k8B;
        }
        , 'O8': function (Y8, n8) {
            return Y8 == n8;
        }
        , 'O2n': "y", 'm4a': function (O4a, Y4a) {
            return O4a === Y4a;
        }
        , 'w9B': function (v9B, V9B) {
            return v9B - V9B;
        }
        , 'G2x': function (W2x, k2x) {
            return W2x == k2x;
        }
        , 'l2H': function (A2H, T2H) {
            return A2H < T2H;
        }
        , 'n8H': function (I8H, N8H) {
            return I8H < N8H;
        }
        , 'a5f': function (L5f, h5f) {
            return L5f !== h5f;
        }
        , 'z7x': function (c7x, l9x) {
            return c7x === l9x;
        }
        , 'W7o': function (k7o, H7o) {
            return k7o >= H7o;
        }
        , 'c3j': function (l5j, A5j) {
            return l5j in A5j;
        }
        , 'q0H': function (X0H, b0H) {
            return X0H - b0H;
        }
        , 'A9a': function (T9a, K9a) {
            return T9a * K9a;
        }
        , 'm2x': function (O2x, Y2x) {
            return O2x * Y2x;
        }
        , 't6x': function (J6x, U6x) {
            return J6x >= U6x;
        }
        , 'k8a': function (H8a, a8a) {
            return H8a < a8a;
        }
        , 'b0j': function (Z0j, z0j) {
            return Z0j !== z0j;
        }
        , 'L7N': function (h7N, P7N) {
            return h7N === P7N;
        }
        , 'n2o': function (I2o, N2o) {
            return I2o == N2o;
        }
        , 'O4N': function (Y4N, n4N) {
            return Y4N - n4N;
        }
        , 'R4r': function (C4r, D4r) {
            return C4r / D4r;
        }
        , 'Y6r': function (n6r, I6r) {
            return n6r * I6r;
        }
        , 'r6x': function (F6x, m6x) {
            return F6x < m6x;
        }
        , 'o2r': function (f2r, s2r) {
            return f2r >= s2r;
        }
        , 'B3o': function (r3o, F3o) {
            return r3o * F3o;
        }
        , 'G3x': function (W3x, k3x) {
            return W3x - k3x;
        }
        , 'W9x': function (k9x, H9x) {
            return k9x <= H9x;
        }
        , 'i9a': function (g9a, u9a) {
            return g9a / u9a;
        }
        , 'u8f': function (E8f, j8f) {
            return E8f > j8f;
        }
        , 'M5r': function (i5r, g5r) {
            return i5r < g5r;
        }
        , 'D8o': function (y8o, Q8o) {
            return y8o | Q8o;
        }
        , 'P4L': function (e4L, x4L) {
            return e4L === x4L;
        }
        , 'w7': function (v7, V7) {
            return v7 < V7;
        }
        , 'U1L': function (R1L, C1L) {
            return R1L == C1L;
        }
        , 'H6a': function (a6a, L6a) {
            return a6a == L6a;
        }
        , 'Y3': function (n3, I3) {
            return n3 > I3;
        }
        , 'C2r': function (D2r, y2r) {
            return D2r > y2r;
        }
        , 'R5': function (C5, D5) {
            return C5 < D5;
        }
        , 'k8L': function (H8L, a8L) {
            return H8L < a8L;
        }
        , 'r9': function (F9, m9) {
            return F9 == m9;
        }
        , 'W2j': function (k2j, H2j) {
            return k2j != H2j;
        }
        , 'R4H': function (C4H, D4H) {
            return C4H == D4H;
        }
        , 'M4x': function (i4x, g4x) {
            return i4x / g4x;
        }
        , 'o5B': function (f5B, s5B) {
            return f5B * s5B;
        }
        , 'q6H': function (X6H, b6H) {
            return X6H == b6H;
        }
        , 'g2x': function (u2x, E2x) {
            return u2x - E2x;
        }
        , 'd0': function (w0, v0) {
            return w0 == v0;
        }
        , 'Y3j': function (n3j, I3j) {
            return n3j - I3j;
        }
        , 'S6B': function (q6B, X6B) {
            return q6B == X6B;
        }
        , 'p8o': function (d8o, w8o) {
            return d8o | w8o;
        }
        , 'K3N': function (G3N, W3N) {
            return G3N > W3N;
        }
        , 'A1j': function (T1j, K1j) {
            return T1j == K1j;
        }
        , 'T8': function (K8, G8) {
            return K8 / G8;
        }
        , 'i1L': function (g1L, u1L) {
            return g1L - u1L;
        }
        , 'Z4r': function (z4r, c4r) {
            return z4r <= c4r;
        }
        , 'F3H': function (m3H, O3H) {
            return m3H / O3H;
        }
        , 'N7r': function (p7r, d7r) {
            return p7r - d7r;
        }
        , 'p2': function (v2, V2) {
            return v2 == V2;
        }
        , 'l7N': function (A7N, T7N) {
            return A7N - T7N;
        }
        , 'z2x': function (c2x, l4x) {
            return c2x - l4x;
        }
        , 'P8x': function (e8x, x8x) {
            return e8x > x8x;
        }
        , 'S3': function (q3, X3) {
            return q3 == X3;
        }
        , 'n2': function (I2, N2) {
            return I2 < N2;
        }
        , 'M4B': function (i4B, g4B) {
            return i4B / g4B;
        }
        , 'Y2L': function (n2L, I2L) {
            return n2L in I2L;
        }
        , 'z2j': function (c2j, l4j) {
            return c2j - l4j;
        }
        , 'z1B': function (c1B, l8B) {
            return c1B * l8B;
        }
        , 'B0H': function (r0H, F0H) {
            return r0H === F0H;
        }
        , 'D0H': function (y0H, Q0H) {
            return y0H - Q0H;
        }
        , 'P5L': function (e5L, x5L) {
            return e5L != x5L;
        }
        , 'P5f': function (e5f, x5f) {
            return e5f < x5f;
        }
        , 'c7r': function (l9r, A9r) {
            return l9r / A9r;
        }
        , 'R5x': function (C5x, D5x) {
            return C5x - D5x;
        }
        , 'v6f': function (V6f, o6f) {
            return V6f / o6f;
        }
        , 'K7r': function (G7r, W7r) {
            return G7r / W7r;
        }
        , 'c5o': function (l1o, A1o) {
            return l1o < A1o;
        }
        , 'J0f': function (U0f, R0f) {
            return U0f < R0f;
        }
        , 'V5f': function (o5f, f5f) {
            return o5f !== f5f;
        }
        , 'M2N': function (i2N, g2N) {
            return i2N * g2N;
        }
        , 'F6r': function (m6r, O6r) {
            return m6r * O6r;
        }
        , 'Z6L': function (z6L, c6L) {
            return z6L - c6L;
        }
        , 'm1N': function (O1N, Y1N) {
            return O1N > Y1N;
        }
        , 'd5j': function (w5j, v5j) {
            return w5j == v5j;
        }
        , 'f6L': function (s6L, M6L) {
            return s6L === M6L;
        }
        , 'a2a': function (L2a, h2a) {
            return L2a < h2a;
        }
        , 'C7r': function (D7r, y7r) {
            return D7r * y7r;
        }
        , 'B4a': function (r4a, F4a) {
            return r4a != F4a;
        }
        , 'u3a': function (E3a, j3a) {
            return E3a > j3a;
        }
        , 'b2H': function (Z2H, z2H) {
            return Z2H < z2H;
        }
        , 'l3': function (A3, T3) {
            return A3 - T3;
        }
        , 'B2o': function (r2o, F2o) {
            return r2o != F2o;
        }
        , 'C7N': function (D7N, y7N) {
            return D7N > y7N;
        }
        , 'H1H': function (a1H, L1H) {
            return a1H !== L1H;
        }
        , 's4r': function (M4r, i4r, g4r, u4r) {
            return M4r - i4r + g4r - u4r;
        }
        , 'M7j': function (i7j, g7j) {
            return i7j - g7j;
        }
        , 'G9a': function (W9a, k9a) {
            return W9a / k9a;
        }
        , 'u9x': function (E9x, j9x) {
            return E9x * j9x;
        }
        , 'k5B': function (H5B, a5B) {
            return H5B < a5B;
        }
        , 'P1o': function (e1o, x1o) {
            return e1o < x1o;
        }
        , 'a3r': function (L3r, h3r) {
            return L3r > h3r;
        }
        , 'e6r': function (x6r, t6r) {
            return x6r & t6r;
        }
        , 'D9f': function (y9f, Q9f) {
            return y9f * Q9f;
        }
        , 's4a': function (M4a, i4a) {
            return M4a != i4a;
        }
        , 'T2j': function (K2j, G2j) {
            return K2j == G2j;
        }
        , 'E9a': function (j9a, S9a) {
            return j9a < S9a;
        }
        , 'T9r': function (K9r, G9r) {
            return K9r - G9r;
        }
        , 'j5': function (S5, q5) {
            return S5 == q5;
        }
        , 'i6N': function (g6N, u6N) {
            return g6N * u6N;
        }
        , 'd6B': function (w6B, v6B, V6B) {
            return w6B - v6B - V6B;
        }
        , 'z72': function (c72, l92) {
            return c72 === l92;
        }
        , 'P0B': function (e0B, x0B) {
            return e0B < x0B;
        }
        , 't2N': function (J2N, U2N, R2N) {
            return J2N * U2N / R2N;
        }
        , 'H6j': function (a6j, L6j) {
            return a6j < L6j;
        }
        , 'V6o': function (o6o, f6o) {
            return o6o > f6o;
        }
        , 'C0o': function (D0o, y0o) {
            return D0o * y0o;
        }
        , 'Y4o': function (n4o, I4o) {
            return n4o == I4o;
        }
        , 'm1r': function (O1r, Y1r) {
            return O1r < Y1r;
        }
        , 'O4L': function (Y4L, n4L) {
            return Y4L - n4L;
        }
        , 'L8H': function (h8H, P8H) {
            return h8H < P8H;
        }
        , 'A4x': function (T4x, K4x) {
            return T4x - K4x;
        }
        , 'n7f': function (I7f, N7f, p7f) {
            return I7f - N7f + p7f;
        }
        , 'f8o': function (s8o, M8o) {
            return s8o == M8o;
        }
        , 'z22': function (c22, l42) {
            return c22 > l42;
        }
        , 'G1j': function (W1j, k1j) {
            return W1j == k1j;
        }
        , 'g4a': function (u4a, E4a) {
            return u4a != E4a;
        }
        , 'C0a': function (D0a, y0a) {
            return D0a > y0a;
        }
        , 'h0L': function (P0L, e0L) {
            return P0L < e0L;
        }
        , 'n5y': "l", 'D6j': function (y6j, Q6j) {
            return y6j == Q6j;
        }
        , 'f0N': function (s0N, M0N) {
            return s0N / M0N;
        }
        , 'W5a': function (k5a, H5a) {
            return k5a - H5a;
        }
        , 'P9L': function (e9L, x9L) {
            return e9L / x9L;
        }
        , 'N8r': function (p8r, d8r) {
            return p8r > d8r;
        }
        , 'z2a': function (c2a, l4a) {
            return c2a < l4a;
        }
        , 'm0': function (O0, Y0, n0) {
            return O0 - Y0 + n0;
        }
        , 'u0o': function (E0o, j0o, S0o, q0o) {
            return E0o - j0o + S0o - q0o;
        }
        , 'N7': function (p7, d7) {
            return p7 == d7;
        }
        , 'e3f': function (x3f, t3f) {
            return x3f > t3f;
        }
        , 'K0o': function (G0o, W0o) {
            return G0o !== W0o;
        }
        , 'e02': function (x02, t02) {
            return x02 >= t02;
        }
        , 'g2j': function (u2j, E2j) {
            return u2j == E2j;
        }
        , 'a9L': function (L9L, h9L) {
            return L9L == h9L;
        }
        , 'h6a': function (P6a, e6a) {
            return P6a < e6a;
        }
        , 'j5x': function (S5x, q5x, X5x, b5x) {
            return S5x - q5x + X5x - b5x;
        }
        , 'P3r': function (e3r, x3r) {
            return e3r < x3r;
        }
        , 'j7a': function (S7a, q7a) {
            return S7a > q7a;
        }
        , 'o3x': function (f3x, s3x) {
            return f3x == s3x;
        }
        , 'Z6N': function (z6N, c6N) {
            return z6N !== c6N;
        }
        , 'K3f': function (G3f, W3f) {
            return G3f - W3f;
        }
        , 'c2H': function (l4H, A4H) {
            return l4H == A4H;
        }
        , 'Q2H': function (B2H, r2H) {
            return B2H > r2H;
        }
        , 'y4L': function (Q4L, B4L) {
            return Q4L != B4L;
        }
        , 'F2r': function (m2r, O2r) {
            return m2r * O2r;
        }
        , 's72': function (M72, i72) {
            return M72 / i72;
        }
        , 'h9a': function (P9a, e9a) {
            return P9a < e9a;
        }
        , 'G1a': function (W1a, k1a) {
            return W1a !== k1a;
        }
        , 'M0f': function (i0f, g0f) {
            return i0f / g0f;
        }
        , 'P4H': function (e4H, x4H) {
            return e4H * x4H;
        }
        , 'C62': function (D62, y62) {
            return D62 < y62;
        }
        , 'e5r': function (x5r, t5r) {
            return x5r * t5r;
        }
        , 'c4': function (l6, A6) {
            return l6 - A6;
        }
        , 'b0B': function (Z0B, z0B) {
            return Z0B < z0B;
        }
        , 'd4j': function (w4j, v4j) {
            return w4j - v4j;
        }
        , 'O5L': function (Y5L, n5L) {
            return Y5L < n5L;
        }
        , 'x8B': function (t8B, J8B) {
            return t8B === J8B;
        }
        , 'o7j': function (f7j, s7j) {
            return f7j <= s7j;
        }
        , 'l9j': function (A9j, T9j, K9j) {
            return A9j - T9j + K9j;
        }
        , 'C9B': function (D9B, y9B) {
            return D9B == y9B;
        }
        , 'm9o': function (O9o, Y9o) {
            return O9o - Y9o;
        }
        , 'P5x': function (e5x, x5x) {
            return e5x < x5x;
        }
        , 'r6y': "t", 'p1H': function (d1H, w1H) {
            return d1H > w1H;
        }
        , 'Y8j': function (n8j, I8j) {
            return n8j * I8j;
        }
        , 'M7L': function (i7L, g7L) {
            return i7L == g7L;
        }
        , 'd7f': function (w7f, v7f) {
            return w7f <= v7f;
        }
        , 'r5': function (F5, m5) {
            return F5 < m5;
        }
        , 'A8o': function (T8o, K8o) {
            return T8o == K8o;
        }
        , 'W3r': function (k3r, H3r) {
            return k3r - H3r;
        }
        , 'K2H': function (G2H, W2H) {
            return G2H > W2H;
        }
        , 'Z0L': function (z0L, c0L) {
            return z0L * c0L;
        }
        , 'v9N': function (V9N, o9N) {
            return V9N < o9N;
        }
        , 'B92': function (r92, F92) {
            return r92 < F92;
        }
        , 'M9x': function (i9x, g9x) {
            return i9x / g9x;
        }
        , 'I5f': function (N5f, p5f) {
            return N5f - p5f;
        }
        , 'D2o': function (y2o, Q2o) {
            return y2o === Q2o;
        }
        , 't9r': function (J9r, U9r, R9r, C9r) {
            return J9r - U9r + R9r - C9r;
        }
        , 'z4N': function (c4N, l6N) {
            return c4N - l6N;
        }
        , 'y0r': function (Q0r, B0r) {
            return Q0r < B0r;
        }
        , 'Q3f': function (B3f, r3f) {
            return B3f < r3f;
        }
        , 'F4': function (m4, O4) {
            return m4 - O4;
        }
        , 'O1o': function (Y1o, n1o) {
            return Y1o == n1o;
        }
        , 'u3j': function (E3j, j3j) {
            return E3j / j3j;
        }
        , 'e5o': function (x5o, t5o) {
            return x5o === t5o;
        }
        , 'p9f': function (d9f, w9f) {
            return d9f < w9f;
        }
        , 'v1H': function (V1H, o1H) {
            return V1H == o1H;
        }
        , 'V5j': function (o5j, f5j) {
            return o5j == f5j;
        }
        , 'D9a': function (y9a, Q9a) {
            return y9a < Q9a;
        }
        , 'g6x': function (u6x, E6x) {
            return u6x < E6x;
        }
        , 'Y0j': function (n0j, I0j) {
            return n0j - I0j;
        }
        , 'D1f': function (y1f, Q1f) {
            return y1f == Q1f;
        }
        , 'I0': function (N0, p0) {
            return N0 <= p0;
        }
        , 'I4j': function (N4j, p4j) {
            return N4j / p4j;
        }
        , 's7f': function (M7f, i7f) {
            return M7f === i7f;
        }
        , 'W5j': function (k5j, H5j) {
            return k5j !== H5j;
        }
        , 'k8r': function (H8r, a8r) {
            return H8r - a8r;
        }
        , 'A92': function (T92, K92) {
            return T92 / K92;
        }
        , 'L8j': function (h8j, P8j) {
            return h8j - P8j;
        }
        , 'c4x': function (l6x, A6x) {
            return l6x & A6x;
        }
        , 'F3a': function (m3a, O3a) {
            return m3a < O3a;
        }
        , 'Y8N': function (n8N, I8N) {
            return n8N > I8N;
        }
        , 'f1r': function (s1r, M1r) {
            return s1r == M1r;
        }
        , 'e7H': function (x7H, t7H) {
            return x7H == t7H;
        }
        , 'z5L': function (c5L, l1L) {
            return c5L < l1L;
        }
        , 'u7j': function (E7j, j7j, S7j) {
            return E7j - j7j + S7j;
        }
        , 'n4a': function (I4a, N4a) {
            return I4a - N4a;
        }
        , 's5j': function (M5j, i5j) {
            return M5j < i5j;
        }
        , 'K1x': function (G1x, W1x) {
            return G1x / W1x;
        }
        , 'r5L': function (F5L, m5L) {
            return F5L != m5L;
        }
        , 'h3x': function (P3x, e3x) {
            return P3x != e3x;
        }
        , 'Y02': function (n02, I02) {
            return n02 >= I02;
        }
        , 'q2r': function (X2r, b2r) {
            return X2r - b2r;
        }
        , 'w3j': function (v3j, V3j) {
            return v3j < V3j;
        }
        , 'P9H': function (e9H, x9H) {
            return e9H - x9H;
        }
        , 'l8j': function (A8j, T8j) {
            return A8j == T8j;
        }
        , 'B42': function (r42, F42) {
            return r42 - F42;
        }
        , 'S2L': function (q2L, X2L) {
            return q2L == X2L;
        }
        , 'M0a': function (i0a, g0a) {
            return i0a < g0a;
        }
        , 'p6a': function (d6a, w6a) {
            return d6a >= w6a;
        }
        , 'q1N': function (X1N, b1N) {
            return X1N == b1N;
        }
        , 'P9': function (e9, x9) {
            return e9 >= x9;
        }
        , 'C8a': function (D8a, y8a) {
            return D8a > y8a;
        }
        , 'D92': function (y92, Q92) {
            return y92 == Q92;
        }
        , 'K3L': function (G3L, W3L) {
            return G3L == W3L;
        }
        , 'k8N': function (H8N, a8N) {
            return H8N == a8N;
        }
        , 'c4o': function (l6o, A6o) {
            return l6o != A6o;
        }
        , 'm9r': function (O9r, Y9r) {
            return O9r < Y9r;
        }
        , 'w7N': function (v7N, V7N) {
            return v7N / V7N;
        }
        , 'D4a': function (y4a, Q4a) {
            return y4a !== Q4a;
        }
        , 'M2H': function (i2H, g2H) {
            return i2H < g2H;
        }
        , 'N3': function (p3, d3) {
            return p3 - d3;
        }
        , 'C3L': function (D3L, y3L) {
            return D3L < y3L;
        }
        , 'b8N': function (Z8N, z8N) {
            return Z8N < z8N;
        }
        , 'g7f': function (u7f, E7f) {
            return u7f - E7f;
        }
        , 'T7o': function (K7o, G7o) {
            return K7o !== G7o;
        }
        , 'y9': function (Q9, B9) {
            return Q9 == B9;
        }
        , 'C6r': function (D6r, y6r) {
            return D6r < y6r;
        }
        , 'N3x': function (p3x, d3x) {
            return p3x / d3x;
        }
        , 'v8o': function (V8o, o8o) {
            return V8o | o8o;
        }
        , 'M7r': function (i7r, g7r) {
            return i7r <= g7r;
        }
        , 'y5H': function (Q5H, B5H) {
            return Q5H == B5H;
        }
        , 'Z9a': function (z9a, c9a) {
            return z9a <= c9a;
        }
        , 'I8x': function (N8x, p8x) {
            return N8x - p8x;
        }
        , 'b8f': function (Z8f, z8f) {
            return Z8f == z8f;
        }
        , 'U2x': function (R2x, C2x) {
            return R2x < C2x;
        }
        , 'm92': function (O92, Y92) {
            return O92 / Y92;
        }
        , 'v42': function (V42, o42) {
            return V42 > o42;
        }
        , 'F3j': function (m3j, O3j) {
            return m3j - O3j;
        }
        , 'M8a': function (i8a, g8a) {
            return i8a != g8a;
        }
        , 'I5x': function (N5x, p5x) {
            return N5x - p5x;
        }
        , 'x4j': function (t4j, J4j, U4j, R4j, C4j) {
            return t4j / J4j / U4j / R4j / C4j;
        }
        , 'L2r': function (h2r, P2r) {
            return h2r == P2r;
        }
        , 'X5H': function (b5H, Z5H) {
            return b5H <= Z5H;
        }
        , 'r3r': function (F3r, m3r) {
            return F3r <= m3r;
        }
        , 'm42': function (O42, Y42) {
            return O42 > Y42;
        }
        , 'k8H': function (H8H, a8H) {
            return H8H - a8H;
        }
        , 'W1o': function (k1o, H1o) {
            return k1o >= H1o;
        }
        , 'o3H': function (f3H, s3H) {
            return f3H * s3H;
        }
        , 'X4a': function (b4a, Z4a) {
            return b4a <= Z4a;
        }
        , 's6x': function (M6x, i6x) {
            return M6x < i6x;
        }
        , 'p6j': function (d6j, w6j) {
            return d6j === w6j;
        }
        , 'b0N': function (Z0N, z0N) {
            return Z0N - z0N;
        }
        , 'e0o': function (x0o, t0o) {
            return x0o - t0o;
        }
        , 'I1o': function (N1o, p1o) {
            return N1o == p1o;
        }
        , 'R2B': function (C2B, D2B) {
            return C2B == D2B;
        }
        , 'm8B': function (O8B, Y8B) {
            return O8B < Y8B;
        }
        , 'T2N': function (K2N, G2N) {
            return K2N - G2N;
        }
        , 'i9N': function (g9N, u9N) {
            return g9N / u9N;
        }
        , 'h7f': function (P7f, e7f) {
            return P7f != e7f;
        }
        , 'S8L': function (q8L, X8L) {
            return q8L > X8L;
        }
        , 'i9f': function (g9f, u9f) {
            return g9f == u9f;
        }
        , 'R8x': function (C8x, D8x) {
            return C8x <= D8x;
        }
        , 'u0f': function (E0f, j0f) {
            return E0f == j0f;
        }
        , 'B1L': function (r1L, F1L) {
            return r1L == F1L;
        }
        , 'J9x': function (U9x, R9x) {
            return U9x < R9x;
        }
        , 'e8f': function (x8f, t8f) {
            return x8f - t8f;
        }
        , 'p6H': function (d6H, w6H) {
            return d6H > w6H;
        }
        , 'F5o': function (m5o, O5o) {
            return m5o >= O5o;
        }
        , 'B6L': function (r6L, F6L) {
            return r6L / F6L;
        }
        , 'J8j': function (U8j, R8j) {
            return U8j > R8j;
        }
        , 'J7H': function (U7H, R7H) {
            return U7H == R7H;
        }
        , 'o2H': function (f2H, s2H) {
            return f2H != s2H;
        }
        , 'm1L': function (O1L, Y1L) {
            return O1L > Y1L;
        }
        , 'q1H': function (X1H, b1H) {
            return X1H - b1H;
        }
        , 'v9o': function (V9o, o9o) {
            return V9o >= o9o;
        }
        , 'r1o': function (F1o, m1o) {
            return F1o <= m1o;
        }
        , 'd7x': function (w7x, v7x) {
            return w7x < v7x;
        }
        , 'i6j': function (g6j, u6j) {
            return g6j === u6j;
        }
        , 't72': function (J72, U72) {
            return J72 > U72;
        }
        , 'f8B': function (s8B, M8B) {
            return s8B === M8B;
        }
        , 'U0H': function (R0H, C0H) {
            return R0H < C0H;
        }
        , 'H1f': function (a1f, L1f) {
            return a1f < L1f;
        }
        , 'f92': function (s92, M92) {
            return s92 / M92;
        }
        , 'G4x': function (W4x, k4x) {
            return W4x - k4x;
        }
        , 'f0H': function (s0H, M0H) {
            return s0H == M0H;
        }
        , 'o2B': function (f2B, s2B) {
            return f2B / s2B;
        }
        , 'R4N': function (C4N, D4N) {
            return C4N == D4N;
        }
        , 'H9f': function (a9f, L9f) {
            return a9f / L9f;
        }
        , 'F7N': function (m7N, O7N) {
            return m7N > O7N;
        }
        , 'v6H': function (V6H, o6H) {
            return V6H < o6H;
        }
        , 'T2a': function (K2a, G2a) {
            return K2a == G2a;
        }
        , 'e1x': function (x1x, t1x) {
            return x1x >= t1x;
        }
        , 'Y7j': function (n7j, I7j) {
            return n7j == I7j;
        }
        , 'e4': function (x4, t4) {
            return x4 < t4;
        }
        , 'F8r': function (m8r, O8r) {
            return m8r <= O8r;
        }
        , 'b02': function (Z02, z02) {
            return Z02 === z02;
        }
        , 'c6r': function (l3r, A3r) {
            return l3r < A3r;
        }
        , 'r6o': function (F6o, m6o) {
            return F6o - m6o;
        }
        , 's5H': function (M5H, i5H) {
            return M5H >= i5H;
        }
        , 'S8f': function (q8f, X8f) {
            return q8f - X8f;
        }
        , 'q3o': function (X3o, b3o) {
            return X3o == b3o;
        }
        , 'Y0o': function (n0o, I0o) {
            return n0o - I0o;
        }
        , 'X2x': function (b2x, Z2x) {
            return b2x / Z2x;
        }
        , 'j4N': function (S4N, q4N) {
            return S4N - q4N;
        }
        , 'M3H': function (i3H, g3H) {
            return i3H - g3H;
        }
        , 'Q3H': function (B3H, r3H) {
            return B3H - r3H;
        }
        , 'Q8L': function (B8L, r8L) {
            return B8L == r8L;
        }
        , 'z5H': function (c5H, l1H) {
            return c5H >= l1H;
        }
        , 'q9j': function (X9j, b9j) {
            return X9j / b9j;
        }
        , 'O7o': function (Y7o, n7o) {
            return Y7o == n7o;
        }
        , 'R7o': function (C7o, D7o) {
            return C7o >= D7o;
        }
        , 'V6': function (o6, f6) {
            return o6 < f6;
        }
        , 'j2f': function (S2f, q2f) {
            return S2f / q2f;
        }
        , 'v4f': function (V4f, o4f, f4f) {
            return V4f - o4f - f4f;
        }
        , 'L4o': function (h4o, P4o) {
            return h4o - P4o;
        }
        , 'g7a': function (u7a, E7a) {
            return u7a <= E7a;
        }
        , 'Y5B': function (n5B, I5B) {
            return n5B < I5B;
        }
        , 'F7H': function (m7H, O7H) {
            return m7H < O7H;
        }
        , 'J8N': function (U8N, R8N) {
            return U8N * R8N;
        }
        , 'o0f': function (f0f, s0f) {
            return f0f - s0f;
        }
        , 'A6f': function (T6f, K6f) {
            return T6f === K6f;
        }
        , 'd8x': function (w8x, v8x) {
            return w8x * v8x;
        }
        , 'i1j': function (g1j, u1j) {
            return g1j - u1j;
        }
        , 'Q5o': function (B5o, r5o) {
            return B5o === r5o;
        }
        , 'I1B': function (N1B, p1B) {
            return N1B === p1B;
        }
        , 'B7f': function (r7f, F7f) {
            return r7f * F7f;
        }
        , 'y0x': function (Q0x, B0x) {
            return Q0x - B0x;
        }
        , 'T4L': function (K4L, G4L) {
            return K4L == G4L;
        }
        , 'g6o': function (u6o, E6o) {
            return u6o >= E6o;
        }
        , 'w0j': function (v0j, V0j) {
            return v0j / V0j;
        }
        , 'd22': function (w22, v22) {
            return w22 < v22;
        }
        , 'y6': function (Q6, B6) {
            return Q6 == B6;
        }
        , 'S3H': function (q3H, X3H) {
            return q3H >= X3H;
        }
        , 'F7j': function (m7j, O7j) {
            return m7j != O7j;
        }
        , 'J0a': function (U0a, R0a) {
            return U0a === R0a;
        }
        , 'D1j': function (y1j, Q1j) {
            return y1j - Q1j;
        }
        , 'G7f': function (W7f, k7f) {
            return W7f == k7f;
        }
        , 'g0r': function (u0r, E0r) {
            return u0r <= E0r;
        }
        , 'J0N': function (U0N, R0N) {
            return U0N < R0N;
        }
        , 'T72': function (K72, G72) {
            return K72 - G72;
        }
        , 'M1x': function (i1x, g1x) {
            return i1x < g1x;
        }
        , 'l3H': function (A3H, T3H) {
            return A3H < T3H;
        }
        , 'f3o': function (s3o, M3o) {
            return s3o !== M3o;
        }
        , 'e9N': function (x9N, t9N) {
            return x9N == t9N;
        }
        , 'I8': function (N8, p8) {
            return N8 == p8;
        }
        , 'Q3L': function (B3L, r3L) {
            return B3L <= r3L;
        }
        , 'W5f': function (k5f, H5f) {
            return k5f !== H5f;
        }
        , 'X72': function (b72, Z72) {
            return b72 / Z72;
        }
        , 'y6x': function (Q6x, B6x) {
            return Q6x != B6x;
        }
        , 'Z2o': function (z2o, c2o) {
            return z2o !== c2o;
        }
        , 'F8j': function (m8j, O8j) {
            return m8j - O8j;
        }
        , 'Z6j': function (z6j, c6j) {
            return z6j < c6j;
        }
        , 'P5': function (e5, x5) {
            return e5 - x5;
        }
        , 'd9H': function (w9H, v9H) {
            return w9H / v9H;
        }
        , 'q1L': function (X1L, b1L) {
            return X1L > b1L;
        }
        , 'x2o': function (t2o, J2o) {
            return t2o / J2o;
        }
        , 'e2L': function (x2L, t2L) {
            return x2L > t2L;
        }
        , 'L3N': function (h3N, P3N) {
            return h3N !== P3N;
        }
        , 'T5f': function (K5f, G5f) {
            return K5f === G5f;
        }
        , 'a4L': function (L4L, h4L) {
            return L4L < h4L;
        }
        , 'o8f': function (f8f, s8f) {
            return f8f / s8f;
        }
        , 'e8j': function (x8j, t8j) {
            return x8j == t8j;
        }
        , 'Q5B': function (B5B, r5B) {
            return B5B * r5B;
        }
        , 'E1f': function (j1f, S1f) {
            return j1f === S1f;
        }
        , 'E9N': function (j9N, S9N) {
            return j9N === S9N;
        }
        , 'v0H': function (V0H, o0H) {
            return V0H == o0H;
        }
        , 's4N': function (M4N, i4N) {
            return M4N - i4N;
        }
        , 'a6o': function (L6o, h6o) {
            return L6o / h6o;
        }
        , 'O9L': function (Y9L, n9L) {
            return Y9L - n9L;
        }
        , 'V5N': function (o5N, f5N) {
            return o5N - f5N;
        }
        , 'J8H': function (U8H, R8H, C8H) {
            return U8H * R8H / C8H;
        }
        , 'G4f': function (W4f, k4f) {
            return W4f === k4f;
        }
        , 'O7a': function (Y7a, n7a) {
            return Y7a <= n7a;
        }
        , 'R0r': function (C0r, D0r) {
            return C0r < D0r;
        }
        , 'Q0a': function (B0a, r0a) {
            return B0a !== r0a;
        }
        , 'C7L': function (D7L, y7L) {
            return D7L == y7L;
        }
        , 'U6j': function (R6j, C6j) {
            return R6j === C6j;
        }
        , 'R2a': function (C2a, D2a) {
            return C2a == D2a;
        }
        , 'w3N': function (v3N, V3N) {
            return v3N == V3N;
        }
        , 'w5r': function (v5r, V5r) {
            return v5r - V5r;
        }
        , 'F3B': function (m3B, O3B) {
            return m3B === O3B;
        }
        , 'b4o': function (Z4o, z4o) {
            return Z4o == z4o;
        }
        , 'z9L': function (c9L, l0L) {
            return c9L <= l0L;
        }
        , 'y5': function (Q5, B5) {
            return Q5 / B5;
        }
        , 'N0f': function (p0f, d0f) {
            return p0f / d0f;
        }
        , 'Y2r': function (n2r, I2r) {
            return n2r / I2r;
        }
        , 't4r': function (J4r, U4r) {
            return J4r == U4r;
        }
        , 's7a': function (M7a, i7a) {
            return M7a - i7a;
        }
        , 'C9x': function (D9x, y9x) {
            return D9x === y9x;
        }
        , 'n9r': function (I9r, N9r) {
            return I9r < N9r;
        }
        , 'r5f': function (F5f, m5f) {
            return F5f > m5f;
        }
        , 'L0N': function (h0N, P0N) {
            return h0N - P0N;
        }
        , 'y2B': function (Q2B, B2B) {
            return Q2B < B2B;
        }
        , 'Y7H': function (n7H, I7H) {
            return n7H === I7H;
        }
        , 'K2r': function (G2r, W2r) {
            return G2r == W2r;
        }
        , 'c8N': function (l7o, A7o) {
            return l7o > A7o;
        }
        , 'H4r': function (a4r, L4r) {
            return a4r - L4r;
        }
        , 'i0N': function (g0N, u0N, E0N, j0N) {
            return g0N - u0N + E0N - j0N;
        }
        , 'z7B': function (c7B, l9B) {
            return c7B == l9B;
        }
        , 'h6H': function (P6H, e6H) {
            return P6H < e6H;
        }
        , 's0r': function (M0r, i0r) {
            return M0r < i0r;
        }
        , 'J7L': function (U7L, R7L) {
            return U7L == R7L;
        }
        , 'W4H': function (k4H, H4H) {
            return k4H - H4H;
        }
        , 'a2B': function (L2B, h2B) {
            return L2B === h2B;
        }
        , 'Q8r': function (B8r, r8r) {
            return B8r - r8r;
        }
        , 'L7': function (h7, P7) {
            return h7 < P7;
        }
        , 'Q2r': function (B2r, r2r) {
            return B2r * r2r;
        }
        , 'i2o': function (g2o, u2o) {
            return g2o != u2o;
        }
        , 'X5N': function (b5N, Z5N) {
            return b5N - Z5N;
        }
        , 'w4B': function (v4B, V4B) {
            return v4B - V4B;
        }
        , 'M3j': function (i3j, g3j) {
            return i3j > g3j;
        }
        , 'G6H': function (W6H, k6H) {
            return W6H - k6H;
        }
        , 'D6f': function (y6f, Q6f) {
            return y6f === Q6f;
        }
        , 'E42': function (j42, S42) {
            return j42 > S42;
        }
        , 'c8L': function (l72, A72) {
            return l72 * A72;
        }
        , 'P4B': function (e4B, x4B) {
            return e4B === x4B;
        }
        , 'e8L': function (x8L, t8L) {
            return x8L >= t8L;
        }
        , 'R22': function (C22, D22) {
            return C22 <= D22;
        }
        , 'H52': 5, 'l1x': function (A1x, T1x) {
            return A1x / T1x;
        }
        , 'U6N': function (R6N, C6N) {
            return R6N < C6N;
        }
        , 'T7x': function (K7x, G7x) {
            return K7x - G7x;
        }
        , 'b2': function (Z2, z2) {
            return Z2 < z2;
        }
        , 'Y3L': function (n3L, I3L) {
            return n3L < I3L;
        }
        , 't4N': function (J4N, U4N) {
            return J4N < U4N;
        }
        , 'Z3r': function (z3r, c3r) {
            return z3r / c3r;
        }
        , 's9H': function (M9H, i9H) {
            return M9H < i9H;
        }
        , 'D42': function (y42, Q42) {
            return y42 == Q42;
        }
        , 'p8H': function (d8H, w8H) {
            return d8H > w8H;
        }
        , 'J7B': function (U7B, R7B) {
            return U7B > R7B;
        }
        , 's6o': function (M6o, i6o) {
            return M6o - i6o;
        }
        , 'U2': function (R2, C2) {
            return R2 - C2;
        }
        , 'O5f': function (Y5f, n5f) {
            return Y5f >= n5f;
        }
        , 'p6L': function (d6L, w6L) {
            return d6L > w6L;
        }
        , 'A6H': function (T6H, K6H) {
            return T6H / K6H;
        }
        , 'c0j': function (l2j, A2j) {
            return l2j != A2j;
        }
        , 'p6f': function (d6f, w6f) {
            return d6f * w6f;
        }
        , 'N3B': function (p3B, d3B) {
            return p3B > d3B;
        }
        , 'T4N': function (K4N, G4N) {
            return K4N == G4N;
        }
        , 'h1r': function (P1r, e1r) {
            return P1r / e1r;
        }
        , 'W5H': function (k5H, H5H) {
            return k5H - H5H;
        }
        , 'V5L': function (o5L, f5L) {
            return o5L == f5L;
        }
        , 'a6B': function (L6B, h6B) {
            return L6B * h6B;
        }
        , 's4j': function (M4j, i4j) {
            return M4j < i4j;
        }
        , 'B6j': function (r6j, F6j) {
            return r6j < F6j;
        }
        , 'c3L': function (l5L, A5L) {
            return l5L - A5L;
        }
        , 'q3B': function (X3B, b3B) {
            return X3B * b3B;
        }
        , 'N4x': function (p4x, d4x) {
            return p4x / d4x;
        }
        , 'b3f': function (Z3f, z3f) {
            return Z3f >= z3f;
        }
        , 'R9H': function (C9H, D9H) {
            return C9H == D9H;
        }
        , 'F7': function (m7, O7) {
            return m7 < O7;
        }
        , 'X1': function (b1, Z1) {
            return b1 < Z1;
        }
        , 'Q2N': function (B2N, r2N) {
            return B2N == r2N;
        }
        , 'W5': function (k5, H5) {
            return k5 < H5;
        }
        , 'N8j': function (p8j, d8j) {
            return p8j > d8j;
        }
        , 'F0o': function (m0o, O0o) {
            return m0o - O0o;
        }
        , 'D1H': function (y1H, Q1H) {
            return y1H - Q1H;
        }
        , 'i6H': function (g6H, u6H) {
            return g6H / u6H;
        }
        , 'V8': function (o8, f8) {
            return o8 < f8;
        }
        , 'P7o': function (e7o, x7o) {
            return e7o >= x7o;
        }
        , 'l0o': function (A0o, T0o) {
            return A0o !== T0o;
        }
        , 'j2a': function (S2a, q2a) {
            return S2a == q2a;
        }
        , 'c2B': function (l4B, A4B) {
            return l4B - A4B;
        }
        , 'X8': function (b8, Z8) {
            return b8 == Z8;
        }
        , 'Q8j': function (B8j, r8j) {
            return B8j - r8j;
        }
        , 'R5N': function (C5N, D5N) {
            return C5N * D5N;
        }
        , 'q0L': function (X0L, b0L) {
            return X0L !== b0L;
        }
        , 'a5j': function (L5j, h5j) {
            return L5j - h5j;
        }
        , 'W0B': function (k0B, H0B) {
            return k0B < H0B;
        }
        , 'b3L': function (Z3L, z3L) {
            return Z3L - z3L;
        }
        , 'T22': function (K22, G22) {
            return K22 == G22;
        }
        , 'P1B': function (e1B, x1B) {
            return e1B === x1B;
        }
        , 'C5o': function (D5o, y5o) {
            return D5o % y5o;
        }
        , 'd5a': function (w5a, v5a) {
            return w5a === v5a;
        }
        , 'd2x': function (w2x, v2x) {
            return w2x / v2x;
        }
        , 'p1N': function (d1N, w1N) {
            return d1N < w1N;
        }
        , 'x3o': function (t3o, J3o) {
            return t3o / J3o;
        }
        , 'h42': function (P42, e42) {
            return P42 == e42;
        }
        , 'W7x': function (k7x, H7x) {
            return k7x - H7x;
        }
        , 'Z9o': function (z9o, c9o) {
            return z9o == c9o;
        }
        , 'v9r': function (V9r, o9r) {
            return V9r - o9r;
        }
        , 'V5a': function (o5a, f5a) {
            return o5a / f5a;
        }
        , 'u6B': function (E6B, j6B) {
            return E6B == j6B;
        }
        , 'J62': function (U62, R62) {
            return U62 >= R62;
        }
        , 'g5a': function (u5a, E5a) {
            return u5a < E5a;
        }
        , 'h9B': function (P9B, e9B, x9B) {
            return P9B - e9B + x9B;
        }
        , 'P2f': function (e2f, x2f) {
            return e2f == x2f;
        }
        , 'F8a': function (m8a, O8a) {
            return m8a === O8a;
        }
        , 'p2o': function (d2o, w2o) {
            return d2o / w2o;
        }
        , 'i8H': function (g8H, u8H) {
            return g8H * u8H;
        }
        , 'Y4B': function (n4B, I4B) {
            return n4B === I4B;
        }
        , 'L8N': function (h8N, P8N) {
            return h8N == P8N;
        }
        , 's0': function (M0, i0) {
            return M0 - i0;
        }
        , 'f1f': function (s1f, M1f) {
            return s1f / M1f;
        }
        , 'y5L': function (Q5L, B5L) {
            return Q5L != B5L;
        }
        , 'i6f': function (g6f, u6f) {
            return g6f > u6f;
        }
        , 'g0': function (u0, E0) {
            return u0 / E0;
        }
        , 'R5j': function (C5j, D5j) {
            return C5j >= D5j;
        }
        , 'e3a': function (x3a, t3a) {
            return x3a == t3a;
        }
        , 'B1N': function (r1N, F1N) {
            return r1N > F1N;
        }
        , 'o3N': function (f3N, s3N) {
            return f3N * s3N;
        }
        , 'E6L': function (j6L, S6L) {
            return j6L > S6L;
        }
        , 'Q7': function (B7, r7) {
            return B7 < r7;
        }
        , 'y4N': function (Q4N, B4N) {
            return Q4N == B4N;
        }
        , 'K3H': function (G3H, W3H) {
            return G3H - W3H;
        }
        , 'a52': 4, 'k4': function (H4, a4) {
            return H4 === a4;
        }
        , 's8': function (M8, i8) {
            return M8 == i8;
        }
        , 'y9H': function (Q9H, B9H) {
            return Q9H > B9H;
        }
        , 'R6': function (C6, D6) {
            return C6 < D6;
        }
        , 'm6H': function (O6H, Y6H) {
            return O6H < Y6H;
        }
        , 'F4o': function (m4o, O4o) {
            return m4o / O4o;
        }
        , 'N4o': function (p4o, d4o) {
            return p4o < d4o;
        }
        , 'M3L': function (i3L, g3L) {
            return i3L - g3L;
        }
        , 'Q4o': function (B4o, r4o) {
            return B4o == r4o;
        }
        , 'j4L': function (S4L, q4L) {
            return S4L <= q4L;
        }
        , 'E9j': function (j9j, S9j) {
            return j9j == S9j;
        }
        , 'f1a': function (s1a, M1a) {
            return s1a < M1a;
        }
        , 'h9f': function (P9f, e9f) {
            return P9f === e9f;
        }
        , 'C3': function (D3, y3) {
            return D3 > y3;
        }
        , 'U1a': function (R1a, C1a) {
            return R1a - C1a;
        }
        , 'b7N': function (Z7N, z7N) {
            return Z7N - z7N;
        }
        , 'u4B': function (E4B, j4B) {
            return E4B - j4B;
        }
        , 'E4r': function (j4r, S4r) {
            return j4r / S4r;
        }
        , 'x3x': function (t3x, J3x) {
            return t3x - J3x;
        }
        , 'i42': function (g42, u42) {
            return g42 <= u42;
        }
        , 'm6a': function (O6a, Y6a) {
            return O6a >= Y6a;
        }
        , 'b3': function (Z3, z3) {
            return Z3 < z3;
        }
        , 'e2H': function (x2H, t2H) {
            return x2H < t2H;
        }
        , 'L8f': function (h8f, P8f) {
            return h8f === P8f;
        }
        , 'J5B': function (U5B, R5B) {
            return U5B / R5B;
        }
        , 'K0f': function (G0f, W0f) {
            return G0f === W0f;
        }
        , 'M7N': function (i7N, g7N) {
            return i7N != g7N;
        }
        , 'M7H': function (i7H, g7H) {
            return i7H === g7H;
        }
        , 'W5N': function (k5N, H5N) {
            return k5N == H5N;
        }
        , 'F2N': function (m2N, O2N) {
            return m2N * O2N;
        }
        , 'N8L': function (p8L, d8L) {
            return p8L == d8L;
        }
        , 'b0f': function (Z0f, z0f) {
            return Z0f < z0f;
        }
        , 'o3L': function (f3L, s3L) {
            return f3L / s3L;
        }
        , 'W0r': function (k0r, H0r) {
            return k0r > H0r;
        }
        , 'o9B': function (f9B, s9B) {
            return f9B > s9B;
        }
        , 'w02': function (v02, V02) {
            return v02 >= V02;
        }
        , 'i3r': function (g3r, u3r) {
            return g3r <= u3r;
        }
        , 'G1L': function (W1L, k1L) {
            return W1L - k1L;
        }
        , 'Y0f': function (n0f, I0f) {
            return n0f / I0f;
        }
        , 'p6N': function (d6N, w6N) {
            return d6N < w6N;
        }
        , 'n92': function (I92, N92) {
            return I92 < N92;
        }
        , 'l62': function (A62, T62) {
            return A62 !== T62;
        }
        , 'F9B': function (m9B, O9B) {
            return m9B - O9B;
        }
        , 'F02': function (m02, O02) {
            return m02 >= O02;
        }
        , 'S3N': function (q3N, X3N) {
            return q3N === X3N;
        }
        , 'Y2H': function (n2H, I2H) {
            return n2H == I2H;
        }
        , 'o4o': function (f4o, s4o) {
            return f4o == s4o;
        }
        , 'w3B': function (v3B, V3B) {
            return v3B < V3B;
        }
        , 'k0j': function (H0j, a0j) {
            return H0j <= a0j;
        }
        , 'E0L': function (j0L, S0L) {
            return j0L in S0L;
        }
        , 'i6a': function (g6a, u6a) {
            return g6a - u6a;
        }
        , 'U3x': function (R3x, C3x) {
            return R3x / C3x;
        }
        , 'd4N': function (w4N, v4N) {
            return w4N < v4N;
        }
        , 'V2a': function (o2a, f2a) {
            return o2a == f2a;
        }
        , 'M3B': function (i3B, g3B) {
            return i3B < g3B;
        }
        , 'h6f': function (P6f, e6f) {
            return P6f === e6f;
        }
        , 'k2r': function (H2r, a2r) {
            return H2r > a2r;
        }
        , 'h1j': function (P1j, e1j) {
            return P1j == e1j;
        }
        , 'F5r': function (m5r, O5r) {
            return m5r > O5r;
        }
        , 'W8': function (k8, H8) {
            return k8 == H8;
        }
        , 'C3a': function (D3a, y3a) {
            return D3a / y3a;
        }
        , 'K6r': function (G6r, W6r) {
            return G6r <= W6r;
        }
        , 'G1f': function (W1f, k1f) {
            return W1f > k1f;
        }
        , 'R5f': function (C5f, D5f) {
            return C5f < D5f;
        }
        , 'N9B': function (p9B, d9B) {
            return p9B - d9B;
        }
        , 'S4x': function (q4x, X4x) {
            return q4x & X4x;
        }
        , 'T4B': function (K4B, G4B) {
            return K4B < G4B;
        }
        , 'z7f': function (c7f, l9f) {
            return c7f / l9f;
        }
        , 'w2H': function (v2H, V2H) {
            return v2H === V2H;
        }
        , 'E9r': function (j9r, S9r) {
            return j9r - S9r;
        }
        , 'H42': function (a42, L42) {
            return a42 < L42;
        }
        , 'J6r': function (U6r, R6r) {
            return U6r != R6r;
        }
        , 'B6f': function (r6f, F6f) {
            return r6f == F6f;
        }
        , 'U9f': function (R9f, C9f) {
            return R9f * C9f;
        }
        , 'Z0H': function (z0H, c0H) {
            return z0H !== c0H;
        }
        , 'E1a': function (j1a, S1a) {
            return j1a == S1a;
        }
        , 'C8j': function (D8j, y8j) {
            return D8j / y8j;
        }
        , 'M7B': function (i7B, g7B) {
            return i7B !== g7B;
        }
        , 'k5r': function (H5r, a5r) {
            return H5r - a5r;
        }
        , 'U1r': function (R1r, C1r) {
            return R1r / C1r;
        }
        , 'Z8j': function (z8j, c8j) {
            return z8j < c8j;
        }
        , 'C38': (function (O38) {
                return (function (w38, p38) {
                        return (function (v38) {
                                return {D38: v38}
                                    ;
                            })(function (Q38) {
                                var I38, B38 = 0;
                                for (var d38 = w38; B38 < Q38["length"]; B38++) {
                                    var N38 = p38(Q38, B38);
                                    I38 = B38 === ((3.96E2, 2.84E2) < (0xD7, 5.9E2) ? (1.468E3, 0) : (11, 1.1500E3)) ? N38 : I38 ^ N38;
                                }
                                return I38 ? d38 : !d38;
                            }
                        );
                    })((function (Y38, F38, r38, n38) {
                            var m38 = ((36., 12.26E2) < 0x1E ? 35. : 0x10C > (0x84, 53.) ? (5.80E1, 34) : (0x207, 73.));
                            return Y38(O38, m38) - n38(F38, r38) > m38;
                        })(parseInt, Date, (function (F38) {
                                return ('' + F38)["substring"](1, (F38 + '')["length"] - 1);
                            })('_getTime2'), function (F38, r38) {
                            return new F38()[r38]();
                        }
                    ), function (Q38, B38) {
                        var y38 = parseInt(Q38["charAt"](B38), 16)["toString"](((12.17E2, 1.408E3) > (31, 20) ? (107.2E1, 2) : (0x21E, 8) >= (10.73E2, 82) ? 0x1CC : (41, 0x1DC)));
                        return y38["charAt"](y38["length"] - ((34, 0x19B) > (84, 131.) ? (127., 1) : (1, 143.) < (0x42, 105) ? 59.40E1 : (85, 0xF5)));
                    }
                );
            })('sb7c1ksg'), 'Y8r': function (n8r, I8r) {
            return n8r < I8r;
        }
        , 'i9j': function (g9j, u9j) {
            return g9j / u9j;
        }
        , 'e4o': function (x4o, t4o) {
            return x4o <= t4o;
        }
        , 'x6j': function (t6j, J6j) {
            return t6j < J6j;
        }
        , 'c02': function (l22, A22) {
            return l22 < A22;
        }
        , 's1B': function (M1B, i1B) {
            return M1B === i1B;
        }
        , 'e3N': function (x3N, t3N) {
            return x3N < t3N;
        }
        , 'i92': function (g92, u92) {
            return g92 / u92;
        }
        , 'g8x': function (u8x, E8x) {
            return u8x - E8x;
        }
        , 'o3a': function (f3a, s3a) {
            return f3a * s3a;
        }
        , 'x1L': function (t1L, J1L) {
            return t1L < J1L;
        }
        , 'P2B': function (e2B, x2B) {
            return e2B >= x2B;
        }
        , 'i8o': function (g8o, u8o) {
            return g8o != u8o;
        }
        , 'S1x': function (q1x, X1x) {
            return q1x * X1x;
        }
        , 'z1o': function (c1o, l8o) {
            return c1o == l8o;
        }
        , 'h8o': function (P8o, e8o) {
            return P8o == e8o;
        }
        , 'B6N': function (r6N, F6N) {
            return r6N > F6N;
        }
        , 'r5a': function (F5a, m5a) {
            return F5a - m5a;
        }
        , 'c9r': function (l0r, A0r) {
            return l0r <= A0r;
        }
        , 'F3x': function (m3x, O3x) {
            return m3x <= O3x;
        }
        , 'Q9x': function (B9x, r9x) {
            return B9x * r9x;
        }
        , 'P1y': "k", 'h1N': function (P1N, e1N) {
            return P1N === e1N;
        }
        , 'M3a': function (i3a, g3a) {
            return i3a < g3a;
        }
        , 'g4L': function (u4L, E4L) {
            return u4L == E4L;
        }
        , 'L5r': function (h5r, P5r) {
            return h5r * P5r;
        }
        , 'X2f': function (b2f, Z2f) {
            return b2f === Z2f;
        }
        , 'P6o': function (e6o, x6o) {
            return e6o <= x6o;
        }
        , 'u2r': function (E2r, j2r, S2r) {
            return E2r - j2r + S2r;
        }
        , 'D3x': function (y3x, Q3x, B3x, r3x) {
            return y3x - Q3x + B3x - r3x;
        }
        , 'R8': function (C8, D8) {
            return C8 == D8;
        }
        , 'S8a': function (q8a, X8a) {
            return q8a != X8a;
        }
        , 'E6f': function (j6f, S6f) {
            return j6f == S6f;
        }
        , 'Z9j': function (z9j, c9j) {
            return z9j / c9j;
        }
        , 'T6B': function (K6B, G6B) {
            return K6B == G6B;
        }
        , 'M2L': function (i2L, g2L) {
            return i2L == g2L;
        }
        , 'I9L': function (N9L, p9L) {
            return N9L < p9L;
        }
        , 'o7B': function (f7B, s7B) {
            return f7B * s7B;
        }
        , 'A1H': function (T1H, K1H) {
            return T1H <= K1H;
        }
        , 'O2a': function (Y2a, n2a) {
            return Y2a == n2a;
        }
        , 'Y5o': function (n5o, I5o) {
            return n5o == I5o;
        }
        , 'r6B': function (F6B, m6B) {
            return F6B < m6B;
        }
        , 'z5a': function (c5a, l1a) {
            return c5a == l1a;
        }
        , 'I5N': function (N5N, p5N) {
            return N5N < p5N;
        }
        , 't9': function (J9, U9) {
            return J9 / U9;
        }
        , 'D6N': function (y6N, Q6N) {
            return y6N < Q6N;
        }
        , 'H3x': function (a3x, L3x) {
            return a3x - L3x;
        }
        , 'z6x': function (c6x, l3x) {
            return c6x >= l3x;
        }
        , 't4L': function (J4L, U4L) {
            return J4L != U4L;
        }
        , 'W2B': function (k2B, H2B) {
            return k2B >= H2B;
        }
        , 'z5N': function (c5N, l1N) {
            return c5N == l1N;
        }
        , 'w3a': function (v3a, V3a) {
            return v3a * V3a;
        }
        , 'g5x': function (u5x, E5x) {
            return u5x - E5x;
        }
        , 'U4x': function (R4x, C4x) {
            return R4x / C4x;
        }
        , 'f6N': function (s6N, M6N) {
            return s6N * M6N;
        }
        , 'X4H': function (b4H, Z4H) {
            return b4H * Z4H;
        }
        , 'o5o': function (f5o, s5o) {
            return f5o < s5o;
        }
        , 'V9H': function (o9H, f9H) {
            return o9H == f9H;
        }
        , 'v92': function (V92, o92) {
            return V92 !== o92;
        }
        , 'v1L': function (V1L, o1L) {
            return V1L < o1L;
        }
        , 'Y7r': function (n7r, I7r) {
            return n7r < I7r;
        }
        , 'j6': function (S6, q6, X6, b6) {
            return S6 * q6 * X6 * b6;
        }
        , 'V7f': function (o7f, f7f) {
            return o7f === f7f;
        }
        , 'd2a': function (w2a, v2a) {
            return w2a > v2a;
        }
        , 'o0o': function (f0o, s0o) {
            return f0o == s0o;
        }
        , 'v9f': function (V9f, o9f) {
            return V9f > o9f;
        }
        , 'H0': function (a0, L0) {
            return a0 < L0;
        }
        , 'L02': function (h02, P02) {
            return h02 / P02;
        }
        , 'H7f': function (a7f, L7f) {
            return a7f - L7f;
        }
        , 'n8o': function (I8o, N8o) {
            return I8o | N8o;
        }
        , 'x0L': function (t0L, J0L) {
            return t0L != J0L;
        }
        , 'w8r': function (v8r, V8r) {
            return v8r !== V8r;
        }
        , 'D9N': function (y9N, Q9N) {
            return y9N / Q9N;
        }
        , 'Q0f': function (B0f, r0f) {
            return B0f / r0f;
        }
        , 'B8o': function (r8o, F8o) {
            return r8o | F8o;
        }
        , 'N2L': function (p2L, d2L) {
            return p2L > d2L;
        }
        , 'P6x': function (e6x, x6x) {
            return e6x & x6x;
        }
        , 'u2': function (E2, j2) {
            return E2 >= j2;
        }
        , 'h9j': function (P9j, e9j) {
            return P9j - e9j;
        }
        , 'N0o': function (p0o, d0o) {
            return p0o / d0o;
        }
        , 'Y0a': function (n0a, I0a) {
            return n0a < I0a;
        }
        , 'x9j': function (t9j, J9j) {
            return t9j == J9j;
        }
        , 'a2N': function (L2N, h2N) {
            return L2N - h2N;
        }
        , 'j5L': function (S5L, q5L) {
            return S5L == q5L;
        }
        , 'R0x': function (C0x, D0x) {
            return C0x > D0x;
        }
        , 'H0H': function (a0H, L0H) {
            return a0H < L0H;
        }
        , 'u5o': function (E5o, j5o) {
            return E5o < j5o;
        }
        , 'Y7B': function (n7B, I7B) {
            return n7B == I7B;
        }
        , 'f9N': function (s9N, M9N) {
            return s9N - M9N;
        }
        , 'V1o': function (o1o, f1o) {
            return o1o == f1o;
        }
        , 'r7x': function (F7x, m7x) {
            return F7x === m7x;
        }
        , 'C0f': function (D0f, y0f) {
            return D0f < y0f;
        }
        , 'r2j': function (F2j, m2j) {
            return F2j === m2j;
        }
        , 'p1j': function (d1j, w1j) {
            return d1j < w1j;
        }
        , 'A42': function (T42, K42) {
            return T42 < K42;
        }
        , 'o5r': function (f5r, s5r) {
            return f5r > s5r;
        }
        , 'P2a': function (e2a, x2a) {
            return e2a < x2a;
        }
        , 'Y8a': function (n8a, I8a) {
            return n8a > I8a;
        }
        , 'T9H': function (K9H, G9H) {
            return K9H - G9H;
        }
        , 'p1L': function (d1L, w1L) {
            return d1L < w1L;
        }
        , 'U4f': function (R4f, C4f) {
            return R4f - C4f;
        }
        , 'q9f': function (X9f, b9f) {
            return X9f / b9f;
        }
        , 'c8r': function (l7a, A7a) {
            return l7a === A7a;
        }
        , 'P5H': function (e5H, x5H) {
            return e5H < x5H;
        }
        , 'R6o': function (C6o, D6o) {
            return C6o > D6o;
        }
        , 'K02': function (G02, W02) {
            return G02 / W02;
        }
        , 'h4x': function (P4x, e4x) {
            return P4x >= e4x;
        }
        , 't8x': function (J8x, U8x) {
            return J8x >= U8x;
        }
        , 's4f': function (M4f, i4f) {
            return M4f > i4f;
        }
        , 'j6x': function (S6x, q6x) {
            return S6x - q6x;
        }
        , 'x1H': function (t1H, J1H) {
            return t1H == J1H;
        }
        , 'r0x': function (F0x, m0x) {
            return F0x > m0x;
        }
        , 'Z8o': function (z8o, c8o) {
            return z8o < c8o;
        }
        , 'd2j': function (w2j, v2j) {
            return w2j === v2j;
        }
        , 'W0x': function (k0x, H0x) {
            return k0x == H0x;
        }
        , 'v9a': function (V9a, o9a) {
            return V9a < o9a;
        }
        , 'J7r': function (U7r, R7r) {
            return U7r * R7r;
        }
        , 'm0L': function (O0L, Y0L) {
            return O0L == Y0L;
        }
        , 'A0': function (T0, K0) {
            return T0 >= K0;
        }
        , 'w7r': function (v7r, V7r) {
            return v7r > V7r;
        }
        , 'F3f': function (m3f, O3f) {
            return m3f === O3f;
        }
        , 'r9H': function (F9H, m9H) {
            return F9H < m9H;
        }
        , 'j0r': function (S0r, q0r) {
            return S0r - q0r;
        }
        , 'G42': function (W42, k42) {
            return W42 > k42;
        }
        , 'c0N': function (l2N, A2N) {
            return l2N < A2N;
        }
        , 'd4L': function (w4L, v4L) {
            return w4L !== v4L;
        }
        , 'O4j': function (Y4j, n4j) {
            return Y4j < n4j;
        }
        , 'C1x': function (D1x, y1x) {
            return D1x <= y1x;
        }
        , 'G8o': function (W8o, k8o) {
            return W8o > k8o;
        }
        , 'Z1N': function (z1N, c1N) {
            return z1N === c1N;
        }
        , 'W6o': function (k6o, H6o) {
            return k6o != H6o;
        }
        , 'q1f': function (X1f, b1f) {
            return X1f * b1f;
        }
        , 'y2f': function (Q2f, B2f) {
            return Q2f / B2f;
        }
        , 'B1H': function (r1H, F1H) {
            return r1H - F1H;
        }
        , 'b2B': function (Z2B, z2B) {
            return Z2B == z2B;
        }
        , 'z0': function (c0, l2) {
            return c0 - l2;
        }
        , 'J3f': function (U3f, R3f) {
            return U3f < R3f;
        }
        , 'u8j': function (E8j, j8j) {
            return E8j == j8j;
        }
        , 't2a': function (J2a, U2a) {
            return J2a == U2a;
        }
        , 'Z8x': function (z8x, c8x) {
            return z8x <= c8x;
        }
        , 'X5j': function (b5j, Z5j) {
            return b5j == Z5j;
        }
        , 'Z42': function (z42, c42) {
            return z42 < c42;
        }
        , 'C7B': function (D7B, y7B) {
            return D7B < y7B;
        }
        , 'R1B': function (C1B, D1B) {
            return C1B >= D1B;
        }
        , 'J3': function (U3, R3) {
            return U3 < R3;
        }
        , 'F2L': function (m2L, O2L) {
            return m2L - O2L;
        }
        , 'b3a': function (Z3a, z3a) {
            return Z3a - z3a;
        }
        , 'o7L': function (f7L, s7L) {
            return f7L == s7L;
        }
        , 'l3f': function (A3f, T3f) {
            return A3f < T3f;
        }
        , 'O7x': function (Y7x, n7x) {
            return Y7x == n7x;
        }
        , 'B1j': function (r1j, F1j) {
            return r1j / F1j;
        }
        , 'f8H': function (s8H, M8H) {
            return s8H * M8H;
        }
        , 'X5a': function (b5a, Z5a) {
            return b5a * Z5a;
        }
        , 'N7N': function (p7N, d7N) {
            return p7N / d7N;
        }
        , 'E2o': function (j2o, S2o) {
            return j2o * S2o;
        }
        , 't5N': function (J5N, U5N) {
            return J5N * U5N;
        }
        , 't9B': function (J9B, U9B, R9B) {
            return J9B - U9B + R9B;
        }
        , 'r2B': function (F2B, m2B) {
            return F2B < m2B;
        }
        , 'X4N': function (b4N, Z4N) {
            return b4N == Z4N;
        }
        , 'J3j': function (U3j, R3j) {
            return U3j < R3j;
        }
        , 'e7r': function (x7r, t7r) {
            return x7r > t7r;
        }
        , 'U1': function (R1, C1) {
            return R1 > C1;
        }
        , 'L3B': function (h3B, P3B) {
            return h3B > P3B;
        }
        , 'j9H': function (S9H, q9H) {
            return S9H - q9H;
        }
        , 'A6N': function (T6N, K6N) {
            return T6N == K6N;
        }
        , 'b3x': function (Z3x, z3x) {
            return Z3x < z3x;
        }
        , 'o4': function (f4, s4) {
            return f4 < s4;
        }
        , 'A3x': function (T3x, K3x) {
            return T3x <= K3x;
        }
        , 'B1a': function (r1a, F1a) {
            return r1a < F1a;
        }
        , 'M2r': function (i2r, g2r) {
            return i2r == g2r;
        }
        , 'L2L': function (h2L, P2L) {
            return h2L * P2L;
        }
        , 'g1o': function (u1o, E1o) {
            return u1o > E1o;
        }
        , 'l8N': function (A8N, T8N) {
            return A8N === T8N;
        }
        , 'K8j': function (G8j, W8j) {
            return G8j / W8j;
        }
        , 'k7': function (H7, a7) {
            return H7 == a7;
        }
        , 'A4j': function (T4j, K4j) {
            return T4j == K4j;
        }
        , 'd6x': function (w6x, v6x) {
            return w6x * v6x;
        }
        , 'n9j': function (I9j, N9j) {
            return I9j / N9j;
        }
        , 'P0x': function (e0x, x0x) {
            return e0x === x0x;
        }
        , 'Q7L': function (B7L, r7L) {
            return B7L == r7L;
        }
        , 'q1j': function (X1j, b1j) {
            return X1j == b1j;
        }
        , 'A0H': function (T0H, K0H) {
            return T0H < K0H;
        }
        , 'g1B': function (u1B, E1B) {
            return u1B - E1B;
        }
        , 'H8o': function (a8o, L8o) {
            return a8o < L8o;
        }
        , 'J2r': function (U2r, R2r) {
            return U2r < R2r;
        }
        , 'V3y': "p", 'U1f': function (R1f, C1f) {
            return R1f == C1f;
        }
        , 'v6a': function (V6a, o6a) {
            return V6a <= o6a;
        }
        , 'p1r': function (d1r, w1r) {
            return d1r * w1r;
        }
        , 'S3x': function (q3x, X3x) {
            return q3x == X3x;
        }
        , 'D7f': function (y7f, Q7f) {
            return y7f * Q7f;
        }
        , 'F7B': function (m7B, O7B) {
            return m7B !== O7B;
        }
        , 'w3': function (v3, V3) {
            return v3 - V3;
        }
        , 'X22': function (b22, Z22) {
            return b22 < Z22;
        }
        , 's0x': function (M0x, i0x) {
            return M0x == i0x;
        }
        , 'F5B': function (m5B, O5B) {
            return m5B - O5B;
        }
        , 'T3r': function (K3r, G3r) {
            return K3r > G3r;
        }
        , 'z0x': function (c0x, l2x) {
            return c0x == l2x;
        }
        , 'b7H': function (Z7H, z7H) {
            return Z7H < z7H;
        }
        , 'c9x': function (l0x, A0x) {
            return l0x == A0x;
        }
        , 'p4a': function (d4a, w4a, v4a) {
            return d4a - w4a - v4a;
        }
        , 'p9N': function (d9N, w9N) {
            return d9N / w9N;
        }
        , 'B6a': function (r6a, F6a) {
            return r6a <= F6a;
        }
        , 'g0x': function (u0x, E0x) {
            return u0x == E0x;
        }
        , 'K62': function (G62, W62) {
            return G62 != W62;
        }
        , 'K5r': function (G5r, W5r) {
            return G5r > W5r;
        }
        , 'l8f': function (A8f, T8f) {
            return A8f / T8f;
        }
        , 'S2': function (q2, X2) {
            return q2 < X2;
        }
        , 'A7f': function (T7f, K7f) {
            return T7f == K7f;
        }
        , 'x6H': function (t6H, J6H) {
            return t6H < J6H;
        }
        , 'S5r': function (q5r, X5r) {
            return q5r > X5r;
        }
        , 'G52': 0, 'B9o': function (r9o, F9o) {
            return r9o < F9o;
        }
        , 'P0r': function (e0r, x0r) {
            return e0r * x0r;
        }
        , 'G0': function (W0, k0) {
            return W0 <= k0;
        }
        , 'z7a': function (c7a, l9a) {
            return c7a * l9a;
        }
        , 'd6o': function (w6o, v6o) {
            return w6o - v6o;
        }
        , 'q9a': function (X9a, b9a) {
            return X9a > b9a;
        }
        , 'n9a': function (I9a, N9a) {
            return I9a > N9a;
        }
        , 'r4N': function (F4N, m4N) {
            return F4N == m4N;
        }
        , 'R5H': function (C5H, D5H) {
            return C5H == D5H;
        }
        , 'B9j': function (r9j, F9j) {
            return r9j / F9j;
        }
        , 'w2B': function (v2B, V2B) {
            return v2B / V2B;
        }
        , 'c2L': function (l4L, A4L) {
            return l4L == A4L;
        }
        , 'a6x': function (L6x, h6x) {
            return L6x <= h6x;
        }
        , 'k3B': function (H3B, a3B) {
            return H3B == a3B;
        }
        , 'j1B': function (S1B, q1B) {
            return S1B >= q1B;
        }
        , 'n3o': function (I3o, N3o) {
            return I3o < N3o;
        }
        , 'w7j': function (v7j, V7j) {
            return v7j >= V7j;
        }
        , 'W72': function (k72, H72) {
            return k72 - H72;
        }
        , 'R7x': function (C7x, D7x) {
            return C7x > D7x;
        }
        , 'w5o': function (v5o, V5o) {
            return v5o <= V5o;
        }
        , 'k7L': function (H7L, a7L) {
            return H7L - a7L;
        }
        , 'Y1': function (n1, I1) {
            return n1 == I1;
        }
        , 'u6r': function (E6r, j6r) {
            return E6r < j6r;
        }
        , 'r0r': function (F0r, m0r) {
            return F0r != m0r;
        }
        , 't5': function (J5, U5) {
            return J5 < U5;
        }
        , 'E92': function (j92, S92) {
            return j92 < S92;
        }
        , 'i1H': function (g1H, u1H) {
            return g1H * u1H;
        }
        , 'S8j': function (q8j, X8j, b8j) {
            return q8j - X8j + b8j;
        }
        , 'L8r': function (h8r, P8r) {
            return h8r == P8r;
        }
        , 'k2L': function (H2L, a2L) {
            return H2L in a2L;
        }
        , 'l8r': function (A8r, T8r) {
            return A8r * T8r;
        }
        , 'z1': function (l8, A8) {
            return l8 == A8;
        }
        , 'X5': function (b5, Z5) {
            return b5 == Z5;
        }
        , 'L7r': function (h7r, P7r) {
            return h7r < P7r;
        }
        , 'V7x': function (o7x, f7x) {
            return o7x < f7x;
        }
        , 'w4': function (v4, V4) {
            return v4 < V4;
        }
        , 'F4n': "v", 'u4': function (E4, j4) {
            return E4 <= j4;
        }
        , 'Q3': function (B3, r3) {
            return B3 === r3;
        }
        , 'w0o': function (v0o, V0o) {
            return v0o == V0o;
        }
        , 'w8j': function (v8j, V8j) {
            return v8j !== V8j;
        }
        , 's1o': function (M1o, i1o) {
            return M1o == i1o;
        }
        , 'K3a': function (G3a, W3a) {
            return G3a != W3a;
        }
        , 'O6y': "u", 'A0L': function (T0L, K0L) {
            return T0L / K0L;
        }
        , 'm0H': function (O0H, Y0H) {
            return O0H * Y0H;
        }
        , 'J02': function (U02, R02) {
            return U02 / R02;
        }
        , 'P5a': function (e5a, x5a) {
            return e5a / x5a;
        }
        , 'I6': function (N6, p6) {
            return N6 * p6;
        }
        , 'T5L': function (K5L, G5L) {
            return K5L / G5L;
        }
        , 'w0f': function (v0f, V0f) {
            return v0f - V0f;
        }
        , 'r8': function (F8, m8) {
            return F8 - m8;
        }
        , 'J4': function (U4, R4) {
            return U4 < R4;
        }
        , 'a1': function (L1, h1) {
            return L1 == h1;
        }
        , 'n6N': function (I6N, N6N) {
            return I6N > N6N;
        }
        , 'j72': function (S72, q72) {
            return S72 === q72;
        }
        , 'g5H': function (u5H, E5H) {
            return u5H <= E5H;
        }
        , 'V5x': function (o5x, f5x) {
            return o5x != f5x;
        }
        , 'l5B': function (A5B, T5B) {
            return A5B > T5B;
        }
        , 'a5H': function (L5H, h5H) {
            return L5H / h5H;
        }
        , 'O2B': function (Y2B, n2B) {
            return Y2B < n2B;
        }
        , 'E1r': function (j1r, S1r) {
            return j1r != S1r;
        }
        , 'F8N': function (m8N, O8N) {
            return m8N < O8N;
        }
        , 'O5a': function (Y5a, n5a) {
            return Y5a <= n5a;
        }
        , 'r1': function (F1, O1) {
            return F1 > O1;
        }
        , 'T4r': function (K4r, G4r, W4r, k4r) {
            return K4r - G4r + W4r + k4r;
        }
        , 'n6f': function (I6f, N6f) {
            return I6f < N6f;
        }
        , 'A1f': function (T1f, K1f) {
            return T1f === K1f;
        }
        , 'i0L': function (g0L, u0L) {
            return g0L * u0L;
        }
        , 'I6x': function (N6x, p6x) {
            return N6x * p6x;
        }
        , 'e3H': function (x3H, t3H) {
            return x3H / t3H;
        }
        , 'R4B': function (C4B, D4B) {
            return C4B * D4B;
        }
        , 'R6x': function (C6x, D6x) {
            return C6x & D6x;
        }
        , 'f9j': function (s9j, M9j) {
            return s9j == M9j;
        }
        , 'o8r': function (f8r, s8r) {
            return f8r * s8r;
        }
        , 'e7j': function (x7j, t7j) {
            return x7j > t7j;
        }
        , 'K5B': function (G5B, W5B) {
            return G5B < W5B;
        }
        , 'l5o': function (A5o, T5o) {
            return A5o == T5o;
        }
        , 'L3f': function (h3f, P3f) {
            return h3f - P3f;
        }
        , 'u2L': function (E2L, j2L) {
            return E2L == j2L;
        }
        , 'j7x': function (S7x, q7x) {
            return S7x < q7x;
        }
        , 'j2j': function (S2j, q2j) {
            return S2j - q2j;
        }
        , 'F0N': function (m0N, O0N) {
            return m0N >= O0N;
        }
        , 'I7x': function (N7x, p7x) {
            return N7x < p7x;
        }
        , 'J3H': function (U3H, R3H) {
            return U3H < R3H;
        }
        , 'P4N': function (e4N, x4N) {
            return e4N == x4N;
        }
        , 'm1j': function (O1j, Y1j) {
            return O1j > Y1j;
        }
        , 'X1o': function (b1o, Z1o) {
            return b1o == Z1o;
        }
        , 'j9': function (S9, q9) {
            return S9 == q9;
        }
        , 'L5o': function (h5o, P5o) {
            return h5o * P5o;
        }
        , 'b3j': function (Z3j, z3j) {
            return Z3j < z3j;
        }
        , 'R5a': function (C5a, D5a) {
            return C5a < D5a;
        }
        , 'y7x': function (Q7x, B7x) {
            return Q7x - B7x;
        }
        , 'Q5r': function (B5r, r5r) {
            return B5r - r5r;
        }
        , 'l4o': function (A4o, T4o) {
            return A4o - T4o;
        }
        , 'g9L': function (u9L, E9L) {
            return u9L >= E9L;
        }
        , 'K7N': function (G7N, W7N) {
            return G7N - W7N;
        }
        , 'F3': function (m3, O3) {
            return m3 == O3;
        }
        , 'A9o': function (T9o, K9o) {
            return T9o in K9o;
        }
        , 'C3j': function (D3j, y3j) {
            return D3j === y3j;
        }
        , 'l0N': function (A0N, T0N) {
            return A0N < T0N;
        }
        , 'h1L': function (P1L, e1L) {
            return P1L - e1L;
        }
        , 'I5L': function (N5L, p5L) {
            return N5L != p5L;
        }
        , 'J3B': function (U3B, R3B) {
            return U3B >= R3B;
        }
        , 'U6L': function (R6L, C6L) {
            return R6L - C6L;
        }
        , 'g5f': function (u5f, E5f) {
            return u5f - E5f;
        }
        , 'F8L': function (m8L, O8L) {
            return m8L * O8L;
        }
        , 'X4j': function (b4j, Z4j) {
            return b4j < Z4j;
        }
        , 'R9': function (C9, D9) {
            return C9 == D9;
        }
        , 'i6L': function (g6L, u6L) {
            return g6L !== u6L;
        }
        , 's1': function (M1, i1) {
            return M1 == i1;
        }
        , 'f6f': function (s6f, M6f) {
            return s6f - M6f;
        }
        , 'M0j': function (i0j, g0j) {
            return i0j != g0j;
        }
        , 'k7N': function (H7N, a7N) {
            return H7N != a7N;
        }
        , 'e3B': function (x3B, t3B) {
            return x3B - t3B;
        }
        , 'v1a': function (V1a, o1a) {
            return V1a < o1a;
        }
        , 'E8o': function (j8o, S8o) {
            return j8o == S8o;
        }
        , 'Q7H': function (B7H, r7H) {
            return B7H == r7H;
        }
        , 'L2H': function (h2H, P2H) {
            return h2H > P2H;
        }
        , 'g2f': function (u2f, E2f) {
            return u2f / E2f;
        }
        , 'X7x': function (b7x, Z7x) {
            return b7x === Z7x;
        }
        , 'i8B': function (g8B, u8B) {
            return g8B < u8B;
        }
        , 't4B': function (J4B, U4B) {
            return J4B === U4B;
        }
        , 'A9f': function (T9f, K9f) {
            return T9f <= K9f;
        }
        , 's7x': function (M7x, i7x) {
            return M7x == i7x;
        }
        , 'E6H': function (j6H, S6H) {
            return j6H < S6H;
        }
        , 'T6x': function (K6x, G6x) {
            return K6x <= G6x;
        }
        , 't4H': function (J4H, U4H) {
            return J4H < U4H;
        }
        , 'E3o': function (j3o, S3o) {
            return j3o - S3o;
        }
        , 'V0x': function (o0x, f0x) {
            return o0x != f0x;
        }
        , 'l2n': "{", 'D4x': function (y4x, Q4x, B4x, r4x) {
            return y4x - Q4x + B4x - r4x;
        }
        , 'H0L': function (a0L, L0L) {
            return a0L == L0L;
        }
        , 'M6r': function (i6r, g6r) {
            return i6r < g6r;
        }
        , 'r0B': function (F0B, m0B) {
            return F0B - m0B;
        }
        , 'B9N': function (r9N, F9N) {
            return r9N - F9N;
        }
        , 'G2o': function (W2o, k2o) {
            return W2o / k2o;
        }
        , 'w5B': function (v5B, V5B) {
            return v5B / V5B;
        }
        , 'A6a': function (T6a, K6a) {
            return T6a != K6a;
        }
        , 'q42': function (X42, b42) {
            return X42 != b42;
        }
        , 'b7r': function (Z7r, z7r) {
            return Z7r == z7r;
        }
        , 'P7x': function (e7x, x7x) {
            return e7x * x7x;
        }
        , 'j4j': function (S4j, q4j) {
            return S4j < q4j;
        }
        , 'k8f': function (H8f, a8f) {
            return H8f === a8f;
        }
        , 'k3j': function (H3j, a3j) {
            return H3j < a3j;
        }
        , 'F4B': function (m4B, O4B) {
            return m4B === O4B;
        }
        , 'e3j': function (x3j, t3j) {
            return x3j - t3j;
        }
        , 'g2a': function (u2a, E2a) {
            return u2a == E2a;
        }
        , 'f1N': function (s1N, M1N) {
            return s1N * M1N;
        }
        , 'l4': function (A4, T4) {
            return A4 > T4;
        }
        , 'V0r': function (o0r, f0r) {
            return o0r === f0r;
        }
        , 'n9N': function (I9N, N9N) {
            return I9N > N9N;
        }
        , 'N7B': function (p7B, d7B) {
            return p7B != d7B;
        }
        , 'O0x': function (Y0x, n0x) {
            return Y0x - n0x;
        }
        , 'W4B': function (k4B, H4B) {
            return k4B === H4B;
        }
        , 'b1x': function (Z1x, z1x) {
            return Z1x * z1x;
        }
        , 'x8o': function (t8o, J8o) {
            return t8o == J8o;
        }
        , 'O5': function (Y5, n5) {
            return Y5 == n5;
        }
        , 'I6o': function (N6o, p6o) {
            return N6o - p6o;
        }
        , 't5a': function (J5a, U5a) {
            return J5a - U5a;
        }
        , 'G6L': function (W6L, k6L) {
            return W6L < k6L;
        }
        , 'I5': function (N5, p5) {
            return N5 == p5;
        }
        , 'O9': function (Y9, n9) {
            return Y9 == n9;
        }
        , 'C2N': function (D2N, y2N) {
            return D2N <= y2N;
        }
        , 'S3j': function (q3j, X3j) {
            return q3j / X3j;
        }
        , 'K8r': function (G8r, W8r) {
            return G8r - W8r;
        }
        , 'q1a': function (X1a, b1a) {
            return X1a < b1a;
        }
        , 'c9B': function (l0B, A0B) {
            return l0B < A0B;
        }
        , 'N0a': function (p0a, d0a) {
            return p0a === d0a;
        }
        , 'a2j': function (L2j, h2j) {
            return L2j != h2j;
        }
        , 'H1L': function (a1L, L1L) {
            return a1L >= L1L;
        }
        , 'X9': function (b9, Z9) {
            return b9 === Z9;
        }
        , 'y4r': function (Q4r, B4r) {
            return Q4r / B4r;
        }
        , 'V3r': function (o3r, f3r, s3r, M3r) {
            return o3r - f3r + s3r - M3r;
        }
        , 'B6H': function (r6H, F6H) {
            return r6H < F6H;
        }
        , 'S9x': function (q9x, X9x) {
            return q9x - X9x;
        }
        , 't7o': function (J7o, U7o) {
            return J7o < U7o;
        }
        , 'l3B': function (A3B, T3B) {
            return A3B === T3B;
        }
        , 't5H': function (J5H, U5H) {
            return J5H > U5H;
        }
        , 'q6f': function (X6f, b6f) {
            return X6f > b6f;
        }
        , 'T9L': function (K9L, G9L) {
            return K9L == G9L;
        }
        , 'E9o': function (j9o, S9o) {
            return j9o == S9o;
        }
        , 'f9f': function (s9f, M9f) {
            return s9f / M9f;
        }
        , 'q2o': function (X2o, b2o) {
            return X2o - b2o;
        }
        , 'N02': function (p02, d02) {
            return p02 >= d02;
        }
        , 'F7L': function (m7L, O7L) {
            return m7L == O7L;
        }
        , 'c3f': function (l5f, A5f) {
            return l5f < A5f;
        }
        , 'B9r': function (r9r, F9r) {
            return r9r in F9r;
        }
        , 'f6a': function (s6a, M6a) {
            return s6a > M6a;
        }
        , 'E3r': function (j3r, S3r) {
            return j3r / S3r;
        }
        , 'w3x': function (v3x, V3x) {
            return v3x / V3x;
        }
        , 'S2B': function (q2B, X2B) {
            return q2B < X2B;
        }
        , 'w2r': function (v2r, V2r) {
            return v2r / V2r;
        }
        , 'Q0o': function (B0o, r0o) {
            return B0o > r0o;
        }
        , 'b5r': function (Z5r, z5r) {
            return Z5r < z5r;
        }
        , 'A4a': function (T4a, K4a) {
            return T4a < K4a;
        }
        , 'M3f': function (i3f, g3f) {
            return i3f < g3f;
        }
        , 'Y4x': function (n4x, I4x) {
            return n4x / I4x;
        }
        , 'e2r': function (x2r, t2r) {
            return x2r < t2r;
        }
        , 'U6a': function (R6a, C6a) {
            return R6a <= C6a;
        }
        , 'h6j': function (P6j, e6j) {
            return P6j === e6j;
        }
        , 'g7x': function (u7x, E7x) {
            return u7x > E7x;
        }
        , 'Q8N': function (B8N, r8N) {
            return B8N > r8N;
        }
        , 'p92': function (d92, w92) {
            return d92 === w92;
        }
        , 'Y3B': function (n3B, I3B) {
            return n3B == I3B;
        }
        , 'N5o': function (p5o, d5o) {
            return p5o == d5o;
        }
        , 'L6r': function (h6r, P6r) {
            return h6r >= P6r;
        }
        , 'G0H': function (W0H, k0H) {
            return W0H - k0H;
        }
        , 'Z1r': function (z1r, c1r) {
            return z1r > c1r;
        }
        , 'h6L': function (P6L, e6L) {
            return P6L - e6L;
        }
        , 'M8L': function (i8L, g8L) {
            return i8L == g8L;
        }
        , 'I6B': function (N6B, p6B) {
            return N6B - p6B;
        }
        , 'T5a': function (K5a, G5a) {
            return K5a / G5a;
        }
        , 'v3o': function (V3o, o3o) {
            return V3o in o3o;
        }
        , 'O6o': function (Y6o, n6o) {
            return Y6o >= n6o;
        }
        , 'x6L': function (t6L, J6L) {
            return t6L - J6L;
        }
        , 'K4o': function (G4o, W4o) {
            return G4o >= W4o;
        }
        , 'I2B': function (N2B, p2B, d2B) {
            return N2B * p2B / d2B;
        }
        , 'H9o': function (a9o, L9o) {
            return a9o < L9o;
        }
        , 'U7f': function (R7f, C7f) {
            return R7f / C7f;
        }
        , 'X7o': function (b7o, Z7o) {
            return b7o > Z7o;
        }
        , 'Q3a': function (B3a, r3a) {
            return B3a <= r3a;
        }
        , 'B8H': function (r8H, F8H) {
            return r8H * F8H;
        }
        , 'j4H': function (S4H, q4H) {
            return S4H == q4H;
        }
        , 'z4H': function (c4H, l6H) {
            return c4H * l6H;
        }
        , 'r2f': function (F2f, m2f) {
            return F2f < m2f;
        }
        , 'M02': function (i02, g02) {
            return i02 == g02;
        }
        , 'y5N': function (Q5N, B5N) {
            return Q5N < B5N;
        }
        , 'P2N': function (e2N, x2N) {
            return e2N / x2N;
        }
        , 'S02': function (q02, X02) {
            return q02 < X02;
        }
        , 'u9B': function (E9B, j9B) {
            return E9B / j9B;
        }
        , 'K0a': function (G0a, W0a) {
            return G0a == W0a;
        }
        , 'w8N': function (v8N, V8N) {
            return v8N !== V8N;
        }
        , 'T2f': function (K2f, G2f) {
            return K2f === G2f;
        }
        , 'v2o': function (V2o, o2o) {
            return V2o - o2o;
        }
        , 'r9L': function (F9L, m9L) {
            return F9L < m9L;
        }
        , 'd0x': function (w0x, v0x) {
            return w0x === v0x;
        }
        , 'C0': function (D0, Q0) {
            return D0 - Q0;
        }
        , 'b3N': function (Z3N, z3N) {
            return Z3N === z3N;
        }
        , 's2j': function (M2j, i2j) {
            return M2j < i2j;
        }
        , 'R2f': function (C2f, D2f) {
            return C2f * D2f;
        }
        , 'B4f': function (r4f, F4f) {
            return r4f % F4f;
        }
        , 'n6a': function (I6a, N6a) {
            return I6a <= N6a;
        }
        , 'N8a': function (p8a, d8a) {
            return p8a < d8a;
        }
        , 'X2j': function (b2j, Z2j) {
            return b2j == Z2j;
        }
        , 'J0j': function (U0j, R0j) {
            return U0j * R0j;
        }
        , 'x0H': function (t0H, J0H) {
            return t0H - J0H;
        }
        , 'U8o': function (R8o, C8o) {
            return R8o == C8o;
        }
        , 'k3N': function (H3N, a3N) {
            return H3N < a3N;
        }
        , 'Q3B': function (B3B, r3B) {
            return B3B < r3B;
        }
        , 't2j': function (J2j, U2j) {
            return J2j === U2j;
        }
        , 'h3o': function (P3o, e3o) {
            return P3o < e3o;
        }
        , 'S4B': function (q4B, X4B) {
            return q4B === X4B;
        }
        , 'm8H': function (O8H, Y8H) {
            return O8H > Y8H;
        }
        , 'V22': function (o22, f22) {
            return o22 > f22;
        }
        , 'C3B': function (D3B, y3B) {
            return D3B - y3B;
        }
        , 'F4x': function (m4x, O4x) {
            return m4x <= O4x;
        }
        , 'l2r': function (A2r, T2r) {
            return A2r < T2r;
        }
        , 'P5j': function (e5j, x5j) {
            return e5j >= x5j;
        }
        , 'W1B': function (k1B, H1B) {
            return k1B !== H1B;
        }
        , 'V2j': function (o2j, f2j) {
            return o2j == f2j;
        }
        , 't3r': function (J3r, U3r) {
            return J3r - U3r;
        }
        , 'n9f': function (I9f, N9f) {
            return I9f / N9f;
        }
        , 'c0B': function (l2B, A2B) {
            return l2B < A2B;
        }
        , 'w3H': function (v3H, V3H) {
            return v3H - V3H;
        }
        , 'a4N': function (L4N, h4N) {
            return L4N === h4N;
        }
        , 'G4a': function (W4a, k4a) {
            return W4a - k4a;
        }
        , 'o7H': function (f7H, s7H) {
            return f7H < s7H;
        }
        , 'n1a': function (I1a, N1a) {
            return I1a != N1a;
        }
        , 'r4L': function (F4L, m4L) {
            return F4L < m4L;
        }
        , 'Y1x': function (n1x, I1x) {
            return n1x & I1x;
        }
        , 'T9N': function (K9N, G9N) {
            return K9N - G9N;
        }
        , 'W5L': function (k5L, H5L) {
            return k5L - H5L;
        }
        , 'X7a': function (b7a, Z7a) {
            return b7a - Z7a;
        }
        , 'i1r': function (g1r, u1r) {
            return g1r / u1r;
        }
        , 'x1N': function (t1N, J1N) {
            return t1N < J1N;
        }
        , 'W8x': function (k8x, H8x) {
            return k8x < H8x;
        }
        , 'h0': function (P0, e0) {
            return P0 == e0;
        }
        , 'A8B': function (T8B, K8B) {
            return T8B < K8B;
        }
        , 'r1B': function (F1B, m1B) {
            return F1B == m1B;
        }
        , 'a4B': function (L4B, h4B) {
            return L4B * h4B;
        }
        , 'D1L': function (y1L, Q1L) {
            return y1L == Q1L;
        }
        , 'f9o': function (s9o, M9o) {
            return s9o === M9o;
        }
        , 'x4a': function (t4a, J4a) {
            return t4a - J4a;
        }
        , 'w8L': function (v8L, V8L) {
            return v8L == V8L;
        }
        , 'u3L': function (E3L, j3L) {
            return E3L - j3L;
        }
        , 'N0j': function (p0j, d0j) {
            return p0j - d0j;
        }
        , 'l3j': function (A3j, T3j) {
            return A3j === T3j;
        }
        , 'v6N': function (V6N, o6N) {
            return V6N < o6N;
        }
        , 't7a': function (J7a, U7a) {
            return J7a < U7a;
        }
        , 'M6B': function (i6B, g6B) {
            return i6B - g6B;
        }
        , 'k0N': function (H0N, a0N) {
            return H0N / a0N;
        }
        , 'a9': function (L9, h9) {
            return L9 != h9;
        }
        , 'K7': function (G7, W7) {
            return G7 == W7;
        }
        , 'O9H': function (Y9H, n9H) {
            return Y9H - n9H;
        }
        , 's6': function (M6, i6) {
            return M6 == i6;
        }
        , 'V5': function (o5, f5) {
            return o5 == f5;
        }
        , 'v8H': function (V8H, o8H) {
            return V8H > o8H;
        }
        , 'L3j': function (h3j, P3j) {
            return h3j < P3j;
        }
        , 'v6j': function (V6j, o6j) {
            return V6j < o6j;
        }
        , 'l8a': function (A8a, T8a) {
            return A8a < T8a;
        }
        , 'O4r': function (Y4r, n4r) {
            return Y4r - n4r;
        }
        , 'l3L': function (A3L, T3L) {
            return A3L == T3L;
        }
        , 'D6a': function (y6a, Q6a) {
            return y6a >= Q6a;
        }
        , 'F8f': function (m8f, O8f) {
            return m8f != O8f;
        }
        , 'p42': function (d42, w42) {
            return d42 <= w42;
        }
        , 'r22': function (F22, m22) {
            return F22 >= m22;
        }
        , 'y5j': function (Q5j, B5j) {
            return Q5j == B5j;
        }
        , 'B0L': function (r0L, F0L) {
            return r0L == F0L;
        }
        , 'A4f': function (T4f, K4f) {
            return T4f === K4f;
        }
        , 'R1o': function (C1o, D1o) {
            return C1o < D1o;
        }
        , 'V9': function (o9, f9) {
            return o9 * f9;
        }
        , 'f42': function (s42, M42) {
            return s42 >= M42;
        }
        , 'D8B': function (y8B, Q8B) {
            return y8B > Q8B;
        }
        , 'O8x': function (Y8x, n8x) {
            return Y8x / n8x;
        }
        , 'V0': function (o0, f0) {
            return o0 < f0;
        }
        , 'x92': function (t92, J92) {
            return t92 === J92;
        }
        , 'l0j': function (A0j, T0j) {
            return A0j - T0j;
        }
        , 'I4H': function (N4H, p4H) {
            return N4H == p4H;
        }
        , 'i9r': function (g9r, u9r) {
            return g9r <= u9r;
        }
        , 'd2f': function (w2f, v2f) {
            return w2f === v2f;
        }
        , 'H4x': function (a4x, L4x) {
            return a4x < L4x;
        }
        , 'm7f': function (O7f, Y7f) {
            return O7f * Y7f;
        }
        , 'k3a': function (H3a, a3a) {
            return H3a === a3a;
        }
        , 'n8B': function (I8B, N8B) {
            return I8B === N8B;
        }
        , 'C7H': function (D7H, y7H) {
            return D7H == y7H;
        }
        , 'q4r': function (X4r, b4r) {
            return X4r / b4r;
        }
        , 's5L': function (M5L, i5L) {
            return M5L == i5L;
        }
        , 't52': 8, 'U1N': function (R1N, C1N) {
            return R1N < C1N;
        }
        , 'X9H': function (b9H, Z9H) {
            return b9H == Z9H;
        }
        , 't9L': function (J9L, U9L) {
            return J9L == U9L;
        }
        , 'G6j': function (W6j, k6j) {
            return W6j !== k6j;
        }
        , 'f0L': function (s0L, M0L) {
            return s0L in M0L;
        }
        , 'X4L': function (b4L, Z4L) {
            return b4L > Z4L;
        }
        , 't7x': function (J7x, U7x) {
            return J7x < U7x;
        }
    }
    ;
(function () {
        var M7w = t0l.C38.D38("a7") ? -1032153266 : "High", i7w = t0l.C38.D38("c4") ? "baseline_delta" : -1588080820, g7w = t0l.C38.D38("ff4") ? "deleteHighlighted" : ((0x1F5, 3.030E2) < (58.80E1, 0x3D) ? (60., 77.0E1) : (1.5E1, 0x150) >= 23 ? (1.78E2, 1716365971) : (0x13A, 0x2D) >= (0x8D, 11.42E2) ? (147, 75.10E1) : (0xDB, 89.4E1)), u7w = t0l.C38.D38("1c6") ? (0x19A >= (53, 40.30E1) ? (9.6E2, 662693018) : (0x85, 1.400E2)) : "stx_hollow_candle_down", E7w = t0l.C38.D38("4be") ? -162567562 : "under", j7w = t0l.C38.D38("b86a") ? -974873944 : 0.7, S7w = t0l.C38.D38("7f1d") ? "short" : -619213955, q7w = t0l.C38.D38("c88c") ? "1.1" : -((1.22E2, 0x252) < (40.90E1, 74) ? (0x82, "n") : (39., 3.260E2) <= 1.389E3 ? (48., 377676679) : (0x18, 4) > 46 ? (123, 7.80E1) : (0x77, 3.6E1)), X7w = t0l.C38.D38("338c") ? "127.0.0.1" : -1248285112, b7w = -(3.40E1 < (0x113, 0x3D) ? (55, 1863296984) : (0x125, 5.46E2) < (6.36E2, 0x156) ? "b" : (6.48E2, 0x16C)), Z7w = t0l.C38.D38("35") ? "stx_watermark" : -106762838, z7w = -192640626;
        if (t0l.F62.Y62(23, ((0x13E, 0x24F) > 139 ? (130, 6922094) : (0x19, 0x1B2))) !== M7w && t0l.F62.Y62(18, 7741010) !== i7w && t0l.F62.Y62(19, 1250558) !== g7w && t0l.F62.Y62(39, 7649896) !== u7w && t0l.F62.Y62((7.71E2 > (21.1E1, 102.) ? (0x124, 38) : (0x127, 116.0E1)), 5580904) !== E7w && t0l.F62.Y62(13, 7302131) !== j7w && t0l.F62.Y62(39, 6261820) !== S7w && t0l.F62.Y62(17, ((36, 10.) <= (0x1E6, 0x254) ? (104, 3882470) : (1.049E3, 0x23D) < (1, 0x29) ? "n" : (15, 0x34))) !== q7w && t0l.F62.Y62(0, 9480254) !== X7w && t0l.F62.Y62(0, 3049946) !== b7w && t0l.F62.Y62(15, ((147, 50.1E1) > (82.80E1, 23.5E1) ? (144.70E1, 4230383) : (0x54, 7.0E2))) !== Z7w && t0l.F62.Y62(20, ((140., 13.370E2) >= (138., 45.) ? (0x133, 7698596) : (67, 78.) < (1.025E3, 27.) ? (0x138, 'g') : (2.92E2, 9.97E2))) !== z7w) {
            delete  this.layout.setSpan;
            delete  this.chart.seriesRenderers[renderer.params.name];
        }
        else {
            var h82 = "function", m5y = "stx", S82 = t0l.C38.D38("54") ? "fin" : "close", B0n = "nd", r2y = "ed", E9y = t0l.C38.D38("a71") ? "s2MS" : "e";
        }
        function _stxKernel_js(_stxThirdParty, _exports) {
            var e5w = t0l.C38.D38("a52") ? -526794904 : "handleMouseOut", x5w = -388507251, t5w = 1639295562, J5w = t0l.C38.D38("d7d") ? 316002793 : "percent", U5w = 1941026611, R5w = ((85.30E1, 0x75) <= 1.036E3 ? (65., 836861515) : 99 > (0x218, 4.08E2) ? (1.278E3, 1.258E3) : (13.94E2, 8) >= 143. ? "e" : (2.73E2, 0x161)), C5w = 1915119499, D5w = 759211627, y5w = t0l.C38.D38("b41b") ? 402091331 : "rangebars", Q5w = 1341604456, B5w = 1180099214, r5w = -817218410;
            if (t0l.F62.Y62(23, 5270008) === e5w || t0l.F62.Y62(18, 5451037) === x5w || t0l.F62.Y62(((0x18C, 94.7E1) < (24., 1.262E3) ? (1.332E3, 19) : (57.0E1, 89.) <= (0x230, 8.3E1) ? "Z" : 0x12E < (6.9E2, 0xB2) ? 3.68E2 : (8.72E2, 26.3E1)), 1286948) === t5w || t0l.F62.Y62(39, 5884103) === J5w || t0l.F62.Y62(38, 4284204) === U5w || t0l.F62.Y62(13, 2378011) === R5w || t0l.F62.Y62(((0xDE, 0x1AB) > 5 ? (0x146, 39) : (28., 145.9E1) < (34.1E1, 1.167E3) ? 118. : 11. > (0xAD, 124.80E1) ? 0x1E7 : (0x24C, 11.84E2)), 4573419) === C5w || t0l.F62.Y62(17, 9294683) === D5w || t0l.F62.Y62(((4.0E2, 1.395E3) > 43 ? (77., 0) : (0x24A, 97.7E1) <= 72 ? (0xD3, "px") : (0x45, 0x36)), 4582623) === y5w || t0l.F62.Y62(0, 2920502) === Q5w || t0l.F62.Y62(15, 8900525) === B5w || t0l.F62.Y62((29 >= (11.01E2, 1.23E2) ? (0x1E5, "y0") : (0xBF, 80) <= (37., 0xDD) ? (4.68E2, 20) : (102.2E1, 0x1D7)), (19.1E1 <= (141., 100.) ? 28. : (1.053E3, 123) < 4.16E2 ? (0xBC, 3988798) : (7.10E1, 54))) === r5w) {
                var A52 = t0l.C38.D38("267") ? "dataSegment" : "rightTick", w1y = "minute", B5y = "ea", H7y = "numeric", h2y = 0.3, d8y = ((62.40E1, 7.020E2) <= 0x142 ? (4.2E2, 0.1) : 2.17E2 > (0x191, 9.67E2) ? (123, 116.5E1) : (0xA7, 0x68) <= 11.18E2 ? (0x1A6, 33) : (0x1E2, 0x1AA)), V0n = "horizontal", X2y = 'tick', g7y = "gap", E6y = "te", j52 = "ror", C9y = "index", A2y = "ho", A8y = "lo", X12 = "center", y1y = "right", c5y = "middle", e52 = "top", T2y = "stx_watermark", F52 = "mountain", J8y = "setPeriodicityV2", k52 = 6, P2y = 0.2, D2y = (18. >= (115, 108.) ? (0x1F1, 7) : (129, 76.60E1) > (71, 0x1B7) ? (0x1DF, 0.8) : (0x1F, 51.)), v7n = 20, s7n = "tu", l7n = "stx-show", D6y = "stx_pandf_up", h7n = 30, T3y = "stx-grab", K2y = "touchend", X82 = "touchmove", f6y = "touchstart", P0y = "mousedown", i1y = ((97., 74.) <= (78, 145.8E1) ? (0x1F5, "*") : (8.05E2, 28) >= (1.650E2, 48.) ? (3.88E2, 120.80E1) : (0x1E7, 0x101) < (125., 35) ? (108, 0x178) : (106, 0x244)), e9y = "chart", I7n = 12, w2y = "year", L9y = "object", u12 = "mou", T0y = "co", u2n = "di", O5y = "ng", e6y = ".", G9n = "boundary", l0y = "ame", T0n = "rt", w32 = "Q", c7n = "#FFFFFF", e4y = "#000000", t9n = "C", I0y = "et", n7y = "cr", m6y = "/", k9y = "en", D4y = "ca", W4n = (0xF7 <= (113., 0x152) ? (0x1D, "w") : (1.97E2, 12)), u0y = ((1.328E3, 102) > 0x159 ? (0x2F, 8.85E2) : (0x100, 0x117) >= (0x9E, 109.) ? (114.9E1, "_") : (34.6E1, 0xEE) <= 26. ? 0.9 : (28, 0x21)), F9n = "tx", e7n = (1E0 >= (10.5E1, 8.69E2) ? (0x7A, 0x1C6) : 1.880E2 >= (0x181, 0) ? (0x213, 32) : (111.0E1, 3.800E2)), M1y = "to", X3y = "q", Y4y = "ta", R0n = "it", O12 = "se", Y1y = "ha", d32 = "an", N3y = "2", K4n = "ity", O52 = "month", V2y = "week", v82 = "day", B82 = "raw", a7y = "calculate", r32 = "overlay", m7y = "underlay", W6y = "Ser", r4n = "aseli", I12 = "tap", N0y = "stx-drag-chart", a4n = 250, S9n = "mouseup", W0n = "ne", H9y = "stx_crosshair_drawing", p7y = "stx_crosshair", V6y = "undo", e12 = "segment", Q8y = ((0x1BB, 49) <= 103.7E1 ? (50, ")") : (128.6E1, 29)), w7y = " (", D1y = ((0x115, 3.510E2) <= 61.30E1 ? (0x172, "%") : (140., 18.)), O0n = ((0x27, 0x215) > (2.05E2, 0x104) ? (0x56, 10000) : (8.39E2, 0x1A2)), o0n = 1000, m52 = 0.01, t2y = 0.1, G2y = "measureUnlit", o9n = "mMeasure", u9y = "inline-block", l0n = 50, g9n = ((14.780E2, 148) <= (1.455E3, 63.) ? (0x14, "r") : (85, 0x48) >= (0xF0, 0x108) ? (54., "r") : 131. <= (0xF1, 147.) ? (1.650E2, 60) : (0x23A, 0x6F)), E0y = "mousemove", a9n = "px", X0n = "none", q82 = "block", O2y = "stx-crosshair-on", G8y = "f", K2n = 100, J7n = "millisecond", R7n = "second", w2n = ":", e3y = "-", k2n = "ent", o8y = "tr", G1y = "stx_candle_shadow", s52 = "stx_candle_down", f32 = "stx_candle_up", x12 = "High", J4n = "Te", p5y = "plo", N1y = "h", e2n = "z", F4y = "on", k9n = "dr", p0n = "de", o4y = "_b", n9y = "d", x5y = "ri", M2y = "eft", U7n = "left", N82 = "stx_grid_border", B4n = "border", M7y = "fill", y6y = "text", D82 = "stroke", w7n = "grid", J12 = "stx_yaxis", I2y = "drawYAxis", k2y = 0.5, R6y = "", k5y = "0", A9n = 10, g12 = "cha", q2n = "YAxi", f2y = "Y", R1y = "re", R5y = ((0xA7, 132) <= (144, 70.) ? (138, 50) : 31 > (21, 102.) ? (10.870E2, "f") : (0x154, 0x232) >= 0x111 ? (126, "1") : (0x8E, 124)), v5y = "m", C7n = ". ", d9y = "or", W5y = "ti", H0y = "er", E9n = "A", p9n = ": ", g0y = "es", q1y = ((19, 0xF) > 2.0E2 ? (0x1C6, 59.5E1) : (0xEC, 0xA6) < 0x131 ? (5.270E2, "i") : (113, 0x1C)), k6y = "W", X4y = "X", g82 = "ic", X52 = "T", B9y = "a", S9y = "c", F9y = "der", Q5y = "o", D3y = (57 > (1.122E3, 71) ? 'I' : 4.12E2 >= (9.700E2, 38) ? (0x215, "s") : (0x1DD, 0x143)), j2n = "x", O9y = "st", P5y = "n", c7y = "drawing", n82 = "vector", d52 = "layout", P0n = false, a0y = " ", M4y = "transparent", h9y = "b", R8y = ((0x7D, 0x53) <= 83.5E1 ? (0x14F, "g") : (34, 0x251) > 6.12E2 ? (8.3E1, 'D') : (82, 61.2E1)), K3y = "r", n12 = "div", x1y = true, e1y = "#zoomIn", b5y = "#", R52 = "undefined", O3y = 'isp', c9y = 'nd', T7n = 'se', I0n = 'lo', p8y = 'dit', s12 = 'ow', Q6y = 'anel', i32 = 'itl', M82 = 'el', u6y = 'rol', v6y = 'nt', m82 = '> ', h5y = 'one', w4y = 'dl', T2n = 'co', p12 = 'oat', y4y = '_tod', U0n = 'um', J2n = 'tx_j', u82 = 'ome', M52 = 'oom', X9n = 'mI', o7y = 'oo', l4n = 'ut', a6y = ((45., 60.) < (13, 0x188) ? (1.472E3, 'u') : (3, 0x80)), C5y = ((5.55E2, 92.) > (3.30E1, 0x165) ? 59 : 78.10E1 >= (35, 11.20E1) ? (1.346E3, 'O') : (125., 0xD0) < (0x7B, 0x20) ? "V" : (10.99E2, 0x1C8)), T9y = 'om', P9y = 'z', G12 = 'ar', j7n = ';"><', Z32 = ((0x150, 122.) < 11. ? (0x16D, 60) : 0x20 < (1, 0xB4) ? (7.810E2, '2') : (36., 0xC3)), f1y = 'ttom', X0y = 'rols', f0y = 'tx_char', E3y = 'ty', D52 = '_y', C52 = 'ir', t8y = 'ssha', P8y = 'cro', q7y = 'la', L4n = ';"></', k7y = 'ay', B1y = 'ispl', z0y = 'yl', O82 = 'ir_x', p7n = 'sh', f52 = 'os', K12 = 'cr', b8y = 'x_', B8y = 'hair', v32 = 'ss', z9n = '_c', N7n = '>)</', l3y = 'anage', k3y = 'ht', E1y = 'xt', j0n = 'ag', d4y = 'eM', e4n = 'us', S4y = 'ig', E52 = '">', v2n = 'ex', j2y = 'eT', u9n = 'use', x3y = '><', s0y = '>(</', w0n = 'cti', i82 = 'stru', b12 = 'In', d9n = 'De', o32 = 'ou', i2y = '></', U5y = 'pan', a8y = ';</', g2y = '">&', Q0y = 'ra', U6y = '"><', r9y = 'lay', c0n = 'sp', g8y = 'le', f9y = 'lass', p82 = 'Ca', P4n = 'h', v1y = 'yT', O32 = 'er', Q4y = 'v', s8y = '=""><', U12 = 'as', f2n = 'ick', T5y = 'tCl', q0y = 'gh', I52 = 'Ri', w12 = 'ky', p1y = '> <', A5y = '"></', b52 = 'or', e2y = (0x1F0 >= (1.145E3, 19) ? (6E0, 'r') : (0x14E, 0x1D2)), m9y = 'te', Y52 = 'kyI', j32 = 'tic', J52 = '"> <', S0n = ((88, 6.810E2) > (0x13D, 7.15E2) ? (84, "y") : 3.40E1 >= (45, 35.6E1) ? 0x9C : (41.0E1, 66) > (85, 56.) ? (12, 'k') : (121, 4.07E2)), L3y = ((0x251, 0x18F) <= 0x241 ? (0x170, 'S') : (0x185, 88) > (42., 0x161) ? (0x169, 'B') : (1.232E3, 0x160)), Y7y = 'iv', C6y = 'ance', o9y = ((8.36E2, 120) < (0x1F6, 9.370E2) ? (81.9E1, 'x') : (74.3E1, 0xC2) <= (131, 59) ? (0x1FC, 92) : (51, 48.6E1)), b7n = '0p', m12 = '1', F82 = ':', a7n = 'f', w3y = 'rgin', K0n = 'm', r7n = '; ', U9y = 'ne', y9y = 'spla', L9n = 'ce', i9n = '_', d82 = 'tio', B7y = 'ota', P3y = 'x_a', d5y = 'ass', h2n = 'l', V32 = 'an', k0y = '>', J4y = 'pa', U4n = '</', D5y = ';">', f8y = ((2., 0x23E) <= 0xF1 ? 40.90E1 : 0x113 < (27.8E1, 0x2E) ? (11.96E2, 8) : (0xE9, 0x11B) > 24 ? (3.52E2, 'e') : (3.050E2, 3.67E2)), S7y = 'on', b1y = ': ', Z9y = ((6, 1.206E3) > 5.05E2 ? (143, 'y') : (32, 2.36E2)), i3y = 'spl', C2n = 'i', T9n = 'd', r2n = 'yle', W12 = '" ', s5y = 'ave', P2n = 'on_s', y0y = 'ti', z4y = ((88., 14.46E2) > (112., 0x121) ? (1.01E3, 't') : (78.9E1, 49.) > (42, 62.5E1) ? (0, "top") : 0x177 <= (105., 1.650E2) ? 100 : (49.5E1, 65)), d0n = 'o', I82 = 'tx_an', c0y = 'tn', m9n = 'b', C12 = ((0x1BE, 0x101) > (110, 0xC6) ? (9.60E1, '-') : (100, 0x29) >= (59, 72) ? (7.15E2, 99) : (32.80E1, 8.01E2)), I3y = 'tx', n8y = '="', c2y = 'las', M7n = 'c', G7n = ' ', C0n = 'n', U9n = 'a', q2y = 'p', d2y = 's', W7y = '<', V = function (M) {
                        var f2c = -((0x1AB, 72.8E1) < 59 ? (0xA5, 10) : 12.67E2 > (12.5E2, 49.1E1) ? (111, 1056262490) : (16., 0x185) < 80. ? 10 : (84.7E1, 67)), s2c = 448203230, M2c = ((0x10C, 9.27E2) > 79.5E1 ? (0x17A, 752565870) : (0x1C, 118)), i2c = 930622840, g2c = -676920674, u2c = ((84.30E1, 0x82) <= 0x236 ? (115., 378293650) : (75, 54.) >= 86.60E1 ? 0x128 : (14.51E2, 55)), E2c = ((18, 0xF0) > 1.294E3 ? 10 : 1.401E3 >= (0xF, 0x189) ? (8.9E2, 1643341964) : (44., 43.) > 100. ? 0x26 : (0x96, 2.61E2)), j2c = 1476970373, S2c = -((59.2E1, 89) < (0x1DA, 1.2570E3) ? (94, 1395224060) : (73, 0x249)), q2c = -491702194, X2c = ((46.30E1, 45.) <= 99. ? (0x1B9, 1725846932) : (79, 112.)), b2c = -245344434;
                        if (t0l.F62.Y62(23, ((0xC8, 0x37) < (0x149, 0x110) ? (9.98E2, 3398971) : (0x14F, 0xCF) >= 0x1C8 ? "O" : (147.6E1, 120.7E1))) !== f2c && t0l.F62.Y62(18, ((83, 104) >= 24.40E1 ? 5.09E2 : (83.7E1, 0xBC) >= (0x9B, 0x1D3) ? 'k' : (1.04E2, 52) < (9, 0x1DF) ? (0x1D6, 5741846) : (102, 0x11B))) !== s2c && t0l.F62.Y62(19, 7100298) !== M2c && t0l.F62.Y62((89. >= (1.423E3, 8.01E2) ? "o" : (0x2C, 1.203E3) <= (0x24C, 0x153) ? (92., "K") : 11.35E2 >= (0x15F, 0x10C) ? (1.492E3, 39) : (141.9E1, 8.86E2)), ((143, 0xF7) > (11.5E1, 91.) ? (6.51E2, 8810243) : (0xF5, 88.30E1))) !== i2c && t0l.F62.Y62(38, 7038712) !== g2c && t0l.F62.Y62((118. > (0x88, 0x219) ? 0x15 : (125., 134) < (45, 0x232) ? (85.7E1, 13) : (143, 0x3)), 8283145) !== u2c && t0l.F62.Y62(39, 7880884) !== E2c && t0l.F62.Y62(17, 3100674) !== j2c && t0l.F62.Y62(0, 8298122) !== S2c && t0l.F62.Y62(0, 6030606) !== q2c && t0l.F62.Y62(15, 7878358) !== X2c && t0l.F62.Y62(((13.39E2, 122.30E1) >= (2.02E2, 0x1F) ? (35, 20) : (132., 108.) <= (0x1E6, 80) ? 23 : (147., 60.) >= (1.361E3, 145.) ? 12.11E2 : (0x68, 136.)), 9144569) !== b2c) {
                            return h3L - P3L;
                        }
                        else {
                            STX.Comparison.mouseHasMoved = M;
                        }
                    }
                    , Y = function (N) {
                        var h79 = 291007588, P79 = 1740126147, e79 = -382228491, x79 = -(0x1A3 > (118, 113) ? (6.46E2, 882395798) : (0x184, 59.) >= (57, 0x1E3) ? (146, 3) : (0xAC, 0xDE)), t79 = -229851607, J79 = 1760452521, U79 = -1172951845, R79 = 954747236, C79 = 1344114601, D79 = 1091904222, y79 = ((149., 0x206) >= 0xF4 ? (0x9B, 275748323) : (90.9E1, 8.41E2) < (0x14, 80.60E1) ? 126 : (86., 0x42)), Q79 = -130842375;
                        if (t0l.F62.Y62(23, 7670870) !== h79 && t0l.F62.Y62(18, 3969945) !== P79 && t0l.F62.Y62(19, 8571762) !== e79 && t0l.F62.Y62(39, ((0xD, 114) < 29.70E1 ? (0x64, 3243560) : (4., 83))) !== x79 && t0l.F62.Y62(38, ((97., 123.) > (0x32, 2.69E2) ? (0x110, "Low") : (1.224E3, 0x142) > (103.9E1, 43.) ? (92, 3640400) : (0x138, 75.3E1) < 0x6 ? (109., 8) : (58, 0x48))) !== t79 && t0l.F62.Y62((20.20E1 >= (6.33E2, 0x82) ? (0x1B3, 13) : (41.80E1, 74)), 3047382) !== J79 && t0l.F62.Y62(39, 2302176) !== U79 && t0l.F62.Y62(17, 8351496) !== R79 && t0l.F62.Y62(((11.17E2, 33.) < (0x154, 0) ? 'd' : 9.5E1 <= (138, 149.) ? (0x109, 0) : (0x106, 1.305E3)), 1954972) !== C79 && t0l.F62.Y62(0, 4732287) !== D79 && t0l.F62.Y62(((127.0E1, 46.) <= 7.80E1 ? (0x128, 15) : (104, 0x245)), 2669067) !== y79 && t0l.F62.Y62(20, 9980067) !== Q79) {
                            return E8j == j8j;
                        }
                        else {
                            STXChart.CANDLEEVEN = N;
                        }
                    }
                    , F = function (O) {
                        var V39 = -1039666919, o39 = -((0xBE, 134.) > (0x4C, 1.369E3) ? 1.3900E3 : 0x18D <= (101, 0x1E7) ? (0x1BE, 1111468882) : 61. > (42., 5.14E2) ? (0xA0, 33) : (0x11B, 0x251)), f39 = -(99. <= (106., 43.0E1) ? (0x9D, 1499921351) : (41., 111)), s39 = 1350952467, M39 = -((1.397E3, 6.51E2) > (0x20B, 17.) ? (57.0E1, 567512149) : (12, 0x1CF)), i39 = 374520530, g39 = -2049902948, u39 = 286824732, E39 = 662890521, j39 = 801397524, S39 = -385017412, q39 = -220698303;
                        if (t0l.F62.Y62(23, 2835352) === V39 || t0l.F62.Y62(((0xD7, 0x194) >= 34.30E1 ? (10.290E2, 18) : (0x15E, 136)), 1550936) === o39 || t0l.F62.Y62(19, 9093549) === f39 || t0l.F62.Y62(((0x27, 11.47E2) < (35.9E1, 0x73) ? 10 : (58.80E1, 120) <= (132, 0x249) ? (0x1F6, 39) : 0x22E >= (140, 123.9E1) ? "s" : (146.0E1, 81.)), 1832325) === s39 || t0l.F62.Y62(((0x1AA, 1.371E3) < 141. ? (52, 77.2E1) : 1.113E3 > (47., 0x34) ? (5., 38) : (0x83, 0x63)), ((56., 113) < 6. ? 0x22D : 79 < (23, 9.120E2) ? (0x240, 5929407) : (6, 10.60E1) < (1.178E3, 54.) ? "g" : (0x2D, 86))) === M39 || t0l.F62.Y62(13, 1368998) === i39 || t0l.F62.Y62(39, 9148474) === g39 || t0l.F62.Y62(((65, 0x1C) <= 0x1EF ? (8, 17) : (0x151, 0x245)), 3925541) === u39 || t0l.F62.Y62(0, 9458269) === E39 || t0l.F62.Y62((0xF6 <= (84.10E1, 2.90E1) ? 'e' : (44.40E1, 41.90E1) <= 0x139 ? (0x71, 0xC4) : 0. < (0xF4, 0x218) ? (136., 0) : (0xBE, 0xC6)), 4383359) === j39 || t0l.F62.Y62(15, ((62., 79.) <= 122. ? (0x23D, 8357515) : (116.10E1, 0x1D1))) === S39 || t0l.F62.Y62(20, 9925473) === q39) {
                            STXChart.CANDLEDOWN = O;
                        }
                        else {
                            panel.subholder.appendChild(this.controls.iconsTemplate.cloneNode(true));
                            context.lineTo(x + arrowHeight, y);
                            U(2);
                            return p8L == d8L;
                        }
                    }
                    , Q = function (B) {
                        STXChart.CANDLEUP = B;
                    }
                    , C = function (D) {
                        var a24 = 362992093, L24 = -((0x257, 0xEC) < (74, 108.) ? (144, 0x251) : (0x4A, 6.48E2) > (123, 62.0E1) ? (70, 716283137) : (0x18B, 83.) > (7.55E2, 0xE9) ? (9.75E2, 62) : (107.5E1, 8.52E2)), h24 = -((2.05E2, 139) >= (13.8E1, 99.) ? (69.7E1, 530199805) : (0x43, 103.80E1) < 5 ? 0x122 : (1.353E3, 8.36E2) <= 0x1A4 ? 3 : (66, 12.06E2)), P24 = 1901277740, e24 = 1686455473, x24 = 1165367654, t24 = -112069545, J24 = -430109390, U24 = -872470765, R24 = -72719631, C24 = -1945953312, D24 = 1937164721;
                        if (t0l.F62.Y62(23, 6192790) === a24 || t0l.F62.Y62(18, 4990277) === L24 || t0l.F62.Y62(19, 4042163) === h24 || t0l.F62.Y62(39, 5133359) === P24 || t0l.F62.Y62(38, 3177946) === e24 || t0l.F62.Y62(((8.03E2, 22) >= (1.227E3, 52.) ? (0x236, 0xED) : 0x99 < (0x1B2, 0x1F8) ? (74., 13) : (2., 0x2A)), 3079358) === x24 || t0l.F62.Y62(39, 7503667) === t24 || t0l.F62.Y62(17, ((147., 92) >= 0x16 ? (71.5E1, 7495859) : (28., 0x22D) <= 93. ? "%" : (78., 9.18E2))) === J24 || t0l.F62.Y62(0, 1768933) === U24 || t0l.F62.Y62(0, ((4.17E2, 22.) >= 0xC1 ? (1.12E2, "M") : 0x178 >= (0x19E, 9.49E2) ? "DT" : 0x21C <= (9.97E2, 1.3880E3) ? (33.30E1, 1925057) : (87., 0xE2))) === R24 || t0l.F62.Y62(15, 9307665) === C24 || t0l.F62.Y62(((145, 111) >= 0x184 ? 'V' : (0x1C5, 0x14F) >= 0x4 ? (0x136, 20) : (146., 124.60E1)), ((138, 0x1BC) >= 55 ? (9.8E2, 8877959) : (0xD, 0xB2))) === D24) {
                            STXChart.CLOSEEVEN = D;
                        }
                        else {
                            clearTimeout(sp.timeout);
                            STX.deleteRHS(STX.Studies.studyPanelMap, study);
                            seriesPlotter.draw(context, "line");
                            this.runAppend("rightClickOverlay", arguments);
                            return C2a == D2a;
                        }
                    }
                    , U = function (R) {
                        STXChart.CLOSEDOWN = R;
                    }
                    , P = function (J) {
                        STXChart.CLOSEUP = J;
                    }
                    , H = function (L) {
                        STXChart.NONE = L;
                    }
                    , W = function (k) {
                        var w84 = 33912182, v84 = 2041534994, V84 = 441842196, o84 = 582846582, f84 = 627840598, s84 = 1836278043, M84 = -1238594746, i84 = -((0x8, 28) > 54. ? 1.618 : (0x248, 0xB1) <= (132., 45.) ? (30.5E1, "X") : 0x1CA >= (1.165E3, 26.) ? (78., 923445293) : (5.32E2, 143.)), g84 = -1163613534, u84 = -2025415448, E84 = 602074214, j84 = -784953496;
                        if (t0l.F62.Y62(23, ((0x165, 22.) < (0x19E, 120.) ? (78.60E1, 2398168) : (46, 134.4E1))) === w84 || t0l.F62.Y62(18, ((90.60E1, 13) < (5.7E1, 7.060E2) ? (33.1E1, 2907564) : (92.0E1, 69) > (0x1D1, 0x1D5) ? 104. : (1.22E2, 145.20E1) < (11.14E2, 1.408E3) ? (10., "log") : (7.87E2, 0x193))) === v84 || t0l.F62.Y62(19, 5796982) === V84 || t0l.F62.Y62(39, 9591401) === o84 || t0l.F62.Y62((1.443E3 <= (76, 97.) ? (9.4E2, 136.1E1) : (0x68, 0xF1) >= 11.67E2 ? 1.428E3 : (0x241, 29) <= 6.87E2 ? (0x4A, 38) : (26, 62.0E1)), 2249323) === f84 || t0l.F62.Y62(13, 7588977) === s84 || t0l.F62.Y62(39, 2930451) === M84 || t0l.F62.Y62(17, 4704278) === i84 || t0l.F62.Y62(0, ((90.30E1, 0xFF) > 36.30E1 ? (2.54E2, 1.057E3) : 0x241 > (0xEA, 0x253) ? (116, "ray") : (8.790E2, 1.256E3) > 107 ? (7., 9771205) : (0x144, 13.10E1))) === g84 || t0l.F62.Y62(0, 5135029) === u84 || t0l.F62.Y62(15, (0x231 > (74., 132) ? (77., 8639090) : 0xC3 < (144, 43) ? (0x1C7, 'F') : (7.04E2, 0xE9))) === E84 || t0l.F62.Y62(20, 2986879) === j84) {
                            STX.camelCaseRegExp = k;
                        }
                        else {
                            panelsInOrder.push(chartName);
                            seriesPlotter.lineTo("mountain", x, bottom);
                            return h7L < P7L;
                        }
                    }
                    , plotSpline = _stxThirdParty.plotSpline, plotSplinePrimitive = _stxThirdParty.plotSplinePrimitive, timezoneJS = _stxThirdParty.timezoneJS, STX = _exports.STX, STXChart = _exports.STXChart, $$ = _exports.$$, $$$ = _exports.$$$;
                STXChart.prototype.plugins = {}
                ;
                if (STX.isSurface) {
                    var K = function (G) {
                            STX.gesturePointerId = G;
                        }
                        , A = function (T) {
                            STX.gesture.target = T.body;
                        }
                        ;
                    STX.gesture = new MSGesture();
                    A(document);
                    K(t0l.a1y);
                }
                STXChart.htmlControls = {
                    "annotationSave": (W7y + d2y + q2y + U9n + C0n + G7n + M7n + c2y + d2y + n8y + d2y + I3y + C12 + m9n + c0y + G7n + d2y + I82 + C0n + d0n + z4y + U9n + y0y + P2n + s5y + W12 + d2y + z4y + r2n + n8y + T9n + C2n + i3y + U9n + Z9y + b1y + C0n + S7y + f8y + D5y + d2y + s5y + U4n + d2y + J4y + C0n + k0y),
                    "annotationCancel": (W7y + d2y + q2y + V32 + G7n + M7n + h2n + d5y + n8y + d2y + I3y + C12 + m9n + z4y + C0n + G7n + d2y + z4y + P3y + C0n + C0n + B7y + d82 + C0n + i9n + M7n + U9n + C0n + L9n + h2n + W12 + d2y + z4y + r2n + n8y + T9n + C2n + y9y + Z9y + b1y + C0n + d0n + U9y + r7n + K0n + U9n + w3y + C12 + h2n + f8y + a7n + z4y + F82 + m12 + b7n + o9y + D5y + M7n + C6y + h2n + U4n + d2y + q2y + V32 + k0y),
                    "mSticky": (W7y + T9n + Y7y + G7n + C2n + T9n + n8y + K0n + L3y + y0y + M7n + S0n + Z9y + J52 + d2y + J4y + C0n + G7n + C2n + T9n + n8y + K0n + L3y + j32 + Y52 + C0n + m9y + e2y + C2n + b52 + A5y + d2y + J4y + C0n + p1y + d2y + J4y + C0n + G7n + C2n + T9n + n8y + K0n + L3y + y0y + M7n + w12 + I52 + q0y + T5y + f2n + W12 + M7n + h2n + U12 + d2y + s8y + d2y + q2y + U9n + C0n + G7n + C2n + T9n + n8y + d0n + Q4y + O32 + h2n + U9n + v1y + e2y + U9n + d2y + P4n + p82 + C0n + W12 + M7n + f9y + n8y + d2y + z4y + o9y + C12 + m9n + z4y + C0n + W12 + d2y + z4y + Z9y + g8y + n8y + T9n + C2n + c0n + r9y + F82 + C0n + d0n + C0n + f8y + U6y + d2y + q2y + U9n + C0n + G7n + M7n + h2n + d5y + n8y + d2y + z4y + o9y + C12 + C2n + M7n + d0n + C12 + z4y + Q0y + d2y + P4n + g2y + C0n + m9n + d2y + q2y + a8y + d2y + U5y + i2y + d2y + q2y + U9n + C0n + p1y + d2y + J4y + C0n + G7n + C2n + T9n + n8y + K0n + o32 + d2y + f8y + d9n + g8y + z4y + f8y + b12 + i82 + w0n + S7y + d2y + U6y + d2y + q2y + V32 + s0y + d2y + U5y + x3y + d2y + J4y + C0n + G7n + C2n + T9n + n8y + K0n + d0n + u9n + d9n + g8y + z4y + j2y + v2n + z4y + E52 + e2y + S4y + P4n + z4y + C12 + M7n + h2n + C2n + M7n + S0n + G7n + z4y + d0n + G7n + T9n + f8y + h2n + f8y + z4y + f8y + U4n + d2y + J4y + C0n + x3y + d2y + q2y + U9n + C0n + G7n + C2n + T9n + n8y + K0n + d0n + e4n + d4y + U9n + C0n + j0n + j2y + f8y + E1y + E52 + e2y + S4y + k3y + C12 + M7n + h2n + f2n + G7n + z4y + d0n + G7n + K0n + l3y + U4n + d2y + J4y + C0n + x3y + d2y + J4y + C0n + N7n + d2y + J4y + C0n + i2y + d2y + q2y + U9n + C0n + i2y + d2y + U5y + i2y + T9n + Y7y + k0y),
                    "crossX": (W7y + T9n + C2n + Q4y + G7n + M7n + h2n + U12 + d2y + n8y + d2y + I3y + z9n + e2y + d0n + v32 + B8y + G7n + d2y + z4y + b8y + K12 + f52 + p7n + U9n + O82 + W12 + d2y + z4y + z0y + f8y + n8y + T9n + B1y + k7y + b1y + C0n + S7y + f8y + L4n + T9n + Y7y + k0y),
                    "crossY": (W7y + T9n + C2n + Q4y + G7n + M7n + q7y + v32 + n8y + d2y + I3y + i9n + P8y + t8y + C2n + e2y + G7n + d2y + I3y + i9n + P8y + v32 + P4n + U9n + C52 + D52 + W12 + d2y + E3y + h2n + f8y + n8y + T9n + C2n + d2y + q2y + q7y + Z9y + b1y + C0n + S7y + f8y + L4n + T9n + Y7y + k0y),
                    "chartControls": (W7y + T9n + C2n + Q4y + G7n + M7n + q7y + d2y + d2y + n8y + d2y + f0y + z4y + z9n + d0n + C0n + z4y + X0y + W12 + d2y + z4y + r2n + n8y + T9n + C2n + c0n + h2n + k7y + b1y + C0n + d0n + C0n + f8y + r7n + m9n + d0n + f1y + b1y + Z32 + Z32 + q2y + o9y + j7n + T9n + C2n + Q4y + G7n + C2n + T9n + n8y + M7n + P4n + G12 + z4y + L3y + C2n + P9y + f8y + U6y + d2y + U5y + G7n + C2n + T9n + n8y + P9y + d0n + T9y + C5y + a6y + z4y + W12 + M7n + h2n + U9n + v32 + n8y + d2y + z4y + o9y + C12 + P9y + d0n + T9y + C12 + d0n + l4n + A5y + d2y + q2y + V32 + x3y + d2y + J4y + C0n + G7n + C2n + T9n + n8y + P9y + o7y + X9n + C0n + W12 + M7n + h2n + U9n + v32 + n8y + d2y + z4y + o9y + C12 + P9y + M52 + C12 + C2n + C0n + A5y + d2y + q2y + U9n + C0n + i2y + T9n + Y7y + i2y + T9n + Y7y + k0y),
                    "home": (W7y + T9n + C2n + Q4y + G7n + C2n + T9n + n8y + P4n + u82 + W12 + M7n + q7y + v32 + n8y + d2y + J2n + U0n + q2y + y4y + U9n + Z9y + G7n + P4n + u82 + W12 + d2y + E3y + g8y + n8y + T9n + C2n + i3y + k7y + F82 + C0n + S7y + f8y + U6y + d2y + J4y + C0n + i2y + d2y + q2y + U9n + C0n + i2y + T9n + Y7y + k0y),
                    "floatDate": (W7y + T9n + Y7y + G7n + M7n + c2y + d2y + n8y + d2y + I3y + C12 + a7n + h2n + p12 + C12 + T9n + U9n + m9y + W12 + d2y + E3y + g8y + n8y + T9n + C2n + c0n + q7y + Z9y + b1y + C0n + d0n + U9y + L4n + T9n + C2n + Q4y + k0y),
                    "handleTemplate": (W7y + T9n + C2n + Q4y + G7n + M7n + h2n + U9n + d2y + d2y + n8y + d2y + z4y + o9y + C12 + C2n + T2n + C12 + P4n + U9n + C0n + w4y + f8y + W12 + d2y + z4y + r2n + n8y + T9n + C2n + d2y + q2y + h2n + k7y + b1y + C0n + h5y + j7n + d2y + U5y + i2y + d2y + J4y + C0n + i2y + T9n + C2n + Q4y + m82),
                    "iconsTemplate": (W7y + T9n + Y7y + G7n + M7n + q7y + v32 + n8y + d2y + I3y + C12 + q2y + U9n + U9y + h2n + C12 + M7n + d0n + v6y + u6y + U6y + T9n + C2n + Q4y + G7n + M7n + q7y + v32 + n8y + d2y + z4y + o9y + C12 + q2y + V32 + M82 + C12 + z4y + i32 + f8y + A5y + T9n + Y7y + x3y + T9n + C2n + Q4y + G7n + M7n + c2y + d2y + n8y + d2y + z4y + o9y + C12 + m9n + c0y + C12 + q2y + V32 + M82 + U6y + d2y + q2y + U9n + C0n + G7n + M7n + c2y + d2y + n8y + d2y + I3y + C12 + C2n + T2n + C12 + a6y + q2y + A5y + d2y + J4y + C0n + i2y + T9n + C2n + Q4y + x3y + T9n + Y7y + G7n + M7n + q7y + d2y + d2y + n8y + d2y + I3y + C12 + m9n + z4y + C0n + C12 + q2y + Q6y + U6y + d2y + q2y + V32 + G7n + M7n + q7y + d2y + d2y + n8y + d2y + I3y + C12 + C2n + T2n + C12 + a7n + d0n + M7n + e4n + A5y + d2y + q2y + U9n + C0n + i2y + T9n + Y7y + x3y + T9n + C2n + Q4y + G7n + M7n + h2n + U12 + d2y + n8y + d2y + I3y + C12 + m9n + c0y + C12 + q2y + Q6y + U6y + d2y + J4y + C0n + G7n + M7n + c2y + d2y + n8y + d2y + z4y + o9y + C12 + C2n + T2n + C12 + T9n + s12 + C0n + A5y + d2y + J4y + C0n + i2y + T9n + C2n + Q4y + x3y + T9n + Y7y + G7n + M7n + f9y + n8y + d2y + I3y + C12 + m9n + c0y + C12 + q2y + V32 + f8y + h2n + U6y + d2y + q2y + U9n + C0n + G7n + M7n + h2n + U12 + d2y + n8y + d2y + z4y + o9y + C12 + C2n + M7n + d0n + C12 + f8y + p8y + A5y + d2y + U5y + i2y + T9n + Y7y + x3y + T9n + C2n + Q4y + G7n + M7n + h2n + U9n + v32 + n8y + d2y + z4y + o9y + C12 + m9n + z4y + C0n + C12 + q2y + Q6y + U6y + d2y + q2y + U9n + C0n + G7n + M7n + h2n + U12 + d2y + n8y + d2y + I3y + C12 + C2n + M7n + d0n + C12 + M7n + I0n + T7n + A5y + d2y + U5y + i2y + T9n + Y7y + i2y + T9n + C2n + Q4y + k0y),
                    "baselineHandle": (W7y + T9n + C2n + Q4y + G7n + M7n + f9y + n8y + d2y + z4y + o9y + C12 + m9n + U9n + d2y + M82 + C2n + U9y + C12 + P4n + U9n + c9y + h2n + f8y + G7n + a7n + U9n + W12 + d2y + z4y + Z9y + g8y + n8y + T9n + O3y + r9y + b1y + C0n + d0n + U9y + L4n + T9n + Y7y + k0y),
                }
                ;
                STXChart.prototype.registerHTMLElements = function () {
                    var k38 = -2141873244, H38 = -1035622555, a38 = -1531676009, L38 = ((0x105, 38) > 0x1AF ? (0x159, "N") : 140. <= (135, 5.82E2) ? (1.039E3, 294811284) : (0x59, 7.01E2)), h38 = -1593428396, P38 = -144728192, e38 = 1265089180, x38 = 374364331, t38 = -(3.280E2 < (13.15E2, 93.10E1) ? (130.70E1, 914838098) : (25.0E1, 1.041E3)), J38 = (0x19C <= (0x57, 56.5E1) ? (0x1FF, 162950574) : (42.6E1, 23) < 13. ? (13.21E2, 52.) : (13.23E2, 13.5E1)), U38 = 673373050, R38 = 1844476552;
                    if (t0l.F62.Y62(23, 6760699) !== k38 && t0l.F62.Y62(18, 8170338) !== H38 && t0l.F62.Y62(19, (0xB5 <= (23., 94.) ? 0xAB : (136, 0x152) >= (8.75E2, 0x20) ? (2.85E2, 6496160) : (0x1BA, 0x11E))) !== a38 && t0l.F62.Y62(39, ((0x96, 19) < (91., 33.) ? (0x201, 9874852) : (0x16C, 0x99))) !== L38 && t0l.F62.Y62(((8, 146) >= 0x231 ? (11, "H") : 0. <= (0x21, 26) ? (126, 38) : (0xB0, 93.60E1)), ((141., 0x175) > (0x92, 0x157) ? (64, 7270910) : (0x228, 136.) <= (115., 24) ? 24 : (33.9E1, 92))) !== h38 && t0l.F62.Y62(13, (0x186 < (117, 6.60E1) ? (0x194, "{") : (71.8E1, 57.90E1) <= 1 ? 139 : (0x1E9, 7.46E2) >= 94 ? (10., 6631664) : (36.80E1, 0xCC))) !== P38 && t0l.F62.Y62(39, 3002556) !== e38 && t0l.F62.Y62(17, 5914386) !== x38 && t0l.F62.Y62(0, 2381282) !== t38 && t0l.F62.Y62(0, 9541020) !== J38 && t0l.F62.Y62(15, 3419505) !== U38 && t0l.F62.Y62((35. < (3.27E2, 0x1F0) ? (25., 20) : (27., 0x104) > 135.3E1 ? 32. : (1.131E3, 0x123)), ((0xCF, 0x4E) >= 103 ? (0xEC, 20.) : (28., 17.) <= (22., 51.) ? (25., 8854679) : (109., 7.63E2))) !== R38) {
                        this.rendererAction(chart, "calculate");
                        this.container.appendChild(marker.node);
                        return X42 != b42;
                    }
                    else {
                        var b4y = "#zoomOut", s9n = "DIV", x2n = "chartControls", c = this.chart.container;
                        for (var control in STXChart.htmlControls) {
                            if (typeof this.chart[control] == R52 && typeof this.controls[control] == R52) {
                                if (!this.allowZoom && t0l.S(control, x2n))continue;
                                var el = $$$(b5y + control, c);
                                if (el) {
                                    this.chart[control] = el;
                                    this.controls[control] = el;
                                }
                                else {
                                    var rawHTML = STXChart.htmlControls[control], div = document.createElement(s9n);
                                    div.innerHTML = rawHTML;
                                    el = div.firstChild;
                                    c.appendChild(el);
                                    this.chart[control] = el;
                                    this.controls[control] = el;
                                    el.id = control;
                                }
                            }
                        }
                    }
                    if (this.controls.chartControls) {
                        var zoomIn = $$$(e1y, this.controls.chartControls), zoomOut = $$$(b4y, this.controls.chartControls);
                        STX.safeClickTouch(zoomIn, (function (self) {
                                return function (e) {
                                    self.zoomIn();
                                    e.stopPropagation();
                                }
                                    ;
                            })(this));
                        STX.safeClickTouch(zoomOut, (function (self) {
                                return function (e) {
                                    self.zoomOut();
                                    e.stopPropagation();
                                }
                                    ;
                            })(this));
                        if (!STX.touchDevice) {
                            zoomIn.onmouseover = (function (self) {
                                    return function (e) {
                                        self.modalBegin();
                                    }
                                        ;
                                })(this);
                            zoomIn.onmouseout = (function (self) {
                                    return function (e) {
                                        self.modalEnd();
                                    }
                                        ;
                                })(this);
                            zoomOut.onmouseover = (function (self) {
                                    return function (e) {
                                        self.modalBegin();
                                    }
                                        ;
                                })(this);
                            zoomOut.onmouseout = (function (self) {
                                    return function (e) {
                                        self.modalEnd();
                                    }
                                        ;
                                })(this);
                        }
                    }
                    if (this.controls.home) {
                        STX.safeClickTouch(this.controls.home, (function (self) {
                                return function (e) {
                                    self.home({animate: x1y}
                                    );
                                    e.stopPropagation();
                                }
                                    ;
                            })(this));
                        if (!STX.touchDevice) {
                            this.controls.home.onmouseover = (function (self) {
                                    return function (e) {
                                        self.modalBegin();
                                    }
                                        ;
                                })(this);
                            this.controls.home.onmouseout = (function (self) {
                                    return function (e) {
                                        self.modalEnd();
                                    }
                                        ;
                                })(this);
                        }
                    }
                }
                ;
            }
            else {
                P(1);
                this.runAppend("renderYAxis", arguments);
                context.moveTo(x0, y0);
                return S7x < q7x;
            }
            W(/-([a-z])/g);
            STX.makeCamelCase = function (name) {
                return name.replace(STX.camelCaseRegExp, function (g) {
                        return g[t0l.T52].toUpperCase();
                    }
                );
            }
            ;
            STXChart.prototype.cloneStyle = function (styleObject) {
                var rc = {}
                    , nativeCamelSupport = false;

                function capitalize(g) {
                    return g[1].toUpperCase();
                }

                for (var i in styleObject) {
                    var v = styleObject[i];
                    if (t0l.l7(i, "backgroundAttachment"))nativeCamelSupport = true;
                    if (nativeCamelSupport) {
                        if (v && t0l.K7(v.constructor, String) && isNaN(i)) {
                            rc[i] = v;
                        }
                    }
                    else if (!isNaN(i)) {
                        var x = styleObject.getPropertyValue(v);
                        if (x) {
                            v = v.split("-");
                            var ii = 0, jj = v.length, vcc = v[0];
                            while (++ii < jj) {
                                vcc += v[ii].charAt(0).toUpperCase() + v[ii].slice(1);
                            }
                            rc[vcc] = x;
                        }
                    }
                    else {
                        var icc = i.replace(STX.camelCaseRegExp, capitalize);
                        rc[icc] = v;
                    }
                }
                return rc;
            }
            ;
            STXChart.prototype.canvasStyle = function (className) {
                var s = this.styles[className];
                if (!s) {
                    var div = document.createElement(n12);
                    div.className = className;
                    document.body.appendChild(div);
                    var styles = getComputedStyle(div);
                    s = this.styles[className] = this.cloneStyle(styles);
                    document.body.removeChild(div);
                    if (!styles) {
                        this.styles[className] = t0l.a1y;
                    }
                }
                return s;
            }
            ;
            STXChart.prototype.colorOrStyle = function (str) {
                var H8y = "(", t3y = "rgba(";
                if (str.indexOf(b5y) != -t0l.T52)return str;
                if (str.indexOf(t3y) != -t0l.T52)return str;
                if (str.indexOf((K3y + R8y + h9y + H8y)) != -t0l.T52)return str;
                if (t0l.k7(str, M4y))return str;
                return this.canvasStyle(str);
            }
            ;
            STXChart.prototype.clearStyles = function () {
                this.styles = {}
                ;
            }
            ;
            STXChart.prototype.setStyle = function (obj, attribute, value) {
                if (!this.styles[obj]) {
                    this.canvasStyle(obj);
                }
                if (!this.styles[obj])this.styles[obj] = {}
                ;
                this.styles[obj][STX.makeCamelCase(attribute)] = value;
            }
            ;
            STXChart.prototype.canvasFont = function (className, ctx) {
                var t82 = "bad css style for class ";
                if (!ctx)ctx = this.chart.context;
                var style = this.canvasStyle(className);
                if (!style)return;
                var result = style.fontStyle + a0y + style.fontWeight + a0y + style.fontSize + a0y + style.fontFamily;
                if (result.indexOf(R52) == -t0l.T52) {
                    ctx.font = result;
                }
                else {
                    this.styles[className] = t0l.a1y;
                    console.log(t82 + className);
                }
            }
            ;
            STXChart.prototype.canvasColor = function (className, ctx) {
                if (!ctx)ctx = this.chart.context;
                var style = this.canvasStyle(className);
                if (!style)return;
                var color = style.color;
                if (STX.isTransparent(color))color = this.defaultColor;
                ctx.globalAlpha = 1;
                ctx.fillStyle = color;
                ctx.strokeStyle = color;
                var opacity = style.opacity;
                if (typeof opacity != R52)ctx.globalAlpha = opacity;
            }
            ;
            STXChart.prototype.getCanvasFontSize = function (className) {
                var q12 = "12", s = this.canvasStyle(className), fs = s.fontSize;
                if (!fs)fs = q12;
                return parseInt(STX.stripPX(fs));
            }
            ;
            STXChart.prototype.getCanvasColor = function (className) {
                var s = this.canvasStyle(className);
                return s.color;
            }
            ;
            STXChart.hideDates = function () {
                return P0n;
            }
            ;
            STXChart.prototype.runPrepend = function (o, args, self) {
                var prepends = this["prepend" + o];
                if (!prepends)return false;
                if (!self)self = this;
                for (var i = 0; t0l.L7(i, prepends.length); i++) {
                    var rv = prepends[i].apply(self, args);
                    if (rv)return rv;
                }
                return false;
            }
            ;
            STXChart.prototype.runAppend = function (o, args, self) {
                var appends = this["append" + o];
                if (!appends)return false;
                if (!self)self = this;
                for (var i = 0; t0l.e7(i, appends.length); i++) {
                    var rv = appends[i].apply(self, args);
                    if (rv)return rv;
                }
                return false;
            }
            ;
            STXChart.registerDrawingTool = function (name, func) {
                STXChart.drawingTools[name] = func;
            }
            ;
            STXChart.prototype.createBlock = function (left, width, top, height, className, context) {
                if (!context)context = this.chart.context;
                if (typeof (height) == "undefined") {
                    return;
                }
                this.canvasColor(className, context);
                context.fillRect(left, top, width, height);
                context.globalAlpha = 1;
            }
            ;
            STXChart.prototype.changeOccurred = function (change) {
                if (this.currentlyImporting)return;
                if (this.changeCallback)this.changeCallback(this, change);
                if (t0l.J7(change, d52)) {
                    this.dispatch(d52, this.layout);
                }
                else if (t0l.C7(change, n82)) {
                    this.dispatch(c7y, this.drawingObjects);
                }
            }
            ;
            STXChart.prototype.setChartType = function (chartType) {
                this.layout.chartType = chartType;
                if (this.displayInitialized)this.draw();
                this.changeOccurred(d52);
            }
            ;
            STXChart.prototype.setAggregationType = function (aggregationType) {
                this.layout.aggregationType = aggregationType;
                if (this.chart.canvas) {
                    this.createDataSet();
                    this.draw();
                }
                this.changeOccurred("layout");
            }
            ;
            STXChart.prototype.setChartScale = function (chartScale) {
                if (!chartScale)chartScale = "linear";
                this.layout.chartScale = chartScale;
                if (this.chart.canvas)this.draw();
                this.changeOccurred("layout");
            }
            ;
            STXChart.prototype.setAdjusted = function (data) {
                this.layout.adj = data;
                if (this.chart.canvas) {
                    this.createDataSet();
                    this.draw();
                }
                this.changeOccurred("layout");
            }
            ;
            STXChart.prototype.setVolumeUnderlay = function (data) {
                this.layout.volumeUnderlay = data;
                if (this.chart.canvas)this.draw();
                this.changeOccurred("layout");
            }
            ;
            STXChart.prototype.serializeDrawings = function () {
                var arr = [];
                for (var i = 0; t0l.Q7(i, this.drawingObjects.length); i++) {
                    arr.push(this.drawingObjects[i].serialize());
                }
                return arr;
            }
            ;
            STXChart.prototype.abortDrawings = function () {
                for (var i = 0; t0l.F7(i, this.drawingObjects.length); i++) {
                    this.drawingObjects[i].abort(true);
                }
                this.drawingObjects = [];
            }
            ;
            STXChart.prototype.reconstructDrawings = function (arr) {
                for (var i = 0; t0l.Y7(i, arr.length); i++) {
                    var rep = arr[i];
                    if (t0l.N7(rep.name, "fibonacci"))rep.name = "retracement";
                    var Factory = STXChart.drawingTools[rep.name];
                    if (!Factory) {
                        if (STX.Drawing[rep.name]) {
                            Factory = STX.Drawing[rep.name];
                            STXChart.registerDrawingTool(rep.name, Factory);
                        }
                    }
                    if (Factory) {
                        var drawing = new Factory();
                        drawing.reconstruct(this, rep);
                        this.drawingObjects.push(drawing);
                    }
                }
            }
            ;
            STXChart.prototype.clearDrawings = function (cantUndo) {
                var before = STX.shallowClone(this.drawingObjects);
                this.abortDrawings();
                if (cantUndo) {
                    this.undoStamps = [];
                }
                else {
                    this.undoStamp(before, STX.shallowClone(this.drawingObjects));
                }
                this.changeOccurred((n82));
                this.createDataSet();
                this.draw();
            }
            ;
            STXChart.prototype.createDrawing = function (type, parameters) {
                var drawing = new STX.Drawing[type]();
                drawing.reconstruct(this, parameters);
                this.drawingObjects.push(drawing);
                this.draw();
                return drawing;
            }
            ;
            STXChart.prototype.removeDrawing = function (drawing) {
                for (var i = 0; t0l.w7(i, this.drawingObjects.length); i++) {
                    if (t0l.o7(this.drawingObjects[i], drawing)) {
                        this.drawingObjects.splice(i, 1);
                        this.changeOccurred("vector");
                        this.draw();
                        return;
                    }
                }
            }
            ;
            STXChart.prototype.dateFromTick = function (tick, chart, nativeDate) {
                if (!chart)chart = this.chart;
                var data_len = chart.dataSet.length, dt, iter, ctr = 0;
                if (t0l.M7(tick, 0)) {
                    iter = this.standardMarketIterator(chart.dataSet[0].DT);
                    while (t0l.u7(ctr, tick)) {
                        dt = iter.previous();
                        ctr -= 1;
                    }
                }
                else if (t0l.S7(tick, data_len)) {
                    iter = this.standardMarketIterator(chart.dataSet[t0l.b7(data_len, 1)].DT);
                    while (t0l.c7(data_len - 1 + ctr, tick)) {
                        dt = iter.next();
                        ctr += 1;
                    }
                }
                else {
                    dt = chart.dataSet[tick].DT;
                }
                if (nativeDate) {
                    return new Date(dt.getTime());
                }
                return STX.yyyymmddhhmm(dt);
            }
            ;
            STXChart.prototype.calculateYAxisMargins = function (yAxis) {
                yAxis.zoom = yAxis.initialMarginTop + yAxis.initialMarginBottom;
                yAxis.scroll = t0l.T9((yAxis.initialMarginTop - yAxis.initialMarginBottom), t0l.l52);
            }
            ;
            STXChart.prototype.home = function (params) {
                var Z7n = "_yaxi", M3y = "li";
                this.swipe.amplitude = 0;
                this.grabbingScreen = false;
                if (STXChart.insideChart)STX.unappendClassName(this.container, "stx-drag-chart");
                if (typeof params != "object") {
                    params = {maintainWhitespace: params}
                    ;
                }
                if (typeof params.maintainWhitespace == "undefined")params.maintainWhitespace = true;
                this.cancelTouchSingleClick = true;
                if (!this.chart.dataSet || !this.chart.dataSet.length) {
                    this.draw();
                    return;
                }
                this.micropixels = 0;
                var barsDisplayedOnScreen = Math.floor(t0l.W9(this.chart.width, this.layout.candleWidth));
                for (var chartName in this.charts) {
                    var chart = this.charts[chartName];
                    if (params.chart && t0l.a9(params.chart, chart))continue;
                    var homeScroll = Math.min(barsDisplayedOnScreen + 1, chart.dataSet.length);
                    if (this.chart.allowScrollPast)homeScroll = barsDisplayedOnScreen + 1;
                    var wsInTicks;
                    if (params.maintainWhitespace && t0l.P9(this.preferences.whitespace, 0)) {
                        wsInTicks = t0l.t9(this.preferences.whitespace, this.layout.candleWidth);
                        homeScroll -= wsInTicks;
                    }
                    if (t0l.R9(this.yaxisLabelStyle, "roundRectArrow") && !((t0l.y9(this.layout.chartType, (M3y + P5y + E9y)) || t0l.r9(this.layout.chartType, "colored_line") || t0l.O9(this.layout.chartType, "mountain") || t0l.I9(this.layout.chartType, "colored_mountain")) && this.extendLastTick)) {
                        var margin = 3, height = this.getCanvasFontSize((O9y + j2n + Z7n + D3y)) + t0l.d9(margin, 2), leftMargin = t0l.V9(height, 0.66);
                        wsInTicks = t0l.s9(leftMargin, this.layout.candleWidth);
                        if (t0l.g9(wsInTicks, 1))homeScroll -= wsInTicks;
                    }
                    homeScroll = Math.ceil(homeScroll);
                    if (params.animate) {
                        var self = this;
                        this.scrollTo(chart, homeScroll, function (self, chart, homeScroll) {
                            return function () {
                                self.calculateYAxisMargins(chart.panel.yAxis);
                                chart.scroll = homeScroll;
                                self.draw();
                            }
                                ;
                        }
                        (self, chart, homeScroll));
                    }
                    else {
                        chart.scroll = homeScroll;
                        this.calculateYAxisMargins(chart.panel.yAxis);
                    }
                }
                this.draw();
            }
            ;
            STXChart.prototype.tickFromDate = function (dt, chart, adj, forward) {
                if (!chart)chart = this.chart;
                if (!chart.dataSet || !chart.dataSet.length)return 0;
                if (!adj)adj = 0;
                if (!chart) {
                    chart = this.chart;
                }
                var target = t0l.j9(dt.constructor, Date) ? dt : STX.strToDateTime(dt);
                if (!STXChart.isDailyInterval(this.layout.interval))target.setMinutes(target.getMinutes() + adj);
                var ms = target.getTime(), total = chart.tickCache[ms];
                if (total || t0l.X9(total, 0)) {
                    return total;
                }
                var firstDate = chart.dataSet[0].DT, lastDate = chart.dataSet[t0l.z9(chart.dataSet.length, 1)].DT;
                if (t0l.A0(target, firstDate) && t0l.G0(target, lastDate)) {
                    for (var i = 0; t0l.H0(i, chart.dataSet.length); i++) {
                        var d = chart.dataSet[i].DT;
                        if (t0l.h0(d.getTime(), target.getTime())) {
                            chart.tickCache[ms] = i;
                            return i;
                        }
                        if (t0l.J0(d, target)) {
                            chart.tickCache[ms] = forward ? i : t0l.C0(i, 1);
                            return chart.tickCache[ms];
                        }
                    }
                }
                var intoThePast = t0l.B0(target, firstDate), start = intoThePast ? firstDate : lastDate, iter = this.standardMarketIterator(start), ticks = iter.futureTick({end: target}
                );
                total = intoThePast ? ticks * -1 : t0l.m0(chart.dataSet.length, 1, ticks);
                chart.tickCache[ms] = total;
                return total;
            }
            ;
            STXChart.XAxisLabel = function (hz, grid, text) {
                this.hz = hz;
                this.grid = grid;
                this.text = text;
            }
            ;
            STXChart.prototype.createXAxis = function (chart) {
                if (t0l.I0(chart.dataSegment.length, 0))return null;
                if (STXChart.hideDates())return null;
                var arguments$ = [chart], axisRepresentation = this.runPrepend("createXAxis", arguments$);
                if (axisRepresentation)return axisRepresentation;
                var interval = this.layout.interval;
                if (t0l.d0(chart.xAxis.axisType, "numeric")) {
                    return this.createNumericXAxis(chart);
                }
                axisRepresentation = this.createTickXAxisWithDates(chart);
                this.runAppend("createXAxis", arguments$);
                return axisRepresentation;
            }
            ;
            STXChart.prototype.drawXAxis = function (chart, axisRepresentation) {
                var i7y = "trok", arguments$ = [chart, axisRepresentation];
                if (this.runPrepend("drawXAxis", arguments$))return;
                if (!axisRepresentation)return;
                var priorBoundary = null, context = this.chart.context;
                this.canvasFont("stx_xaxis");
                context.textAlign = "center";
                context.textBaseline = "middle";
                var obj;
                for (var j = 0; t0l.V0(j, axisRepresentation.length); j++) {
                    obj = axisRepresentation[j];
                    var w = context.measureText(obj.text + "   ").width, w2 = Math.max(w, chart.xAxis.minimumLabelWidth);
                    obj.hz = Math.floor(obj.hz + this.micropixels) + 0.5;
                    obj.left = t0l.s0(obj.hz, (w2 / 2));
                    obj.right = obj.hz + (t0l.g0(w2, 2));
                    obj.unpaddedRight = obj.hz + (t0l.j0(w, 2));
                }
                var plotter = new STX.Plotter();
                plotter.newSeries("line", "stroke", this.canvasStyle("stx_grid"));
                plotter.newSeries("boundary", "stroke", this.canvasStyle("stx_grid_dark"));
                plotter.newSeries("border", (D3y + i7y + E9y), this.canvasStyle("stx_grid_border"));
                var bottom = t0l.X0(this.xAxisAsFooter, true) ? this.chart.canvasHeight : chart.panel.bottom, wPanel = this.whichPanel(t0l.z0(bottom, 1));
                if (!wPanel)return;
                var yAxis = wPanel.yAxis;
                this.adjustYAxisHeightOffset(wPanel, yAxis);
                var prevRight = -1, nextBoundaryLeft = Math.MAX_VALUE, drawBorders = chart.xAxis.displayBorder || t0l.A2(chart.xAxis.displayBorder, null);
                if (t0l.G2(this.axisBorders, true))drawBorders = true;
                if (t0l.a2(this.axisBorders, false))drawBorders = false;
                var b = drawBorders ? t0l.P2(yAxis.bottom, 0.5) : yAxis.bottom, middle = t0l.U2(bottom, this.xaxisHeight / 2);
                if (drawBorders)middle += 3;
                for (var nb = 0; t0l.D2(nb, axisRepresentation.length); nb++) {
                    if (t0l.F2(axisRepresentation[nb].grid, "boundary")) {
                        nextBoundaryLeft = axisRepresentation[nb].left;
                        break;
                    }
                }
                var prevHz = 0, count = 0;
                for (var i = 0; t0l.n2(i, axisRepresentation.length); i++) {
                    obj = axisRepresentation[i];
                    if (t0l.p2(i, nb)) {
                        for (nb++; t0l.o2(nb, axisRepresentation.length); nb++) {
                            if (t0l.M2(axisRepresentation[nb].grid, "boundary")) {
                                nextBoundaryLeft = axisRepresentation[nb].left;
                                break;
                            }
                        }
                        if (t0l.u2(nb, axisRepresentation.length)) {
                            nb = -1;
                            nextBoundaryLeft = Math.MAX_VALUE;
                        }
                        if (prevRight > -1) {
                            if (t0l.S2(obj.left, prevRight))continue;
                        }
                    }
                    else {
                        if (prevRight > -1) {
                            if (t0l.b2(obj.left, prevRight))continue;
                        }
                        if (t0l.l4(obj.right, nextBoundaryLeft))continue;
                    }
                    prevRight = obj.right;
                    if ((t0l.K4(Math.floor(obj.unpaddedRight), this.chart.right))) {
                        count++;
                        if (chart.xAxis.displayGridLines) {
                            plotter.moveTo(obj.grid, obj.hz, t0l.k4(this.xAxisAsFooter, true) ? 0 : yAxis.top);
                            plotter.lineTo(obj.grid, obj.hz, b);
                        }
                        if (drawBorders) {
                            plotter.moveTo("border", obj.hz, b + 0.5);
                            plotter.lineTo("border", obj.hz, b + 6);
                        }
                        prevHz = obj.hz;
                        this.canvasColor(t0l.L4(obj.grid, "boundary") ? "stx_xaxis_dark" : "stx_xaxis");
                        context.fillText(obj.text, obj.hz, middle);
                    }
                }
                if (drawBorders) {
                    var bb = Math.round(yAxis.bottom) + 0.5, wb = Math.round(chart.right) + 0.5;
                    plotter.moveTo("border", chart.left, bb);
                    plotter.lineTo((h9y + Q5y + K3y + F9y), wb, bb);
                }
                plotter.draw(context);
                context.textAlign = "left";
                this.runAppend("drawXAxis", arguments$);
            }
            ;
            STXChart.prototype.createNumericXAxis = function (chart) {
                axisRepresentation = [];
                chart.xaxis = [];
                for (var i = 0; t0l.e4(i, chart.maxTicks); i++) {
                    if (chart.dataSegment[i])break;
                    chart.xaxis.push(null);
                }
                for (var j = i; t0l.J4(j, chart.maxTicks); j++) {
                    if (!chart.dataSegment[i])break;
                }
                var filledScreenRatio = t0l.C4((j - i), chart.maxTicks), idealTickSizePixels = chart.xAxis.idealTickSizePixels ? chart.xAxis.idealTickSizePixels : chart.xAxis.autoComputedTickSizePixels, idealTicks = Math.round(t0l.Q4((this.chart.width * filledScreenRatio), idealTickSizePixels)), minMax = this.determineMinMax(chart.dataSegment, ["index"]), maxPoint = minMax[1], minPoint = minMax[0], range = t0l.F4(maxPoint, minPoint);

                function niceNum(range, round) {
                    var exponent, fraction, niceFraction;
                    exponent = Math.floor(Math.log10(range));
                    fraction = t0l.Y4(range, Math.pow(10, exponent));
                    if (round) {
                        if (t0l.N4(fraction, 1.5))niceFraction = 1; else if (t0l.w4(fraction, 3))niceFraction = 2; else if (t0l.o4(fraction, 7))niceFraction = 5; else niceFraction = 10;
                    }
                    else {
                        if (t0l.M4(fraction, 1))niceFraction = 1; else if (t0l.u4(fraction, 2))niceFraction = 2; else if (t0l.S4(fraction, 5))niceFraction = 5; else niceFraction = 10;
                    }
                    return t0l.b4(niceFraction, Math.pow(10, exponent));
                }

                var niceRange = niceNum(t0l.c4(maxPoint, minPoint), false), tickSpacing = niceNum(t0l.T6(range, (idealTicks - 1)), true), niceMin = t0l.W6(Math.floor(minPoint / tickSpacing), tickSpacing), niceMax = t0l.a6(Math.ceil(maxPoint / tickSpacing), tickSpacing), nextLabel = niceMin;
                if (t0l.P6(niceMin, minPoint))nextLabel = niceMin + tickSpacing;
                var hz;
                for (i; t0l.t6(i, chart.maxTicks); i++) {
                    var prices = chart.dataSegment[i];
                    if (prices) {
                        var obj = {index: prices.index, data: prices}
                            ;
                        chart.xaxis.push(obj);
                        if (t0l.R6(prices.index, nextLabel))continue;
                        if (t0l.y6(prices.index, nextLabel)) {
                            hz = chart.left + t0l.r6(i, this.layout.candleWidth) + this.micropixels;
                        }
                        else if (t0l.O6(prices.index, nextLabel)) {
                            hz = chart.left + t0l.I6(i, this.layout.candleWidth) - 3 + this.micropixels;
                        }
                        axisRepresentation.push(new STXChart.XAxisLabel(hz, "line", nextLabel));
                        nextLabel += tickSpacing;
                    }
                    else {
                        chart.xaxis.push(null);
                    }
                }
                return axisRepresentation;
            }
            ;
            STXChart.prototype.createTickXAxisWithDates = function (chart) {
                var s2y = " < ", F2y = "rT", k4n = "Pe", n0n = "rr", F12 = "at", y2n = "thD", n0y = "Axis";
                if (!chart)chart = this.chart;
                chart.xaxis = [];
                if (!this.timeIntervalMap) {
                    this.timePossibilities = [STX.MILLISECOND, STX.SECOND, STX.MINUTE, STX.HOUR, STX.DAY, STX.MONTH, STX.YEAR];
                    this.timeIntervalMap = {}
                    ;
                    this.timeIntervalMap[STX.MILLISECOND] = {
                        arr: [1, 2, 5, 10, 20, 50, 100, 250, 500],
                        minTimeUnit: 0,
                        maxTimeUnit: 1000
                    }
                    ;
                    this.timeIntervalMap[STX.SECOND] = {arr: [1, 2, 5, 10, 15, 30], minTimeUnit: 0, maxTimeUnit: 60}
                    ;
                    this.timeIntervalMap[STX.MINUTE] = {arr: [1, 2, 5, 10, 15, 30], minTimeUnit: 0, maxTimeUnit: 60}
                    ;
                    this.timeIntervalMap[STX.HOUR] = {arr: [1, 2, 3, 4, 6, 12], minTimeUnit: 0, maxTimeUnit: 24}
                    ;
                    this.timeIntervalMap[STX.DAY] = {arr: [1, 2, 7, 14], minTimeUnit: 1, maxTimeUnit: 32}
                    ;
                    this.timeIntervalMap[STX.MONTH] = {arr: [1, 2, 3, 6], minTimeUnit: 1, maxTimeUnit: 13}
                    ;
                    this.timeIntervalMap[STX.YEAR] = {arr: [1, 2, 3, 5], minTimeUnit: 1, maxTimeUnit: 20000000}
                    ;
                    this.timeIntervalMap[STX.DECADE] = {arr: [10], minTimeUnit: 0, maxTimeUnit: 2000000}
                    ;
                }
                var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], periodicity = this.layout.periodicity, interval = this.layout.interval, idealTickSizePixels = chart.xAxis.idealTickSizePixels ? chart.xAxis.idealTickSizePixels : chart.xAxis.autoComputedTickSizePixels, idealTicks = t0l.d6(this.chart.width, idealTickSizePixels);
                for (var x = 0; t0l.V6(x, chart.dataSegment.length); x++)if (chart.dataSegment[x])break;
                if (t0l.s6(x, chart.dataSegment.length))return [];
                var timeRange = 0;
                if (t0l.g6(interval, parseInt(interval, 10))) {
                    timeRange = t0l.j6(interval, periodicity, 60000, chart.dataSegment.length);
                }
                else {
                    timeRange = t0l.Z6(chart.dataSegment[chart.dataSegment.length - 1].DT.getTime(), chart.dataSegment[x].DT.getTime());
                }
                var self = this;

                function millisecondsPerTick() {
                    var iter_parms = {
                            'begin': new Date(),
                            'interval': "day",
                            'periodicity': 1,
                            'inZone': this.dataZone,
                            'outZone': this.dataZone
                        }
                        , iter = chart.market.newIterator(iter_parms);
                    iter.next();
                    var dt1 = iter.previous();
                    iter = self.standardMarketIterator(dt1, null, chart);
                    var dt2 = iter.next();
                    return t0l.l3(dt2.getTime(), dt1.getTime());
                }

                if (t0l.K3(timeRange, 0)) {
                    timeRange = t0l.k3(millisecondsPerTick(), chart.maxTicks);
                }
                else {
                    timeRange = t0l.L3((timeRange / chart.dataSegment.length), chart.maxTicks);
                }
                var msPerTick = t0l.e3(timeRange, idealTicks), i;
                for (i = 0; t0l.J3(i, this.timePossibilities.length); i++) {
                    if (t0l.C3(this.timePossibilities[i], msPerTick))break;
                }
                if (t0l.Q3(i, 0)) {
                    console.log((S9y + K3y + E9y + B9y + t0l.r6y + E9y + X52 + g82 + t0l.P1y + X4y + n0y + k6y + q1y + y2n + F12 + g0y + p9n + E9n + D3y + D3y + H0y + W5y + Q5y + P5y + a0y + E9y + n0n + d9y + C7n + v5y + D3y + k4n + F2y + q1y + S9y + t0l.P1y + s2y + R5y));
                }
                if (t0l.F3(i, this.timePossibilities.length)) {
                    i--;
                }
                else if (t0l.Y3(i, 0)) {
                    var prevUnit = this.timePossibilities[t0l.N3(i, 1)], prevMap = this.timeIntervalMap[prevUnit], prevMultiplier = prevMap.arr[t0l.w3(prevMap.arr.length, 1)];
                    if (t0l.o3(msPerTick - (prevUnit * prevMultiplier), this.timePossibilities[i] - msPerTick))i--;
                }
                var timeUnit = this.timePossibilities[i];
                if (chart.xAxis.timeUnit)timeUnit = chart.xAxis.timeUnit;
                chart.xAxis.activeTimeUnit = timeUnit;
                var timeInterval = STX.clone(this.timeIntervalMap[timeUnit]);
                for (i = 0; t0l.M3(i, timeInterval.arr.length); i++) {
                    if (t0l.u3(timeInterval.arr[i] * timeUnit, msPerTick))break;
                }
                if (t0l.S3(i, timeInterval.arr.length)) {
                    i--;
                }
                else {
                    if (t0l.b3(msPerTick - timeInterval.arr[i - 1] * timeUnit, timeInterval.arr[i] * timeUnit - msPerTick))i--;
                }
                var timeUnitMultiplier = timeInterval.arr[i];
                if (chart.xAxis.timeUnitMultiplier)timeUnitMultiplier = chart.xAxis.timeUnitMultiplier;
                var axisRepresentation = [];
                for (i = 0; t0l.c3(i, chart.maxTicks); i++) {
                    if (chart.dataSegment[i])break;
                }
                if (t0l.T5(i, 0) && t0l.W5(i, chart.maxTicks)) {
                    var iter1 = this.standardMarketIterator(chart.dataSegment[i].DT, chart.xAxis.adjustTimeZone ? this.displayZone : this.dataZone);
                    for (var j = i; t0l.a5(j, 0); j--) {
                        var dt = iter1.previous();
                        chart.xaxis.unshift({DT: dt, Date: STX.yyyymmddhhmmssmmm(dt)}
                        );
                    }
                }
                var dtShifted = 0, nextTimeUnit = timeInterval.minTimeUnit, previousTimeUnitLarge = -1, firstTick = true, candleWidth = this.layout.candleWidth, iter = this.standardMarketIterator(chart.dataSegment[t0l.P5(chart.dataSegment.length, 1)].DT, chart.xAxis.adjustTimeZone ? this.displayZone : this.dataZone);
                for (i; t0l.t5(i, chart.maxTicks); i++) {
                    if (t0l.R5(i, chart.dataSegment.length)) {
                        var prices = chart.dataSegment[i];
                        if (prices.displayDate && chart.xAxis.adjustTimeZone) {
                            dtShifted = prices.displayDate;
                        }
                        else {
                            dtShifted = prices.DT;
                        }
                        if (i && prices.leftOffset)candleWidth = t0l.y5((prices.leftOffset - prices.candleWidth / 2), i);
                    }
                    else {
                        if (!chart.xAxis.futureTicks)break;
                        dtShifted = iter.next();
                    }
                    var obj = {DT: dtShifted, Date: STX.yyyymmddhhmmssmmm(dtShifted)}
                        ;
                    if (t0l.r5(i, chart.dataSegment.length))obj.data = chart.dataSegment[i]; else obj.data = null;
                    chart.xaxis.push(obj);
                    var currentTimeUnit, currentTimeUnitLarge;
                    if (t0l.O5(timeUnit, STX.MILLISECOND)) {
                        currentTimeUnit = dtShifted.getMilliseconds();
                        currentTimeUnitLarge = dtShifted.getSeconds();
                    }
                    else if (t0l.I5(timeUnit, STX.SECOND)) {
                        currentTimeUnit = dtShifted.getSeconds();
                        currentTimeUnitLarge = dtShifted.getMinutes();
                    }
                    else if (t0l.d5(timeUnit, STX.MINUTE)) {
                        currentTimeUnit = dtShifted.getMinutes();
                        currentTimeUnitLarge = dtShifted.getHours();
                    }
                    else if (t0l.V5(timeUnit, STX.HOUR)) {
                        currentTimeUnit = dtShifted.getHours() + t0l.s5(dtShifted.getMinutes(), 60);
                        currentTimeUnitLarge = dtShifted.getDate();
                    }
                    else if (t0l.g5(timeUnit, STX.DAY)) {
                        currentTimeUnit = dtShifted.getDate();
                        currentTimeUnitLarge = dtShifted.getMonth() + 1;
                    }
                    else if (t0l.j5(timeUnit, STX.MONTH)) {
                        currentTimeUnit = dtShifted.getMonth() + 1;
                        currentTimeUnitLarge = dtShifted.getFullYear();
                    }
                    else if (t0l.X5(timeUnit, STX.YEAR)) {
                        currentTimeUnit = dtShifted.getFullYear();
                        currentTimeUnitLarge = dtShifted.getFullYear() + 1000;
                    }
                    else {
                        currentTimeUnit = dtShifted.getFullYear();
                        currentTimeUnitLarge = 0;
                    }
                    var text = null, hz;
                    if (t0l.z5(previousTimeUnitLarge, currentTimeUnitLarge)) {
                        if (t0l.A1(currentTimeUnit, nextTimeUnit)) {
                            nextTimeUnit = timeInterval.minTimeUnit;
                        }
                        hz = chart.left + (t0l.G1(i, candleWidth)) - 1;
                        text = null;
                        if (t0l.a1(timeUnit, STX.HOUR) || (t0l.P1(timeUnit, STX.MINUTE) && t0l.U1(previousTimeUnitLarge, currentTimeUnitLarge))) {
                            if (chart.xAxis.formatter) {
                                text = chart.xAxis.formatter(dtShifted, "boundary", STX.DAY, 1);
                            }
                            else {
                                if (this.internationalizer) {
                                    text = this.internationalizer.monthDay.format(dtShifted);
                                }
                                else {
                                    text = (dtShifted.getMonth() + 1) + "/" + dtShifted.getDate();
                                }
                            }
                        }
                        else if (t0l.D1(timeUnit, STX.DAY)) {
                            if (t0l.r1(previousTimeUnitLarge, currentTimeUnitLarge)) {
                                text = dtShifted.getFullYear();
                            }
                            else {
                                text = STX.monthAsDisplay(dtShifted.getMonth(), false, this);
                            }
                        }
                        else if (t0l.Y1(timeUnit, STX.MONTH)) {
                            text = dtShifted.getFullYear();
                        }
                        if (text && previousTimeUnitLarge != -1) {
                            axisRepresentation.push(new STXChart.XAxisLabel(hz, "boundary", text));
                        }
                    }
                    if (t0l.N1(currentTimeUnit, nextTimeUnit)) {
                        if (t0l.V1(nextTimeUnit, timeInterval.minTimeUnit)) {
                            if (t0l.s1(currentTimeUnitLarge, previousTimeUnitLarge))continue;
                        }
                        var labelDate = new Date(dtShifted);
                        hz = chart.left + t0l.g1(((2 * i + 1) * candleWidth), 2) - 1;
                        var boundaryTimeUnit = t0l.j1(Math.floor(currentTimeUnit / timeUnitMultiplier), timeUnitMultiplier);
                        if (t0l.X1(boundaryTimeUnit, currentTimeUnit)) {
                            if (t0l.z1(this.layout.interval, "week"))boundaryTimeUnit = currentTimeUnit; else hz -= t0l.T8(candleWidth, 4);
                        }
                        if (t0l.W8(timeUnit, STX.MILLISECOND)) {
                            labelDate.setMilliseconds(boundaryTimeUnit);
                        }
                        else if (t0l.a8(timeUnit, STX.SECOND)) {
                            labelDate.setMilliseconds(0);
                            labelDate.setSeconds(boundaryTimeUnit);
                        }
                        else if (t0l.P8(timeUnit, STX.MINUTE)) {
                            labelDate.setMilliseconds(0);
                            labelDate.setSeconds(0);
                            labelDate.setMinutes(boundaryTimeUnit);
                        }
                        else if (t0l.t8(timeUnit, STX.HOUR)) {
                            labelDate.setMilliseconds(0);
                            labelDate.setSeconds(0);
                            labelDate.setMinutes(0);
                            labelDate.setHours(boundaryTimeUnit);
                        }
                        else if (t0l.R8(timeUnit, STX.DAY)) {
                            labelDate.setDate(Math.max(1, boundaryTimeUnit));
                        }
                        else if (t0l.y8(timeUnit, STX.MONTH)) {
                            labelDate.setDate(1);
                            labelDate.setMonth(t0l.r8(boundaryTimeUnit, 1));
                        }
                        else if (t0l.O8(timeUnit, STX.YEAR)) {
                            labelDate.setDate(1);
                            labelDate.setMonth(0);
                        }
                        else {
                            labelDate.setDate(1);
                            labelDate.setMonth(0);
                        }
                        nextTimeUnit = boundaryTimeUnit + timeUnitMultiplier;
                        if (t0l.I8(timeUnit, STX.DAY))timeInterval.maxTimeUnit = daysInMonth[labelDate.getMonth()] + 1;
                        if (t0l.d8(nextTimeUnit, timeInterval.maxTimeUnit))nextTimeUnit = timeInterval.minTimeUnit;
                        previousTimeUnitLarge = currentTimeUnitLarge;
                        if (firstTick && t0l.V8(boundaryTimeUnit, currentTimeUnit))continue;
                        if (chart.xAxis.formatter) {
                            text = chart.xAxis.formatter(labelDate, "line", timeUnit, timeUnitMultiplier);
                        }
                        else {
                            if (t0l.s8(timeUnit, STX.DAY)) {
                                text = labelDate.getDate();
                            }
                            else if (t0l.g8(timeUnit, STX.MONTH)) {
                                text = STX.monthAsDisplay(dtShifted.getMonth(), false, this);
                            }
                            else if (t0l.j8(timeUnit, STX.YEAR) || t0l.X8(timeUnit, STX.DECADE)) {
                                text = labelDate.getFullYear();
                            }
                            else {
                                text = STX.timeAsDisplay(labelDate, this, timeUnit);
                            }
                        }
                        axisRepresentation.push(new STXChart.XAxisLabel(hz, "line", text));
                    }
                    firstTick = false;
                }
                return axisRepresentation;
            }
            ;
            var cached = t0l.G52, notcached = t0l.G52;
            STXChart.prototype.createYAxis = function (panel, parameters) {
                var t6y = "create", c6y = "xi", p0y = "ate";
                if (this.runPrepend((S9y + R1y + p0y + f2y + E9n + c6y + D3y), arguments))return;
                var chart = panel.chart, isAChart = (t0l.z8(panel.name, chart.name));
                if (!parameters)parameters = {}
                ;
                parameters.noChange = false;
                var yAxis = parameters.yAxis ? parameters.yAxis : panel.yAxis;
                if (STXChart.enableCaching && t0l.A7f(yAxis.high, panel.cacheHigh) && t0l.G7f(yAxis.low, panel.cacheLow)) {
                    var leftTick = t0l.H7f(chart.dataSet.length, chart.scroll), rightTick = leftTick + chart.maxTicks;
                    panel.cacheLeft = Math.min(panel.cacheLeft, leftTick);
                    panel.cacheRight = Math.max(panel.cacheRight, rightTick);
                    panel.cacheLeft = leftTick;
                    panel.cacheRight = rightTick;
                    parameters.noChange = true;
                    cached++;
                }
                else {
                    panel.cacheLeft = 1000000;
                    panel.cacheRight = -1;
                    panel.cacheHigh = yAxis.high;
                    panel.cacheLow = yAxis.low;
                    notcached++;
                }
                var idealX = chart.xAxis.idealTickSizePixels ? chart.xAxis.idealTickSizePixels : chart.xAxis.autoComputedTickSizePixels;
                if (yAxis.goldenRatioYAxis) {
                    if (t0l.h7f(yAxis.idealTickSizePixels, idealX / 1.618))parameters.noChange = false;
                }
                if (!parameters.noChange) {
                    this.adjustYAxisHeightOffset(panel, yAxis);
                    var height = yAxis.height = t0l.x7f(yAxis.bottom, yAxis.top), pricePerPix = t0l.U7f((yAxis.high - yAxis.low), (height - yAxis.zoom));
                    if (parameters.ground && !yAxis.semiLog) {
                        yAxis.high = yAxis.high + t0l.D7f(yAxis.zoom, pricePerPix);
                    }
                    else {
                        yAxis.high = yAxis.high + t0l.B7f((yAxis.zoom / 2), pricePerPix) + t0l.m7f(yAxis.scroll, pricePerPix);
                        var unadjustedLow = yAxis.low;
                        yAxis.low = t0l.n7f(yAxis.low, (yAxis.zoom / 2) * pricePerPix, yAxis.scroll * pricePerPix);
                        if (yAxis.semiLog && t0l.d7f(yAxis.low, 0))yAxis.low = unadjustedLow;
                    }
                    if (yAxis.min || t0l.V7f(yAxis.min, 0))yAxis.low = yAxis.min;
                    if (yAxis.max || t0l.s7f(yAxis.max, 0))yAxis.high = yAxis.max;
                    yAxis.shadow = t0l.g7f(yAxis.high, yAxis.low);
                    if (yAxis.semiLog && (!this.activeDrawing || t0l.j7f(this.activeDrawing.name, "projection"))) {
                        yAxis.logHigh = t0l.X7f(Math.log(yAxis.high), Math.LN10);
                        var semilow = Math.max(yAxis.low, 0.000000001);
                        yAxis.logLow = t0l.z7f(Math.log(semilow), Math.LN10);
                        if (t0l.A9f(yAxis.low, 0))yAxis.logLow = 0;
                        yAxis.logShadow = t0l.G9f(yAxis.logHigh, yAxis.logLow);
                    }
                    var fontHeight;
                    if (yAxis.goldenRatioYAxis && isAChart) {
                        yAxis.idealTickSizePixels = t0l.H9f(idealX, 1.618);
                        if (t0l.h9f(yAxis.idealTickSizePixels, 0)) {
                            fontHeight = this.getCanvasFontSize("stx_yaxis");
                            yAxis.idealTickSizePixels = t0l.x9f(fontHeight, 5);
                        }
                    }
                    else {
                        if (!yAxis.idealTickSizePixels) {
                            fontHeight = this.getCanvasFontSize("stx_yaxis");
                            if (isAChart) {
                                yAxis.idealTickSizePixels = t0l.U9f(fontHeight, 5);
                            }
                            else {
                                yAxis.idealTickSizePixels = t0l.D9f(fontHeight, 2);
                            }
                        }
                    }
                    var idealTicks = Math.round(t0l.B9f(height, yAxis.idealTickSizePixels)), shadow = parameters.range ? t0l.m9f(parameters.range[1], parameters.range[0]) : yAxis.shadow;
                    yAxis.priceTick = Math.floor(t0l.n9f(shadow, idealTicks));
                    var n = 1;
                    for (var zz = 0; t0l.p9f(zz, 10); zz++) {
                        if (t0l.v9f(yAxis.priceTick, 0))break;
                        n *= 10;
                        yAxis.priceTick = t0l.f9f(Math.floor(shadow / idealTicks * n), n);
                    }
                    if (t0l.i9f(zz, 10))yAxis.priceTick = 0.00000001;
                    yAxis.priceTick = t0l.E9f(Math.round(shadow / idealTicks * n), n);
                    var verticalTicks = Math.round(t0l.q9f(shadow, yAxis.priceTick));
                    if (parameters.range && t0l.Z9f(verticalTicks, shadow) && !yAxis.noEvenDivisorTicks) {
                        while (t0l.l0f(verticalTicks, 1)) {
                            if (t0l.K0f(shadow % verticalTicks, 0))break;
                            verticalTicks--;
                        }
                        yAxis.priceTick = t0l.k0f(shadow, verticalTicks);
                    }
                    if (yAxis.minimumPriceTick) {
                        var yAxisPriceTick = yAxis.minimumPriceTick;
                        fontHeight = this.getCanvasFontSize("stx_yaxis");
                        for (var i = 0; t0l.L0f(i, 100); i++) {
                            var numberOfTicks = t0l.e0f(shadow, yAxisPriceTick);
                            if (t0l.J0f(height / numberOfTicks, fontHeight * 2))yAxisPriceTick += yAxis.minimumPriceTick; else break;
                        }
                        if (t0l.C0f(i, 100))yAxis.priceTick = yAxisPriceTick;
                    }
                    yAxis.multiplier = t0l.Q0f(yAxis.height, yAxis.shadow);
                }
                if (!this.activeDrawing || t0l.F0f(this.activeDrawing.name, "projection")) {
                    yAxis.high = this.valueFromPixel(panel.top, panel, yAxis);
                    if (yAxis.semiLog) {
                        yAxis.logHigh = t0l.Y0f(Math.log(yAxis.high), Math.LN10);
                        var semilow2 = Math.max(yAxis.low, 0.00000000001);
                        yAxis.logLow = t0l.N0f(Math.log(semilow2), Math.LN10);
                        yAxis.logShadow = t0l.w0f(yAxis.logHigh, yAxis.logLow);
                    }
                    yAxis.shadow = t0l.o0f(yAxis.high, yAxis.low);
                }
                yAxis.multiplier = t0l.M0f(yAxis.height, yAxis.shadow);
                if (t0l.u0f(yAxis.multiplier, Infinity))yAxis.multiplier = 0;
                if (!yAxis.decimalPlaces && t0l.S0f(yAxis.decimalPlaces, 0)) {
                    if (isAChart) {
                        var labelDecimalPlaces = 0;
                        for (var j = 0; t0l.b0f(j, panel.yAxis.shadowBreaks.length); j++) {
                            var brk = panel.yAxis.shadowBreaks[j];
                            if (t0l.c0f(panel.yAxis.shadow, brk[0]))labelDecimalPlaces = brk[1];
                        }
                        yAxis.printDecimalPlaces = labelDecimalPlaces;
                    }
                    else yAxis.printDecimalPlaces = null;
                }
                else {
                    yAxis.printDecimalPlaces = yAxis.decimalPlaces;
                }
                this.runAppend((t6y + q2n + D3y), arguments);
            }
            ;
            STXChart.prototype.adjustYAxisHeightOffset = function (panel, yAxis) {
                yAxis.bottomOffset = t0l.G52;
                if (t0l.T2f(this.xAxisAsFooter, x1y) && t0l.W2f(panel.bottom >>> t0l.G52, this.chart.canvasHeight)) {
                    yAxis.bottomOffset = this.xaxisHeight;
                }
                else if (t0l.a2f(this.xAxisAsFooter, x1y) && t0l.P2f(panel.name, (g12 + K3y + t0l.r6y))) {
                    yAxis.bottomOffset = this.xaxisHeight;
                }
                yAxis.bottom = t0l.t2f(panel.bottom, yAxis.bottomOffset);
            }
            ;
            STXChart.prototype.drawYAxis = function (panel, parameters) {
                var P12 = "id", z7n = "gr", D0y = "tx_", q5y = "'";
                if (!parameters)parameters = {}
                ;
                var yAxis = parameters.yAxis ? parameters.yAxis : panel.yAxis;
                if (yAxis.fractional) {
                    if (!yAxis.originalPriceFormatter)yAxis.originalPriceFormatter = {func: yAxis.priceFormatter}
                    ;
                    if (!yAxis.fractional.resolution)yAxis.fractional.resolution = yAxis.minimumPrice;
                    if (!yAxis.fractional.formatter)yAxis.fractional.formatter = q5y;
                    if (!yAxis.priceFormatter)yAxis.priceFormatter = function (stx, panel, price) {
                        var Z1y = (86.10E1 < (5., 0x16B) ? (62., 0xC3) : (71, 115) >= (89., 57) ? (104, "+") : (10.44E2, 0x241)), whole = Math.floor(t0l.R2f(Math.round(price / yAxis.fractional.resolution), yAxis.fractional.resolution)), frac = Math.round(t0l.y2f((price - whole), yAxis.fractional.resolution)), _nds = Math.floor(frac);
                        return whole + yAxis.fractional.formatter + (t0l.r2f(_nds, A9n) ? k5y : R6y) + _nds + (t0l.O2f(frac - _nds, k2y) ? Z1y : R6y);
                    }
                    ;
                }
                else {
                    if (yAxis.originalPriceFormatter) {
                        yAxis.priceFormatter = yAxis.originalPriceFormatter.func;
                        yAxis.originalPriceFormatter = t0l.a1y;
                    }
                }
                if (yAxis.pretty)return this.drawYAxisPretty(panel, parameters);
                if (this.runPrepend(I2y, arguments))return;
                if (!parameters.noDraw && !yAxis.noDraw) {
                    if (!yAxis.yAxisPlotter || !parameters.noChange) {
                        var chart = panel.chart, isAChart = (t0l.I2f(panel.name, chart.name) && t0l.d2f(yAxis, panel.yAxis));
                        if (!yAxis.priceTick)return;
                        var shadow = yAxis.shadow;
                        if (parameters.range) {
                            shadow = t0l.V2f(parameters.range[t0l.T52], parameters.range[t0l.G52]);
                        }
                        var verticalTicks = t0l.s2f(shadow, yAxis.priceTick);
                        verticalTicks = Math.round(verticalTicks);
                        var logStart, logPriceTick;
                        if (yAxis.semiLog) {
                            logStart = t0l.g2f(Math.log(this.valueFromPixel(yAxis.bottom, panel)), Math.LN10);
                            logPriceTick = t0l.j2f((yAxis.logHigh - yAxis.logLow), verticalTicks);
                        }
                        var textStyle = yAxis.textStyle ? yAxis.textStyle : J12;
                        yAxis.yAxisPlotter = new STX.Plotter();
                        yAxis.yAxisPlotter.newSeries(w7n, D82, this.canvasStyle((D3y + D0y + z7n + P12)));
                        yAxis.yAxisPlotter.newSeries(y6y, (M7y), this.colorOrStyle(textStyle));
                        yAxis.yAxisPlotter.newSeries(B4n, D82, this.canvasStyle(N82));
                        var priceOffset = t0l.G52, high = parameters.range ? parameters.range[t0l.T52] : yAxis.high, low = parameters.range ? parameters.range[t0l.G52] : yAxis.low, drawBorders = (t0l.X2f(yAxis.displayBorder, t0l.a1y) ? chart.panel.yAxis.displayBorder : yAxis.displayBorder);
                        if (t0l.z2f(this.axisBorders, P0n))drawBorders = P0n;
                        if (t0l.A4f(this.axisBorders, x1y))drawBorders = x1y;
                        var edgeOfAxis, position = (t0l.G4f(yAxis.position, t0l.a1y) ? chart.panel.yAxis.position : yAxis.position);
                        if (t0l.H4f(position, U7n)) {
                            edgeOfAxis = yAxis.left + yAxis.width;
                        }
                        else {
                            edgeOfAxis = yAxis.left;
                        }
                        var borderEdge = Math.round(edgeOfAxis) + k2y, tickWidth = drawBorders ? t0l.z32 : t0l.G52;
                        if (t0l.h4f(position, (t0l.n5y + M2y)))tickWidth = drawBorders ? -t0l.z32 : t0l.G52;
                        if (isAChart)if (t0l.x4f(yAxis.shadow, t0l.T52)) {
                            priceOffset = t0l.U4f(((parseInt(low / yAxis.priceTick, A9n) + t0l.T52) * yAxis.priceTick), low);
                        }
                        else {
                            priceOffset = t0l.D4f(yAxis.priceTick, Math.round((low % yAxis.priceTick) * panel.chart.roundit) / panel.chart.roundit);
                        }
                        else priceOffset = t0l.B4f(high, yAxis.priceTick);
                        var fontHeight = this.getCanvasFontSize(J12);
                        for (var i = t0l.G52; t0l.m4f(i, verticalTicks); i++) {
                            var price;
                            if (yAxis.semiLog) {
                                var logPrice = logStart + (t0l.n4f(i, logPriceTick));
                                price = Math.pow(A9n, logPrice);
                            }
                            else {
                                if (isAChart)price = low + t0l.p4f(i, yAxis.priceTick) + priceOffset; else price = t0l.v4f(high, (i * yAxis.priceTick), priceOffset);
                            }
                            var y = this.pixelFromPrice(price, panel, yAxis), y2 = Math.round(y) + k2y;
                            if (t0l.s4f((y2 + fontHeight / t0l.l52), panel.bottom))continue;
                            if (t0l.g4f((y2 - fontHeight / t0l.l52), panel.top))continue;
                            if (yAxis.displayGridLines) {
                                yAxis.yAxisPlotter.moveTo("grid", panel.left, y2);
                                yAxis.yAxisPlotter.lineTo("grid", panel.right, y2);
                            }
                            if (drawBorders) {
                                yAxis.yAxisPlotter.moveTo("border", t0l.j4f(borderEdge, 0.5), y2);
                                yAxis.yAxisPlotter.lineTo("border", borderEdge + tickWidth, y2);
                            }
                            if (yAxis.priceFormatter) {
                                price = yAxis.priceFormatter(this, panel, price);
                            }
                            else {
                                price = this.formatYAxisPrice(price, panel, t0l.a1y, yAxis);
                            }
                            var backgroundColor = yAxis.textBackground ? this.containerColor : t0l.a1y, textXPosition = edgeOfAxis + tickWidth + t0l.z32;
                            if (t0l.X4f(position, U7n)) {
                                textXPosition = yAxis.left + t0l.z32;
                                if (yAxis.justifyRight)textXPosition = yAxis.left + yAxis.width + tickWidth - 3;
                            }
                            else {
                                if (yAxis.justifyRight)textXPosition = edgeOfAxis + yAxis.width;
                            }
                            yAxis.yAxisPlotter.addText(y6y, price, textXPosition, y2, backgroundColor, t0l.a1y, fontHeight);
                        }
                        if (drawBorders) {
                            var b = Math.round(yAxis.bottom) + k2y;
                            yAxis.yAxisPlotter.moveTo("border", borderEdge, yAxis.top);
                            yAxis.yAxisPlotter.lineTo("border", borderEdge, b);
                            yAxis.yAxisPlotter.draw(this.chart.context, B4n);
                        }
                    }
                    this.plotYAxisGrid(panel);
                }
                this.runAppend(I2y, arguments);
            }
            ;
            STXChart.prototype.drawYAxisPretty = function (panel, parameters) {
                var h1y = "00", w0y = "ac", N2n = "ro", R7y = "ert", Q9y = "ss", W1y = "AxisPre", L7y = "aw", S2y = "_g";
                if (this.runPrepend("drawYAxis", arguments))return;
                if (!parameters)parameters = {}
                ;
                var yAxis = parameters.yAxis ? parameters.yAxis : panel.yAxis;
                if (!parameters.noDraw && !yAxis.noDraw) {
                    if (!yAxis.yAxisPlotter || !parameters.noChange) {
                        var chart = panel.chart, isAChart = (t0l.z4f(panel.name, chart.name) && t0l.A6f(yAxis, panel.yAxis));
                        if (!yAxis.priceTick)return;
                        if (isNaN(yAxis.high) || isNaN(yAxis.low))return;
                        var shadow = yAxis.shadow;
                        if (parameters.range) {
                            shadow = t0l.G6f(parameters.range[1], parameters.range[0]);
                        }
                        var verticalTicks = t0l.H6f(yAxis.height, yAxis.idealTickSizePixels);
                        verticalTicks = Math.round(verticalTicks);
                        var textStyle = yAxis.textStyle ? yAxis.textStyle : "stx_yaxis";
                        yAxis.yAxisPlotter = new STX.Plotter();
                        yAxis.yAxisPlotter.newSeries("grid", "stroke", this.canvasStyle("stx_grid"));
                        yAxis.yAxisPlotter.newSeries("text", "fill", this.colorOrStyle(textStyle));
                        yAxis.yAxisPlotter.newSeries("border", "stroke", this.canvasStyle((O9y + j2n + S2y + x5y + n9y + o4y + Q5y + K3y + F9y)));
                        var priceOffset = 0, high = parameters.range ? parameters.range[1] : yAxis.high, low = parameters.range ? parameters.range[0] : yAxis.low, drawBorders = (t0l.h6f(yAxis.displayBorder, null) ? chart.panel.yAxis.displayBorder : yAxis.displayBorder);
                        if (t0l.x6f(this.axisBorders, false))drawBorders = false;
                        if (t0l.U6f(this.axisBorders, true))drawBorders = true;
                        var edgeOfAxis, position = (t0l.D6f(yAxis.position, null) ? chart.panel.yAxis.position : yAxis.position);
                        if (t0l.B6f(position, "left")) {
                            edgeOfAxis = yAxis.left + yAxis.width;
                        }
                        else {
                            edgeOfAxis = yAxis.left;
                        }
                        var borderEdge = Math.round(edgeOfAxis) + 0.5, tickWidth = drawBorders ? 3 : 0;
                        if (t0l.m6f(position, "left"))tickWidth = drawBorders ? -3 : 0;
                        var fontHeight = this.getCanvasFontSize("stx_yaxis"), increments = yAxis.increments, l = increments.length, p = 0, n = 1, inc = 0, closest = 0, pow = 0, diff = Number.MAX_VALUE;
                        for (var z = 0; t0l.n6f(z, 100); z++) {
                            inc = t0l.p6f(increments[p], Math.pow(10, pow));
                            n = Math.floor(t0l.v6f(shadow, inc));
                            var newDiff = Math.abs(t0l.f6f(verticalTicks, n));
                            if (t0l.i6f(newDiff, diff)) {
                                break;
                            }
                            else {
                                diff = newDiff;
                            }
                            if (t0l.E6f(n, verticalTicks)) {
                                closest = inc;
                                break;
                            }
                            else if (t0l.q6f(n, verticalTicks)) {
                                p++;
                                if (t0l.Z6f(p, l)) {
                                    p = 0;
                                    pow++;
                                }
                            }
                            else {
                                p--;
                                if (t0l.l3f(p, 0)) {
                                    p = t0l.K3f(l, 1);
                                    pow--;
                                }
                            }
                            closest = inc;
                        }
                        var lowLabel = t0l.k3f(Math.ceil(low / closest), closest), lowPixelSize = t0l.L3f(yAxis.bottom, this.pixelFromPrice(lowLabel, panel, yAxis)), closestInc = 0;
                        if (t0l.e3f(lowPixelSize, yAxis.idealTickSizePixels) && yAxis.semiLog && yAxis.prettySemiLog) {
                            var divisor;
                            for (divisor = Math.ceil(low); t0l.J3f(divisor, lowLabel) && t0l.C3f(lowLabel % divisor, 0); ++divisor);
                            if (t0l.Q3f(divisor, lowLabel)) {
                                if (t0l.F3f(lowLabel, closest)) {
                                    closest = divisor;
                                    closestInc = divisor;
                                }
                                lowLabel = divisor;
                            }
                        }
                        var i = 0;
                        for (var zz = 0; t0l.Y3f(zz, 100); zz++) {
                            var price = lowLabel + t0l.N3f(i, closest);
                            if (t0l.w3f(price, high))break;
                            closest += closestInc;
                            i++;
                            var y = this.pixelFromPrice(price, panel, yAxis), y2 = Math.round(y) + 0.5;
                            if (t0l.o3f((y2 + fontHeight / 2), panel.bottom))continue;
                            if (t0l.M3f((y2 - fontHeight / 2), panel.top))continue;
                            if (yAxis.displayGridLines) {
                                yAxis.yAxisPlotter.moveTo("grid", panel.left, y2);
                                yAxis.yAxisPlotter.lineTo((R8y + K3y + q1y + n9y), panel.right, y2);
                            }
                            if (drawBorders) {
                                yAxis.yAxisPlotter.moveTo((h9y + Q5y + K3y + p0n + K3y), t0l.u3f(borderEdge, 0.5), y2);
                                yAxis.yAxisPlotter.lineTo("border", borderEdge + tickWidth, y2);
                            }
                            if (yAxis.priceFormatter) {
                                price = yAxis.priceFormatter(this, panel, price);
                            }
                            else {
                                price = this.formatYAxisPrice(price, panel, null, yAxis);
                            }
                            var backgroundColor = yAxis.textBackground ? this.containerColor : null, textXPosition = edgeOfAxis + tickWidth + 3;
                            if (t0l.S3f(position, "left")) {
                                textXPosition = yAxis.left + 3;
                                if (yAxis.justifyRight)textXPosition = yAxis.left + yAxis.width + tickWidth - 3;
                            }
                            else {
                                if (yAxis.justifyRight)textXPosition = edgeOfAxis + yAxis.width;
                            }
                            yAxis.yAxisPlotter.addText("text", price, textXPosition, y2, backgroundColor, null, fontHeight);
                        }
                        if (t0l.b3f(zz, 100)) {
                            console.log((k9n + L7y + f2y + W1y + t0l.r6y + t0l.r6y + t0l.O2n + p9n + B9y + Q9y + R7y + q1y + F4y + a0y + E9y + K3y + N2n + K3y + C7n + e2n + e2n + a0y + K3y + E9y + w0y + N1y + r2y + a0y + R5y + h1y));
                        }
                        if (drawBorders) {
                            var b = Math.round(yAxis.bottom) + 0.5;
                            yAxis.yAxisPlotter.moveTo("border", borderEdge, yAxis.top);
                            yAxis.yAxisPlotter.lineTo("border", borderEdge, b);
                            yAxis.yAxisPlotter.draw(this.chart.context, "border");
                        }
                    }
                    this.plotYAxisGrid(panel);
                }
                this.runAppend("drawYAxis", arguments);
            }
            ;
            STXChart.prototype.plotYAxisGrid = function (panel) {
                var w8y = "plotYAxisGrid";
                if (this.runPrepend(w8y, arguments))return;
                var context = this.chart.context;
                panel.yAxis.yAxisPlotter.draw(context, w7n);
                this.runAppend(w8y, arguments);
            }
            ;
            STXChart.prototype.plotYAxisText = function (panel) {
                var l6y = "ext", P4y = "AxisT", H2n = "pl";
                if (this.runPrepend((H2n + Q5y + t0l.r6y + f2y + P4y + l6y), arguments))return;
                var arr = panel.yaxisLHS.concat(panel.yaxisRHS);
                for (var i = 0; t0l.c3f(i, arr.length); i++) {
                    var yAxis = arr[i];
                    if (!yAxis.yAxisPlotter)continue;
                    if (yAxis.noDraw)continue;
                    this.canvasFont("stx_yaxis");
                    this.canvasColor("stx_yaxis");
                    var context = this.chart.context;
                    context.textBaseline = "middle";
                    if (yAxis.justifyRight)context.textAlign = "right"; else context.textAlign = "left";
                    var fontHeight = this.getCanvasFontSize("stx_yaxis");
                    yAxis.yAxisPlotter.draw(context, "text");
                    context.textBaseline = "alphabetic";
                    context.textAlign = "left";
                }
                this.runAppend((p5y + t0l.r6y + q2n + D3y + J4n + j2n + t0l.r6y), arguments);
            }
            ;
            STXChart.prototype.formatYAxisPrice = function (price, panel, requestedDecimalPlaces, yAxis) {
                if (t0l.T5f(price, null) || typeof price == "undefined")return "";
                var yax = yAxis ? yAxis : panel.yAxis, decimalPlaces = requestedDecimalPlaces;
                if (!decimalPlaces && t0l.W5f(decimalPlaces, 0))decimalPlaces = yax.printDecimalPlaces;
                if (!decimalPlaces && t0l.a5f(decimalPlaces, 0)) {
                    if (t0l.P5f(yax.priceTick, 0.01))decimalPlaces = 4; else if (t0l.t5f(yax.priceTick, 0.1))decimalPlaces = 2; else if (t0l.R5f(yax.priceTick, 1))decimalPlaces = 1; else decimalPlaces = 0;
                }
                if (t0l.y5f(panel.name, panel.chart.name)) {
                    if (t0l.r5f(yax.priceTick, 100)) {
                        return STX.condenseInt(price);
                    }
                }
                if (this.internationalizer) {
                    if (t0l.O5f(decimalPlaces, this.internationalizer.priceFormatters.length))decimalPlaces = t0l.I5f(this.internationalizer.priceFormatters.length, 1);
                    price = this.internationalizer.priceFormatters[decimalPlaces].format(price);
                }
                else {
                    price = price.toFixed(decimalPlaces);
                }
                return price;
            }
            ;
            STXChart.prototype.formatPrice = function (price, panel) {
                if (!price || typeof price == "undefined")return "";
                if (!panel)panel = this.currentPanel;
                if (!panel)panel = this.chart.panel;
                if (!panel)return price;
                var decimalPlaces = panel.decimalPlaces;
                if (!decimalPlaces && t0l.d5f(decimalPlaces, 0)) {
                    decimalPlaces = panel.chart.decimalPlaces;
                }
                if (!decimalPlaces && t0l.V5f(decimalPlaces, 0)) {
                    return price;
                }
                if (this.internationalizer) {
                    if (t0l.s5f(decimalPlaces, this.internationalizer.priceFormatters.length))decimalPlaces = t0l.g5f(this.internationalizer.priceFormatters.length, 1);
                    price = this.internationalizer.priceFormatters[decimalPlaces].format(price);
                }
                else {
                    price = price.toFixed(decimalPlaces);
                }
                return price;
            }
            ;
            STXChart.prototype.createCrosshairs = function () {
                var A82 = "createCrosshairs";
                if (this.runPrepend(A82, arguments))return;
                if (this.controls.crossX.onmousedown)return;
                this.controls.crossY.onmousedown = function (e) {
                    if (!e)e = event;
                    if (e.preventDefault)e.preventDefault();
                    return P0n;
                }
                ;
                this.controls.crossX.onmousedown = function (e) {
                    if (!e)e = event;
                    if (e.preventDefault)e.preventDefault();
                    return P0n;
                }
                ;
                this.runAppend(A82, arguments);
            }
            ;
            STXChart.prototype.determineMinMax = function (quotes, fields, sum, bypassTransform, length) {
                var highValue = Number.MAX_VALUE * -1, lowValue = Number.MAX_VALUE, isTransform = false, l = quotes.length;
                if (length)l = length;
                for (var i = 0; t0l.j5f(i, l); i++) {
                    var quote = quotes[i];
                    if (!quote)continue;
                    if (!bypassTransform) {
                        if (quote.transform) {
                            isTransform = true;
                            quote = quote.transform;
                        }
                        else if (isTransform)continue;
                    }
                    var acc = 0;
                    for (var j = 0; t0l.X5f(j, fields.length); j++) {
                        var f = quote[fields[j]];
                        if (!f)continue;
                        if (typeof (f) == "number")f = [f];
                        for (var v = 0; t0l.z5f(v, f.length); v++) {
                            var val = f[v];
                            if (val || t0l.A1f(val, 0)) {
                                if (sum) {
                                    acc += val;
                                    if (t0l.G1f(acc, highValue))highValue = acc;
                                    if (t0l.H1f(acc, lowValue))lowValue = acc;
                                }
                                else {
                                    if (t0l.h1f(val, highValue))highValue = val;
                                    if (t0l.x1f(val, lowValue))lowValue = val;
                                }
                            }
                        }
                    }
                }
                if (highValue == Number.MAX_VALUE * -1)highValue = 0;
                if (t0l.U1f(lowValue, Number.MAX_VALUE))lowValue = 0;
                return [lowValue, highValue];
            }
            ;
            STXChart.prototype.calculateYAxisRange = function (panel, yAxis, low, high) {
                if (t0l.D1f(low, Number.MAX_VALUE)) {
                    low = 0;
                    high = 0;
                }
                var cheight = panel.height, newHigh = null, newLow = null;
                this.adjustYAxisHeightOffset(panel, yAxis);
                yAxis.top = panel.top;
                yAxis.height = t0l.B1f(yAxis.bottom, yAxis.top);
                var verticalPad = Math.round(Math.abs(t0l.m1f(cheight, 5)));
                if (t0l.n1f(cheight - Math.abs(yAxis.scroll), verticalPad)) {
                    yAxis.scroll = (t0l.p1f(cheight, verticalPad)) * (t0l.v1f(yAxis.scroll, 0) ? -1 : 1);
                }
                var pricePerPix = t0l.f1f((high - low), yAxis.height);
                if (low || t0l.i1f(low, 0)) {
                    if (t0l.E1f(high - low, 0)) {
                        newHigh = t0l.q1f(high, 2);
                        newLow = 0;
                    }
                    else {
                        if ((this.layout.semiLog || t0l.Z1f(this.layout.chartScale, "log")) && newHigh) {
                            var logLow = t0l.l8f(Math.log(low), Math.LN10), logHigh = t0l.K8f(Math.log(high), Math.LN10);
                            newHigh = Math.pow(10, logHigh);
                            newLow = Math.pow(10, logLow);
                        }
                        else {
                            newHigh = high;
                            newLow = low;
                        }
                    }
                    yAxis.high = newHigh;
                    yAxis.low = newLow;
                }
                if (yAxis.max || t0l.k8f(yAxis.max, 0))yAxis.high = yAxis.max;
                if (yAxis.min || t0l.L8f(yAxis.min, 0))yAxis.low = yAxis.min;
                yAxis.shadow = t0l.e8f(yAxis.high, yAxis.low);
                if (t0l.J8f(panel.chart.name, panel.name) && t0l.C8f(panel.yAxis, yAxis)) {
                    var isLogScale = (this.layout.semiLog || t0l.Q8f(this.layout.chartScale, "log"));
                    if (panel.chart.isComparison)isLogScale = false;
                    if (t0l.F8f(yAxis.semiLog, isLogScale)) {
                        this.clearPixelCache();
                        yAxis.semiLog = isLogScale;
                    }
                }
            }
            ;
            STXChart.prototype.renderYAxis = function (chart) {
                if (this.runPrepend("renderYAxis", arguments))return;
                var panel = chart.panel, arr = panel.yaxisRHS.concat(panel.yaxisLHS), i;
                for (i = 0; t0l.Y8f(i, arr.length); i++) {
                    var yAxis = arr[i], low = null, high = null;
                    if (t0l.N8f(panel.yAxis, yAxis)) {
                        low = chart.lowValue;
                        high = chart.highValue;
                    }
                    this.calculateYAxisRange(panel, yAxis, low, high);
                }
                var parameters = {}
                    ;
                for (i = 0; t0l.w8f(i, arr.length); i++) {
                    parameters.yAxis = arr[i];
                    this.createYAxis(panel, parameters);
                    this.drawYAxis(panel, parameters);
                }
                this.runAppend("renderYAxis", arguments);
            }
            ;
            STXChart.prototype.initializeDisplay = function (chart) {
                if (this.runPrepend("initializeDisplay", arguments))return;
                var fields = [];
                for (var field in chart.series) {
                    if (chart.series[field].parameters.shareYAxis)fields.push(field);
                }
                var panel = chart.panel = this.panels[chart.name], minMax, length = null, ticksOnScreen = Math.floor(t0l.o8f((chart.width - this.micropixels), this.layout.candleWidth));
                if (t0l.M8f(chart.scroll, chart.maxTicks) && t0l.u8f(chart.maxTicks, ticksOnScreen + 1))length = t0l.S8f(chart.dataSegment.length, 1);
                if (!STXChart.chartShowsHighs(this.layout.chartType)) {
                    fields.push("Close");
                    minMax = this.determineMinMax(chart.dataSegment, fields, null, null, length);
                    if (t0l.b8f(this.layout.chartType, "baseline_delta") || t0l.c8f(this.layout.chartType, "baseline_delta_mountain")) {
                        var base = chart.baseline.actualLevel;
                        if (chart.transformFunc)base = chart.transformFunc(this, chart, base);
                        var diff = Math.max(t0l.T7x(base, minMax[0]), t0l.W7x(minMax[1], base));
                        if (this.repositioningBaseline) {
                            minMax = [chart.lowValue, chart.highValue];
                        }
                        else {
                            minMax[0] = t0l.a7x(base, diff);
                            minMax[1] = base + diff;
                        }
                    }
                }
                else {
                    fields.push("Close", (x12), "Low");
                    minMax = this.determineMinMax(chart.dataSegment, fields, null, null, length);
                }
                chart.lowValue = minMax[0];
                chart.highValue = minMax[1];
                this.runAppend("initializeDisplay", arguments);
            }
            ;
            STXChart.prototype.computePosition = function (x, offset) {
                if (typeof offset == R52)offset = t0l.G52;
                var position = t0l.P7x(x, this.layout.candleWidth) + offset + this.micropixels;
                return position;
            }
            ;
            STXChart.prototype.computeColor = function (open, close) {
                if (t0l.t7x(open, close))return f32;
                if (t0l.R7x(open, close))return s52;
                return G1y;
            }
            ;
            STXChart.prototype.computeLength = function (high, low) {
                var h = this.pixelFromPrice(high), l = this.pixelFromPrice(low);
                return t0l.y7x(l, h);
            }
            ;
            STXChart.prototype.setSeriesRenderer = function (renderer) {
                var params = renderer.params;
                if (this.chart.seriesRenderers[renderer.params.name])return this.chart.seriesRenderers[renderer.params.name];
                if (params.yAxis) {
                    this.addYAxis(this.panels[params.panel], params.yAxis);
                }
                renderer.stx = this;
                this.chart.seriesRenderers[renderer.params.name] = renderer;
                return renderer;
            }
            ;
            STXChart.prototype.setMarket = function (marketDefinition, chart) {
                if (!chart)chart = this.chart;
                chart.market = new STX.Market(marketDefinition);
            }
            ;
            STXChart.prototype.setMarketFactory = function (factory) {
                this.marketFactory = factory;
            }
            ;
            STXChart.prototype.removeSeriesRenderer = function (renderer) {
                for (var r in this.chart.seriesRenderers) {
                    if (t0l.r7x(renderer.params.name, this.chart.seriesRenderers[r].params.name)) {
                        var toDelete = this.chart.seriesRenderers[renderer.params.name], yAxis = toDelete.params.yAxis, panel = this.panels[toDelete.params.panel];
                        delete  this.chart.seriesRenderers[renderer.params.name];
                        this.deleteYAxisIfUnused(panel, yAxis);
                        return;
                    }
                }
            }
            ;
            STXChart.prototype.getSeriesRenderer = function (name) {
                return this.chart.seriesRenderers[name];
            }
            ;
            STXChart.prototype.drawHistogram = function (params, seriesParams) {
                var G0y = "otto";
                if (!seriesParams || !seriesParams.length)return;
                var panelName = params.panel;
                if (!panelName)panelName = "chart";
                var c = this.panels[panelName];
                if (!c)return;
                var yAxis = params.yAxis ? params.yAxis : c.yAxis, b = Math.floor(yAxis.bottom) + 0.5, t = Math.floor(yAxis.top) + 0.5, type = params.type;
                if (t0l.O7x(type, "histogram"))type = params.subtype;
                var quotes = this.chart.dataSegment, bordersOn = false;
                this.getDefaultColor();
                var sp;
                for (sp = 0; t0l.I7x(sp, seriesParams.length); sp++) {
                    bordersOn |= (seriesParams[sp].border_color_up && !STX.isTransparent(seriesParams[sp].border_color_up));
                    bordersOn |= (seriesParams[sp].border_color_down && !STX.isTransparent(seriesParams[sp].border_color_down));
                }
                if (!params.name)params.name = "Data";
                var multiplier = yAxis.multiplier;
                if (!params.heightPercentage)params.heightPercentage = 0.7;
                if (!params.widthFactor)params.widthFactor = 0.8;
                var histMax = 0, histMin = 0;
                for (var i = 0; t0l.d7x(i, this.chart.maxTicks); i++) {
                    var prices = quotes[i];
                    if (!prices)continue;
                    var total = 0;
                    for (sp = 0; t0l.V7x(sp, seriesParams.length); sp++) {
                        if (prices[seriesParams[sp].field]) {
                            if (t0l.s7x(params.subtype, "stacked"))total += prices[seriesParams[sp].field]; else total = prices[seriesParams[sp].field];
                            if (t0l.g7x(total, histMax))histMax = total;
                            if (t0l.j7x(total, histMin))histMin = total;
                        }
                    }
                }
                if (!params.bindToYAxis) {
                    if (t0l.X7x(histMax, 0) && t0l.z7x(histMin, 0)) {
                        this.watermark(panelName, "center", (h9y + G0y + v5y), this.translateIf(params.name + " Not Available"));
                        return;
                    }
                    multiplier = t0l.A9x((b - t), params.heightPercentage, (histMax - histMin));
                }
                var offset = 0.5;
                if (t0l.W9x(this.layout.candleWidth, 1) || !bordersOn)offset = 0;
                this.startClip(panelName);
                var context = this.chart.context, shaveOff = Math.max(0, t0l.a9x((1 - params.widthFactor), this.layout.candleWidth, 2)), tops = {}
                    , bottoms = {}
                    , self = this, candleWidth = 1;

                function drawBars(field, color, opacity, isBorder, isUp, shift, candleWidth) {
                    var e9n = "clu", Z0n = "ered", r4y = "ust";
                    if (!opacity)opacity = 1;
                    if (STX.isIE8)context.globalAlpha = 0.5; else context.globalAlpha = opacity;
                    context.beginPath();
                    var prevTop = b + 0.5, farLeft = Math.floor(t0l.e9x(self.pixelFromBar(0, c.chart), self.layout.candleWidth / 2)), prevRight = farLeft;
                    for (var i = 0; t0l.J9x(i, quotes.length); i++) {
                        var bottom = bottoms[i];
                        if (!bottom)bottom = b;
                        if (t0l.C9x(i, 0))prevTop = bottom;
                        var quote = quotes[i];
                        if (!quote || !quote[field]) {
                            prevTop = bottom;
                            prevRight += self.layout.candleWidth;
                            continue;
                        }
                        var y = t0l.Q9x((quote[field] - histMin), multiplier);
                        if (isNaN(y))continue;
                        var myCandleWidth = self.layout.candleWidth;
                        if (quote.candleWidth) {
                            myCandleWidth = quote.candleWidth;
                            if (t0l.F9x(i, 0))farLeft = prevRight = Math.floor(t0l.Y9x(self.pixelFromBar(0, c.chart), quote.candleWidth / 2));
                        }
                        var top = Math.min(Math.floor(t0l.N9x(bottom, y)) + 0.5, bottom);
                        if (isUp) {
                            if (t0l.w9x(quote.Close, quote.iqPrevClose)) {
                                prevTop = top;
                                prevRight += myCandleWidth;
                                continue;
                            }
                        }
                        else {
                            if (t0l.o9x(quote.Close, quote.iqPrevClose)) {
                                prevTop = top;
                                prevRight += myCandleWidth;
                                continue;
                            }
                        }
                        var x0, x1, variableWidthRatio = t0l.M9x(myCandleWidth, self.layout.candleWidth), start = prevRight + t0l.u9x((shaveOff + shift * candleWidth), variableWidthRatio);
                        x0 = Math.round(start) + (isBorder ? 0 : offset);
                        x1 = t0l.S9x(Math.round(start + candleWidth * variableWidthRatio), (isBorder ? 0 : offset));
                        if (t0l.b9x(x1 - x0, 2))x1 = x0 + 1;
                        if (isBorder)roundPixel = 0; else roundPixel = 0.5;
                        if (t0l.c9x(x0 % 1, roundPixel))x0 += 0.5;
                        if (t0l.T0x(x1 % 1, roundPixel))x1 += 0.5;
                        context.moveTo(x0, bottom);
                        if (t0l.W0x(b, bottom)) {
                            context.lineTo(x1, bottom);
                        }
                        else {
                            context.moveTo(x1, bottom);
                            if (isBorder && !shaveOff) {
                                if (bottoms[i + 1])context.moveTo(x1, Math.max(top, Math.min(bottom, bottoms[i + 1])));
                            }
                        }
                        context.lineTo(x1, top);
                        context.lineTo(x0, top);
                        if (isBorder && shift) {
                            if (t0l.a0x(tops[i], top) || t0l.P0x(i, 0))context.lineTo(x0, Math.min(bottom, tops[i]));
                        }
                        else if (isBorder && !shaveOff && t0l.t0x(type, (S9y + t0l.n5y + r4y + Z0n))) {
                            if (t0l.R0x(i, 0) && tops[t0l.y0x(i, 1)] && t0l.r0x(tops[i - 1], top))context.lineTo(x0, Math.min(bottom, tops[t0l.O0x(i, 1)]));
                        }
                        else if (isBorder && !shaveOff) {
                            if (t0l.I0x(prevTop, top) || t0l.d0x(i, 0))context.lineTo(x0, Math.min(bottom, prevTop));
                        }
                        else {
                            context.lineTo(x0, bottom);
                        }
                        prevTop = top;
                        prevRight += myCandleWidth;
                        if (t0l.V0x(type, (e9n + D3y + t0l.r6y + E9y + R1y + n9y)) || isBorder)tops[i] = top;
                    }
                    if (!color)color = "auto";
                    if (isBorder) {
                        context.strokeStyle = t0l.s0x(color, "auto") ? self.defaultColor : color;
                        context.stroke();
                    }
                    else {
                        context.fillStyle = t0l.g0x(color, "auto") ? self.defaultColor : color;
                        context.fill();
                    }
                    context.closePath();
                }

                for (sp = 0; t0l.j0x(sp, seriesParams.length); sp++) {
                    var param = seriesParams[sp];
                    candleWidth = t0l.X0x(this.layout.candleWidth, params.widthFactor);
                    var shift = 0;
                    if (t0l.z0x(type, "clustered")) {
                        shift = sp;
                        candleWidth /= seriesParams.length;
                    }
                    drawBars(param.field, param.fill_color_up, param.opacity_up, null, true, shift, candleWidth);
                    drawBars(param.field, param.fill_color_down, param.opacity_down, null, null, shift, candleWidth);
                    if (t0l.A2x(this.layout.candleWidth, 2) && bordersOn) {
                        drawBars(param.field, param.border_color_up, param.opacity_up, true, true, shift, candleWidth);
                        drawBars(param.field, param.border_color_down, param.opacity_down, true, null, shift, candleWidth);
                    }
                    if (t0l.G2x(type, "stacked"))bottoms = STX.shallowClone(tops);
                }
                context.globalAlpha = 1;
                this.endClip();
            }
            ;
            STXChart.prototype.drawHeatmap = function (params, seriesParams) {
                if (!seriesParams || !seriesParams.length)return;
                var panelName = params.panel;
                if (!panelName)panelName = "chart";
                var c = this.panels[panelName];
                if (!c)return;
                var yAxis = params.yAxis ? params.yAxis : c.yAxis, b = Math.floor(yAxis.bottom) + 0.5, t = Math.floor(yAxis.top) + 0.5, quotes = this.chart.dataSegment;
                this.getDefaultColor();
                if (!params.name)params.name = "Data";
                if (!params.widthFactor)params.widthFactor = 1;
                var offset = 0.5;
                if (t0l.H2x(c.chart.tmpWidth, 1))offset = 0;
                var height = null, halfHeight = null, self = this, lineWidth = null;

                function drawCells(field, color, isBorder, widthFactor, myoffset) {
                    context.beginPath();
                    context.fillStyle = color;
                    context.strokeStyle = color;
                    var t = yAxis.top, b = yAxis.bottom, myCandleWidth = t0l.h2x(self.layout.candleWidth, widthFactor), xc = Math.floor(t0l.x2x(self.pixelFromBar(0, c.chart), self.layout.candleWidth)), x0, x1;
                    for (var x = 0; t0l.U2x(x, quotes.length); x++) {
                        var quote = quotes[x];
                        if (!quote)continue;
                        if (quote.candleWidth) {
                            if (t0l.D2x(x, 0)) {
                                xc += self.layout.candleWidth;
                            }
                            else {
                                xc += t0l.B2x((quote.candleWidth + myCandleWidth / widthFactor), 2);
                            }
                            myCandleWidth = t0l.m2x(quote.candleWidth, widthFactor);
                        }
                        else {
                            xc += self.layout.candleWidth;
                        }
                        x0 = t0l.n2x(xc, myCandleWidth / 2, myoffset);
                        x1 = xc + t0l.d2x(myCandleWidth, 2) - myoffset;
                        if (t0l.V2x(x1 - x0, 2))x1 = x0 + 1;
                        if (quote.transform)quote = quote.transform;
                        var cellValues = quote[field];
                        if (!cellValues)continue;
                        if (typeof cellValues == "number")cellValues = [cellValues];
                        for (var i = 0; t0l.s2x(i, cellValues.length); i++) {
                            var v = self.pixelFromPrice(cellValues[i], c, yAxis);
                            if (!lineWidth) {
                                var v1 = self.pixelFromPrice(t0l.g2x(cellValues[i], params.height), c, yAxis);
                                context.lineWidth = 1;
                                height = t0l.j2x(v1, v);
                                halfHeight = t0l.X2x(height, 2);
                                lineWidth = context.lineWidth;
                            }
                            if (isBorder) {
                                var tc = v + halfHeight, bc = t0l.z2x(v, halfHeight);
                                context.moveTo(x0, tc);
                                context.lineTo(x0, bc);
                                context.lineTo(x1, bc);
                                context.lineTo(x1, tc);
                                context.lineTo(x0, tc);
                            }
                            else {
                                context.fillRect(x0, t0l.A4x(v, halfHeight), t0l.G4x(x1, x0), height);
                            }
                        }
                    }
                    if (isBorder)context.stroke();
                    context.closePath();
                }

                this.startClip(panelName);
                var context = this.chart.context;
                context.globalAlpha = params.opacity;
                for (var sp = 0; t0l.H4x(sp, seriesParams.length); sp++) {
                    var param = seriesParams[sp];
                    drawCells(param.field, param.color, null, params.widthFactor, param.border_color ? offset : -offset / 4);
                    if (param.border_color && t0l.h4x(this.layout.candleWidth, 2)) {
                        drawCells(param.field, param.border_color, true, params.widthFactor, offset);
                    }
                }
                context.lineWidth = 1;
                context.globalAlpha = 1;
                this.endClip();
            }
            ;
            STXChart.prototype.startClip = function (panelName, allowYAxis) {
                if (!panelName)panelName = "chart";
                var panel = this.panels[panelName], yAxis = panel.yAxis;
                this.chart.context.save();
                this.chart.context.beginPath();
                var left = panel.left, width = panel.width;
                if (allowYAxis) {
                    left = 0;
                    width = this.width;
                }
                this.chart.context.rect(left, panel.top, width, yAxis.height);
                this.chart.context.clip();
            }
            ;
            STXChart.prototype.endClip = function () {
                this.chart.context.restore();
            }
            ;
            STXChart.prototype.drawCandlesHighPerformance = function (panel, fillColor, borderColor, condition) {
                var chart = panel.chart, quotes = chart.dataSegment, context = this.chart.context, t = panel.yAxis.top, b = panel.yAxis.bottom, top, bottom, length, borderOffset = 0;
                if (borderColor && !STX.isTransparent(borderColor))borderOffset = 0.5;
                var leftTick = t0l.x4x(chart.dataSet.length, chart.scroll), rightTick = leftTick + chart.maxTicks;
                context.beginPath();
                context.fillStyle = fillColor;
                var yAxis = panel.yAxis, whitespace = t0l.U4x(chart.tmpWidth, 2), candleWidth = this.layout.candleWidth, xbase = t0l.D4x(panel.left, 0.5 * candleWidth, this.micropixels, 1);
                for (var x = 0; t0l.F4x(x, quotes.length); x++) {
                    xbase += t0l.Y4x(candleWidth, 2);
                    candleWidth = this.layout.candleWidth;
                    xbase += t0l.N4x(candleWidth, 2);
                    var quote = quotes[x];
                    if (!quote)continue;
                    if (quote.projection)continue;
                    if (quote.candleWidth) {
                        xbase += t0l.w4x((quote.candleWidth - candleWidth), 2);
                        candleWidth = quote.candleWidth;
                        if (t0l.o4x(this.layout.chartType, "volume_candle"))whitespace = t0l.M4x(candleWidth, 2);
                    }
                    if (t0l.u4x(quote.Open, quote.Close))continue;
                    if (t0l.S4x(condition, STXChart.CANDLEUP) && t0l.b4x(quote.Open, quote.Close))continue;
                    if (t0l.c4x(condition, STXChart.CANDLEDOWN) && t0l.T6x(quote.Open, quote.Close))continue;
                    if (t0l.W6x(condition, STXChart.CLOSEUP) && t0l.a6x(quote.Close, quote.iqPrevClose))continue;
                    if (t0l.P6x(condition, STXChart.CLOSEDOWN) && t0l.t6x(quote.Close, quote.iqPrevClose))continue;
                    if (t0l.R6x(condition, STXChart.CLOSEEVEN) && t0l.y6x(quote.Close, quote.iqPrevClose))continue;
                    if (quote.transform)quote = quote.transform;
                    var cache = quote.cache, tick = leftTick + x;
                    if (t0l.r6x(tick, panel.cacheLeft) || t0l.O6x(tick, panel.cacheRight) || !cache.open) {
                        var o = (yAxis.semiLog ? this.pixelFromPrice(quote.Open, panel) : (t0l.I6x((yAxis.high - quote.Open), yAxis.multiplier)) + yAxis.top), c = (yAxis.semiLog ? this.pixelFromPrice(quote.Close, panel) : (t0l.d6x((yAxis.high - quote.Close), yAxis.multiplier)) + yAxis.top);
                        top = Math.floor(Math.min(o, c)) + borderOffset;
                        bottom = Math.max(o, c);
                        length = Math.floor(t0l.V6x(bottom, top));
                        if (t0l.s6x(top, t)) {
                            if (t0l.g6x(top + length, t)) {
                                cache.open = top;
                                cache.close = top;
                                continue;
                            }
                            length -= t0l.j6x(t, top);
                            top = t;
                        }
                        if (t0l.X6x(top + length, b)) {
                            length -= (top + length - b);
                        }
                        length = Math.max(length, 2);
                        cache.open = top;
                        cache.close = cache.open + length;
                    }
                    if (t0l.z6x(cache.open, b))continue;
                    if (t0l.A3x(cache.close, t))continue;
                    var flr_xbase = Math.floor(xbase) + 0.5, xstart = Math.floor(t0l.G3x(flr_xbase, whitespace)) + borderOffset, xend = t0l.H3x(Math.round(flr_xbase + whitespace), borderOffset);
                    if (t0l.h3x(quote.Open, quote.Close)) {
                        context.moveTo(xstart, cache.open);
                        context.lineTo(xend, cache.open);
                        context.lineTo(xend, cache.close);
                        context.lineTo(xstart, cache.close);
                        context.lineTo(xstart, cache.open);
                    }
                }
                context.fill();
                if (borderOffset) {
                    context.lineWidth = 1;
                    context.strokeStyle = borderColor;
                    context.stroke();
                }
            }
            ;
            STXChart.prototype.drawCandles = function (panel, colorFunction, isOutline) {
                var p9y = "sp", m2y = "tra", s82 = "arent", A2n = "ans", chart = panel.chart;
                if (!chart) {
                    chart = panel;
                    panel = panel.chart;
                }
                var quotes = chart.dataSegment, context = this.chart.context, t = panel.yAxis.top, b = panel.yAxis.bottom, top, bottom, length, borderColor = (o8y + A2n + t0l.V3y + s82), fillColor = (m2y + P5y + p9y + B9y + K3y + k2n), borderOffset = 0;
                if (!STX.isTransparent(borderColor))borderOffset = 0.5;
                var leftTick = t0l.x3x(chart.dataSet.length, chart.scroll), rightTick = leftTick + chart.maxTicks, yAxis = panel.yAxis, whitespace = t0l.U3x(chart.tmpWidth, 2), candleWidth = this.layout.candleWidth, xbase = t0l.D3x(panel.left, 0.5 * candleWidth, this.micropixels, 1);
                for (var x = 0; t0l.F3x(x, quotes.length); x++) {
                    xbase += t0l.Y3x(candleWidth, 2);
                    candleWidth = this.layout.candleWidth;
                    xbase += t0l.N3x(candleWidth, 2);
                    var quote = quotes[x];
                    if (!quote)continue;
                    if (quote.projection)continue;
                    if (quote.candleWidth) {
                        xbase += t0l.w3x((quote.candleWidth - candleWidth), 2);
                        candleWidth = quote.candleWidth;
                        if (t0l.o3x(this.layout.chartType, "volume_candle"))whitespace = t0l.M3x(candleWidth, 2);
                    }
                    if (!quote.Open && t0l.u3x(quote.Open, 0))continue;
                    if (t0l.S3x(quote.Open, quote.Close))continue;
                    var myColor = colorFunction(this, quote, isOutline ? "outline" : "solid");
                    if (!myColor)continue;
                    if (isOutline)borderColor = myColor; else fillColor = myColor;
                    context.beginPath();
                    context.fillStyle = fillColor;
                    if (quote.transform)quote = quote.transform;
                    var cache = quote.cache, tick = leftTick + x;
                    if (t0l.b3x(tick, panel.cacheLeft) || t0l.c3x(tick, panel.cacheRight) || !cache.open) {
                        var o = (yAxis.semiLog ? this.pixelFromPrice(quote.Open, panel) : (t0l.T5x((yAxis.high - quote.Open), yAxis.multiplier)) + yAxis.top), c = (yAxis.semiLog ? this.pixelFromPrice(quote.Close, panel) : (t0l.W5x((yAxis.high - quote.Close), yAxis.multiplier)) + yAxis.top);
                        top = Math.floor(Math.min(o, c)) + borderOffset;
                        bottom = Math.max(o, c);
                        length = Math.floor(t0l.a5x(bottom, top));
                        if (t0l.P5x(top, t)) {
                            if (t0l.t5x(top + length, t)) {
                                cache.open = top;
                                cache.close = top;
                                continue;
                            }
                            length -= t0l.R5x(t, top);
                            top = t;
                        }
                        if (t0l.y5x(top + length, b)) {
                            length -= (top + length - b);
                        }
                        length = Math.max(length, 2);
                        cache.open = top;
                        cache.close = cache.open + length;
                    }
                    if (t0l.r5x(cache.open, b))continue;
                    if (t0l.O5x(cache.close, t))continue;
                    flr_xbase = Math.floor(xbase) + 0.5;
                    var xstart = Math.floor(t0l.I5x(flr_xbase, whitespace)) + borderOffset, xend = t0l.d5x(Math.round(flr_xbase + whitespace), borderOffset);
                    if (t0l.V5x(quote.Open, quote.Close)) {
                        context.moveTo(xstart, cache.open);
                        context.lineTo(xend, cache.open);
                        context.lineTo(xend, cache.close);
                        context.lineTo(xstart, cache.close);
                        context.lineTo(xstart, cache.open);
                    }
                    if (t0l.s5x(fillColor, "transparent"))context.fill();
                    if (borderOffset) {
                        context.lineWidth = 1;
                        context.strokeStyle = borderColor;
                        context.stroke();
                    }
                }
            }
            ;
            STXChart.prototype.drawShadowsHighPerformance = function (panel, style, condition) {
                var chart = panel.chart, quotes = chart.dataSegment, context = this.chart.context;
                context.lineWidth = 1;
                var t = panel.yAxis.top, b = panel.yAxis.bottom, top, bottom, left, leftTick = t0l.g5x(chart.dataSet.length, chart.scroll), rightTick = leftTick + chart.maxTicks;
                context.beginPath();
                var yAxis = panel.yAxis, candleWidth = this.layout.candleWidth, xbase = t0l.j5x(panel.left, 0.5 * candleWidth, this.micropixels, 1);
                for (var x = 0; t0l.Z5x(x, quotes.length); x++) {
                    xbase += t0l.l1x(candleWidth, 2);
                    candleWidth = this.layout.candleWidth;
                    xbase += t0l.K1x(candleWidth, 2);
                    var quote = quotes[x];
                    if (!quote)continue;
                    if (quote.projection)continue;
                    if (quote.candleWidth) {
                        xbase += t0l.k1x((quote.candleWidth - candleWidth), 2);
                        candleWidth = quote.candleWidth;
                    }
                    if (condition) {
                        if (t0l.L1x(condition, STXChart.CANDLEUP) && t0l.e1x(quote.Open, quote.Close))continue; else if (t0l.J1x(condition, STXChart.CANDLEDOWN) && t0l.C1x(quote.Open, quote.Close))continue; else if (t0l.Q1x(condition, STXChart.CLOSEUP) && t0l.F1x(quote.Close, quote.iqPrevClose))continue; else if (t0l.Y1x(condition, STXChart.CLOSEDOWN) && t0l.N1x(quote.Close, quote.iqPrevClose))continue; else if (t0l.w1x(condition, STXChart.CLOSEEVEN) && t0l.o1x(quote.Close, quote.iqPrevClose))continue;
                    }
                    if (quote.transform)quote = quote.transform;
                    var cache = quote.cache, tick = leftTick + x;
                    if (t0l.M1x(tick, panel.cacheLeft) || t0l.u1x(tick, panel.cacheRight) || !cache.top) {
                        top = (yAxis.semiLog ? this.pixelFromPrice(quote.High, panel) : (t0l.S1x((yAxis.high - quote.High), yAxis.multiplier)) + yAxis.top);
                        bottom = (yAxis.semiLog ? this.pixelFromPrice(quote.Low, panel) : (t0l.b1x((yAxis.high - quote.Low), yAxis.multiplier)) + yAxis.top);
                        var length = t0l.c1x(bottom, top);
                        if (t0l.T8x(top, t)) {
                            if (t0l.W8x(top + length, t)) {
                                cache.top = top;
                                cache.bottom = top;
                                continue;
                            }
                            length -= t0l.a8x(t, top);
                            top = t;
                        }
                        if (t0l.P8x(top + length, b)) {
                            length -= (top + length - b);
                        }
                        cache.top = top;
                        cache.bottom = cache.top + length;
                    }
                    if (t0l.t8x(cache.top, b))continue;
                    if (t0l.R8x(cache.bottom, t))continue;
                    var xx = Math.floor(xbase) + 0.5;
                    context.moveTo(xx, cache.top);
                    context.lineTo(xx, cache.bottom);
                    if (t0l.y8x(quote.Open, quote.Close)) {
                        var offset = this.offset;
                        if (t0l.r8x(this.layout.chartType, "volume_candle")) {
                            offset = t0l.O8x(candleWidth, 2);
                        }
                        var x0 = t0l.I8x(xx, offset), x1 = xx + offset, o = Math.floor(yAxis.semiLog ? this.pixelFromPrice(quote.Open, panel) : (t0l.d8x((yAxis.high - quote.Open), yAxis.multiplier)) + yAxis.top) + 0.5;
                        if (t0l.V8x(o, b) && t0l.s8x(o, t)) {
                            context.moveTo(x0, o);
                            context.lineTo(x1, o);
                        }
                    }
                }
                this.canvasColor(style);
                context.stroke();
            }
            ;
            STXChart.prototype.drawShadows = function (panel, colorFunction) {
                var chart = panel.chart;
                if (!chart) {
                    chart = panel;
                    panel = panel.chart;
                }
                var quotes = chart.dataSegment, context = this.chart.context;
                context.lineWidth = 1;
                var t = panel.yAxis.top, b = panel.yAxis.bottom, top, bottom, left, leftTick = t0l.g8x(chart.dataSet.length, chart.scroll), rightTick = leftTick + chart.maxTicks, yAxis = panel.yAxis, candleWidth = this.layout.candleWidth, xbase = t0l.j8x(panel.left, 0.5 * candleWidth, this.micropixels, 1);
                for (var x = 0; t0l.Z8x(x, quotes.length); x++) {
                    xbase += t0l.l7r(candleWidth, 2);
                    candleWidth = this.layout.candleWidth;
                    xbase += t0l.K7r(candleWidth, 2);
                    var quote = quotes[x];
                    if (!quote)continue;
                    if (quote.projection)continue;
                    if (quote.candleWidth) {
                        xbase += t0l.k7r((quote.candleWidth - candleWidth), 2);
                        candleWidth = quote.candleWidth;
                    }
                    var color = colorFunction(this, quote, "shadow");
                    if (!color)continue;
                    if (quote.transform)quote = quote.transform;
                    var cache = quote.cache, tick = leftTick + x;
                    if (t0l.L7r(tick, panel.cacheLeft) || t0l.e7r(tick, panel.cacheRight) || !cache.top) {
                        top = (yAxis.semiLog ? this.pixelFromPrice(quote.High, panel) : (t0l.J7r((yAxis.high - quote.High), yAxis.multiplier)) + yAxis.top);
                        bottom = (yAxis.semiLog ? this.pixelFromPrice(quote.Low, panel) : (t0l.C7r((yAxis.high - quote.Low), yAxis.multiplier)) + yAxis.top);
                        var length = t0l.Q7r(bottom, top);
                        if (t0l.F7r(top, t)) {
                            if (t0l.Y7r(top + length, t)) {
                                cache.top = top;
                                cache.bottom = top;
                                continue;
                            }
                            length -= t0l.N7r(t, top);
                            top = t;
                        }
                        if (t0l.w7r(top + length, b)) {
                            length -= (top + length - b);
                        }
                        cache.top = top;
                        cache.bottom = cache.top + length;
                    }
                    if (t0l.o7r(cache.top, b))continue;
                    if (t0l.M7r(cache.bottom, t))continue;
                    var xx = Math.floor(xbase) + 0.5;
                    context.beginPath();
                    context.moveTo(xx, cache.top);
                    context.lineTo(xx, cache.bottom);
                    if (t0l.u7r(quote.Open, quote.Close) || (!quote.Open && t0l.S7r(quote.Open, 0))) {
                        var offset = this.offset;
                        if (t0l.b7r(this.layout.chartType, "volume_candle")) {
                            offset = t0l.c7r(candleWidth, 2);
                        }
                        var x0 = t0l.T9r(xx, offset), x1 = xx + offset, o = Math.floor((yAxis.semiLog ? this.pixelFromPrice(quote.Close, panel) : (t0l.W9r((yAxis.high - quote.Close), yAxis.multiplier)) + yAxis.top)) + 0.5;
                        if (t0l.a9r(o, b) && t0l.P9r(o, t)) {
                            context.moveTo(x0, o);
                            context.lineTo(x1, o);
                        }
                    }
                    context.strokeStyle = color;
                    context.stroke();
                }
            }
            ;
            STXChart.prototype.scatter = function (panel) {
                var chart = panel.chart, quotes = chart.dataSegment, context = this.chart.context;
                context.beginPath();
                context.lineWidth = 4;
                var t = panel.yAxis.top, b = panel.yAxis.bottom, xbase = t0l.t9r(panel.left, 0.5 * this.layout.candleWidth, this.micropixels, 1);
                for (var x = 0; t0l.D9r(x, quotes.length); x++) {
                    xbase += this.layout.candleWidth;
                    var quote = quotes[x];
                    if (!quote)continue;
                    if (!quote.projection) {
                        if (quote.transform)quote = quote.transform;
                        var scatter = [quote.Close];
                        if (t0l.B9r("Scatter", quote))scatter = quote.Scatter;
                        for (var i = 0; t0l.m9r(i, scatter.length); i++) {
                            var top = this.pixelFromPrice(scatter[i], panel);
                            if (t0l.n9r(top, t))continue;
                            if (t0l.p9r(top, b))continue;
                            context.moveTo(t0l.v9r(xbase, 2), top);
                            context.lineTo(xbase + 2, top);
                        }
                    }
                }
                this.canvasColor("stx_scatter_chart");
                context.stroke();
                context.closePath();
                context.lineWidth = 1;
            }
            ;
            STXChart.prototype.drawKagiSquareWave = function (panel, upStyleName, downStyleName) {
                var chart = panel.chart;
                this.startClip(panel.name);
                var quotes = chart.dataSegment, context = chart.context, upStyle = this.canvasStyle(upStyleName), downStyle = this.canvasStyle(downStyleName);
                this.canvasColor(upStyleName);
                var upColor = context.strokeStyle;
                this.canvasColor(downStyleName);
                var downColor = context.strokeStyle, upWidth = 1;
                if (upStyle.width && t0l.f9r(parseInt(upStyle.width, 10), 25)) {
                    upWidth = Math.max(1, STX.stripPX(upStyle.width));
                }
                var downWidth = 1;
                if (downStyle.width && t0l.i9r(parseInt(downStyle.width, 10), 25)) {
                    downWidth = Math.max(1, STX.stripPX(downStyle.width));
                }
                context.beginPath();
                var leftTick = t0l.E9r(chart.dataSet.length, chart.scroll), yAxis = panel.yAxis, first = true, previousOpen = null, lastClose = null, trend = null, xbase = t0l.q9r(panel.left, 0.5 * this.layout.candleWidth, this.micropixels, 1);
                for (var x = 0; t0l.c9r(x, quotes.length); x++) {
                    xbase += this.layout.candleWidth;
                    var quote = quotes[x];
                    if (!quote)continue;
                    if (quote.projection)break;
                    if (quote.transform)quote = quote.transform;
                    var cache = quote.cache, tick = leftTick + x;
                    if (t0l.T0r(tick, panel.cacheLeft) || t0l.W0r(tick, panel.cacheRight) || !cache.open) {
                        cache.open = (yAxis.semiLog ? this.pixelFromPrice(quote.Open, panel) : (t0l.a0r((yAxis.high - quote.Open), yAxis.multiplier)) + yAxis.top);
                        cache.close = (yAxis.semiLog ? this.pixelFromPrice(quote.Close, panel) : (t0l.P0r((yAxis.high - quote.Close), yAxis.multiplier)) + yAxis.top);
                    }
                    lastClose = cache.close;
                    if (first) {
                        context.moveTo(Math.floor(xbase), cache.open);
                        previousOpen = cache.open;
                        if (t0l.t0r(cache.close, cache.open))trend = 1; else trend = -1;
                        first = false;
                    }
                    if (trend != -1 && t0l.R0r(cache.close, previousOpen) && t0l.y0r(previousOpen, cache.open)) {
                        context.lineTo(Math.floor(xbase), previousOpen);
                        context.strokeStyle = downColor;
                        context.lineWidth = downWidth;
                        context.stroke();
                        context.closePath();
                        context.beginPath();
                        trend = -1;
                        context.moveTo(Math.floor(xbase), previousOpen);
                    }
                    else if (t0l.r0r(trend, 1) && t0l.O0r(cache.close, previousOpen) && t0l.I0r(previousOpen, cache.open)) {
                        context.lineTo(Math.floor(xbase), previousOpen);
                        context.strokeStyle = upColor;
                        context.lineWidth = upWidth;
                        context.stroke();
                        context.closePath();
                        context.beginPath();
                        trend = 1;
                        context.moveTo(Math.floor(xbase), previousOpen);
                    }
                    context.lineTo(Math.floor(xbase), cache.close);
                    if (t0l.d0r(x + 1, quotes.length)) {
                        context.lineTo(Math.floor(xbase + this.layout.candleWidth), cache.close);
                        previousOpen = cache.open;
                    }
                }
                if (trend == -1 || (t0l.V0r(trend, null) && t0l.s0r(lastClose, previousOpen))) {
                    context.strokeStyle = upColor;
                    context.lineWidth = upWidth;
                }
                else {
                    context.strokeStyle = downColor;
                    context.lineWidth = downWidth;
                }
                context.stroke();
                context.closePath();
                this.endClip();
                context.lineWidth = 1;
            }
            ;
            STXChart.prototype.drawPointFigureChart = function (panel, style, condition) {
                var chart = panel.chart;
                this.startClip(panel.name);
                var quotes = chart.dataSegment, context = chart.context;
                this.canvasColor(style);
                var pfstyle = this.canvasStyle(style), paddingTop = parseInt(pfstyle.paddingTop, 10), paddingBottom = parseInt(pfstyle.paddingBottom, 10), paddingLeft = parseInt(pfstyle.paddingLeft, 10), paddingRight = parseInt(pfstyle.paddingRight, 10);
                if (pfstyle.width && t0l.g0r(parseInt(pfstyle.width, 10), 25)) {
                    context.lineWidth = Math.max(1, STX.stripPX(pfstyle.width));
                }
                else {
                    context.lineWidth = 2;
                }
                context.beginPath();
                if (!this.chart.pandf)this.chart.pandf = {"box": 1, "reversal": 3}
                ;
                var box = this.chart.pandf.box, leftTick = t0l.j0r(chart.dataSet.length, chart.scroll), yAxis = panel.yAxis, boxes, height, start, candleWidth = this.layout.candleWidth, xbase = t0l.X0r(panel.left, candleWidth, this.micropixels, 1);
                for (var x = 0; t0l.l2r(x, quotes.length); x++) {
                    xbase += candleWidth;
                    var quote = quotes[x];
                    if (!quote)continue;
                    if (quote.projection)break;
                    if (quote.candleWidth)candleWidth = quote.candleWidth;
                    if (quote.transform)quote = quote.transform;
                    if (t0l.K2r(condition, "X") && t0l.k2r(quote.Open, quote.Close))continue; else if (t0l.L2r(condition, "O") && t0l.e2r(quote.Open, quote.Close))continue;
                    var cache = quote.cache, tick = leftTick + x;
                    if (t0l.J2r(tick, panel.cacheLeft) || t0l.C2r(tick, panel.cacheRight) || !cache.open) {
                        cache.open = (yAxis.semiLog ? this.pixelFromPrice(quote.Open, panel) : (t0l.Q2r((yAxis.high - quote.Open), yAxis.multiplier)) + yAxis.top);
                        cache.close = (yAxis.semiLog ? this.pixelFromPrice(quote.Close, panel) : (t0l.F2r((yAxis.high - quote.Close), yAxis.multiplier)) + yAxis.top);
                    }
                    var xxl = Math.round(xbase), xxr = Math.round(xbase + candleWidth);
                    boxes = Math.abs(Math.round(t0l.Y2r((quote.Close - quote.Open), box)));
                    height = Math.abs(t0l.N2r((cache.open - cache.close), boxes));
                    var voffset = t0l.w2r(height, 2);
                    start = cache.open;
                    for (; t0l.o2r(boxes, 0); boxes--) {
                        if (t0l.M2r(condition, "X")) {
                            context.moveTo(xxl + paddingLeft, t0l.u2r(start, paddingBottom, voffset));
                            context.lineTo(t0l.q2r(xxr, paddingRight), t0l.Z2r(start, height, paddingTop, voffset));
                            context.moveTo(xxl + paddingLeft, t0l.T4r(start, height, paddingTop, voffset));
                            context.lineTo(t0l.H4r(xxr, paddingRight), t0l.h4r(start, paddingBottom, voffset));
                            start -= height;
                        }
                        else if (t0l.t4r(condition, "O")) {
                            context.moveTo(t0l.R4r((xxl + xxr), 2), start + paddingTop - voffset);
                            context.bezierCurveTo(xxr + paddingRight, start + paddingTop - voffset, xxr + paddingRight, start + height - paddingBottom - voffset, t0l.y4r((xxl + xxr), 2), start + height - paddingBottom - voffset);
                            context.bezierCurveTo(t0l.r4r(xxl, paddingLeft), start + height - paddingBottom - voffset, t0l.O4r(xxl, paddingLeft), start + paddingTop - voffset, t0l.I4r((xxl + xxr), 2), start + paddingTop - voffset);
                            start += height;
                        }
                    }
                }
                context.stroke();
                this.endClip();
                context.lineWidth = 1;
            }
            ;
            STXChart.prototype.drawBarChartHighPerformance = function (panel, style, condition) {
                var chart = panel.chart, quotes = chart.dataSegment, context = chart.context, c = this.canvasStyle(style);
                if (c.width && t0l.d4r(parseInt(c.width, 10), 25)) {
                    context.lineWidth = Math.max(1, STX.stripPX(c.width));
                }
                else {
                    context.lineWidth = 1;
                }
                context.beginPath();
                var t = panel.yAxis.top, b = panel.yAxis.bottom, top, bottom, length, leftTick = t0l.V4r(chart.dataSet.length, chart.scroll), rightTick = leftTick + chart.maxTicks, yAxis = panel.yAxis, xbase = t0l.s4r(panel.left, 0.5 * this.layout.candleWidth, this.micropixels, 1), hlen = t0l.E4r(chart.tmpWidth, 2), voffset = t0l.q4r(context.lineWidth, 2);
                for (var x = 0; t0l.Z4r(x, quotes.length); x++) {
                    xbase += this.layout.candleWidth;
                    var quote = quotes[x];
                    if (!quote)continue;
                    if (quote.projection)break;
                    if (condition) {
                        if (t0l.l6r(condition, STXChart.CLOSEUP) && t0l.K6r(quote.Close, quote.iqPrevClose))continue; else if (t0l.k6r(condition, STXChart.CLOSEDOWN) && t0l.L6r(quote.Close, quote.iqPrevClose))continue; else if (t0l.e6r(condition, STXChart.CLOSEEVEN) && t0l.J6r(quote.Close, quote.iqPrevClose))continue;
                    }
                    if (quote.transform)quote = quote.transform;
                    var cache = quote.cache, tick = leftTick + x;
                    if (t0l.C6r(tick, panel.cacheLeft) || t0l.Q6r(tick, panel.cacheRight) || !cache.top) {
                        top = (yAxis.semiLog ? this.pixelFromPrice(quote.High, panel) : (t0l.F6r((yAxis.high - quote.High), yAxis.multiplier)) + yAxis.top);
                        bottom = (yAxis.semiLog ? this.pixelFromPrice(quote.Low, panel) : (t0l.Y6r((yAxis.high - quote.Low), yAxis.multiplier)) + yAxis.top);
                        length = t0l.N6r(bottom, top);
                        cache.open = (yAxis.semiLog ? this.pixelFromPrice(quote.Open, panel) : (t0l.w6r((yAxis.high - quote.Open), yAxis.multiplier)) + yAxis.top);
                        cache.close = (yAxis.semiLog ? this.pixelFromPrice(quote.Close, panel) : (t0l.o6r((yAxis.high - quote.Close), yAxis.multiplier)) + yAxis.top);
                        if (t0l.M6r(top, t)) {
                            if (t0l.u6r(top + length, t)) {
                                cache.top = top;
                                cache.bottom = top;
                                continue;
                            }
                            length -= t0l.S6r(t, top);
                            top = t;
                        }
                        if (t0l.b6r(top + length, b)) {
                            length -= (top + length - b);
                        }
                        cache.top = top;
                        cache.bottom = top + length;
                    }
                    var xx = Math.floor(xbase) + 0.5;
                    if (t0l.c6r(cache.top, b) && t0l.T3r(cache.bottom, t)) {
                        context.moveTo(xx, t0l.W3r(cache.top, voffset));
                        context.lineTo(xx, cache.bottom + voffset);
                    }
                    if (t0l.a3r(cache.open, t) && t0l.P3r(cache.open, b)) {
                        context.moveTo(xx, cache.open);
                        context.lineTo(t0l.t3r(xx, hlen), cache.open);
                    }
                    if (t0l.R3r(cache.close, t) && t0l.y3r(cache.close, b)) {
                        context.moveTo(xx, cache.close);
                        context.lineTo(xx + hlen, cache.close);
                    }
                }
                this.canvasColor(style);
                context.stroke();
                context.closePath();
                context.lineWidth = 1;
            }
            ;
            STXChart.prototype.drawBarChart = function (panel, style, colorFunction) {
                var chart = panel.chart;
                if (!chart) {
                    chart = panel;
                    panel = panel.chart;
                }
                var quotes = chart.dataSegment, context = chart.context, c = this.canvasStyle(style);
                if (c.width && t0l.r3r(parseInt(c.width, 10), 25)) {
                    context.lineWidth = Math.max(1, STX.stripPX(c.width));
                }
                else {
                    context.lineWidth = 1;
                }
                var t = panel.yAxis.top, b = panel.yAxis.bottom, top, bottom, length, leftTick = t0l.O3r(chart.dataSet.length, chart.scroll), rightTick = leftTick + chart.maxTicks, yAxis = panel.yAxis, colors = {}
                    , hlen = t0l.I3r(chart.tmpWidth, 2), voffset = t0l.d3r(context.lineWidth, 2), candleWidth = this.layout.candleWidth, xbase = t0l.V3r(panel.left, 0.5 * candleWidth, this.micropixels, 1);
                for (var x = 0; t0l.i3r(x, quotes.length); x++) {
                    xbase += t0l.E3r(candleWidth, 2);
                    candleWidth = this.layout.candleWidth;
                    xbase += t0l.q3r(candleWidth, 2);
                    var quote = quotes[x];
                    if (!quote)continue;
                    if (quote.projection)break;
                    if (quote.candleWidth) {
                        xbase += t0l.Z3r((quote.candleWidth - candleWidth), 2);
                        candleWidth = quote.candleWidth;
                    }
                    var color = colorFunction(this, quote);
                    if (!color)continue;
                    colors[color] = 1;
                    context.strokeStyle = color;
                    context.beginPath();
                    if (quote.transform)quote = quote.transform;
                    var cache = quote.cache, tick = leftTick + x;
                    if (t0l.l5r(tick, panel.cacheLeft) || t0l.K5r(tick, panel.cacheRight) || !cache.top) {
                        top = this.pixelFromPrice(quote.High, panel);
                        bottom = this.pixelFromPrice(quote.Low, panel);
                        length = t0l.k5r(bottom, top);
                        cache.open = (yAxis.semiLog ? this.pixelFromPrice(quote.Open, panel) : (t0l.L5r((yAxis.high - quote.Open), yAxis.multiplier)) + yAxis.top);
                        cache.close = (yAxis.semiLog ? this.pixelFromPrice(quote.Close, panel) : (t0l.e5r((yAxis.high - quote.Close), yAxis.multiplier)) + yAxis.top);
                        if (t0l.J5r(top, t)) {
                            if (t0l.C5r(top + length, t)) {
                                cache.top = top;
                                cache.bottom = top;
                                continue;
                            }
                            length -= t0l.Q5r(t, top);
                            top = t;
                        }
                        if (t0l.F5r(top + length, b)) {
                            length -= (top + length - b);
                        }
                        cache.top = top;
                        cache.bottom = top + length;
                    }
                    var xx = Math.floor(xbase) + 0.5;
                    if (t0l.Y5r(cache.top, b) && t0l.N5r(cache.bottom, t)) {
                        context.moveTo(xx, t0l.w5r(cache.top, voffset));
                        context.lineTo(xx, cache.bottom + voffset);
                    }
                    if (t0l.o5r(cache.open, t) && t0l.M5r(cache.open, b)) {
                        context.moveTo(xx, cache.open);
                        context.lineTo(t0l.u5r(xx, hlen), cache.open);
                    }
                    if (t0l.S5r(cache.close, t) && t0l.b5r(cache.close, b)) {
                        context.moveTo(xx, cache.close);
                        context.lineTo(xx + hlen, cache.close);
                    }
                    context.stroke();
                }
                context.lineWidth = 1;
                return colors;
            }
            ;
            STXChart.prototype.plotLineChart = function (panel, quotes, field, parameters, colorFunction) {
                var skipProjections = false, skipTransform = false, noSlopes = false, tension = 0, points = [];
                if (parameters) {
                    skipProjections = parameters.skipProjections;
                    skipTransform = parameters.skipTransform;
                    noSlopes = parameters.noSlopes;
                    tension = parameters.tension;
                }
                var chart = panel.chart, context = this.chart.context, first = true, yAxis = panel.yAxis, t = yAxis.top, b = yAxis.bottom, leftTick = t0l.c5r(chart.dataSet.length, chart.scroll), lastQuote = null, colors = {}
                    , lastXY = [0, 0], candleWidth = this.layout.candleWidth, xbase = t0l.T1r(panel.left, (parameters.noSlopes ? 1 : 0.5) * candleWidth, this.micropixels, 1);
                this.startClip(panel.name);
                context.beginPath();
                for (var i = 0; t0l.H1r(i, quotes.length); i++) {
                    xbase += t0l.h1r(candleWidth, 2);
                    if (parameters.noSlopes)xbase += t0l.x1r(candleWidth, 2);
                    candleWidth = this.layout.candleWidth;
                    if (!parameters.noSlopes)xbase += t0l.U1r(candleWidth, 2);
                    var quote = quotes[i];
                    if (!quote)continue;
                    if (skipProjections && quote.projection)break;
                    if (quote.candleWidth) {
                        if (!parameters.noSlopes)xbase += t0l.D1r((quote.candleWidth - candleWidth), 2);
                        candleWidth = quote.candleWidth;
                    }
                    if (!skipTransform && quote.transform)quote = quote.transform;
                    var x = xbase, cache = quote.cache, tick = leftTick + i;
                    if (!quote[field] && t0l.B1r(quote[field], 0))continue;
                    if (t0l.m1r(tick, panel.cacheLeft) || t0l.n1r(tick, panel.cacheRight) || !cache[field]) {
                        cache[field] = (yAxis.semiLog ? this.pixelFromPrice(quote[field], panel) : (t0l.p1r((yAxis.high - quote[field]), yAxis.multiplier)) + yAxis.top);
                    }
                    if (t0l.v1r(x, panel.right))lastQuote = quote;
                    if (t0l.f1r(i, quotes.length - 1)) {
                        if (this.extendLastTick)x += t0l.i1r(candleWidth, 2);
                        if (parameters.lastTickOffset)x += parameters.lastTickOffset;
                    }
                    var y = cache[field], pattern = null;
                    if (colorFunction) {
                        var color = colorFunction(this, quote);
                        if (!color)continue;
                        if (typeof color == "object") {
                            pattern = color.pattern;
                            color = color.color;
                        }
                        if (t0l.E1r(context.strokeStyle, color)) {
                            if (!first) {
                                context.stroke();
                                context.beginPath();
                                context.moveTo(lastXY[0], lastXY[1]);
                            }
                            context.strokeStyle = color;
                            colors[color] = 1;
                        }
                    }
                    if (first) {
                        first = false;
                        if (noSlopes || t0l.q1r(leftTick, 0)) {
                            context.moveTo(i ? x : 0, y);
                            if (tension) {
                                points.push(x, y);
                            }
                            else {
                                if (pattern) {
                                    context.dashedLineTo(0, y, x, y, pattern);
                                }
                                else {
                                    context.lineTo(x, y);
                                }
                            }
                        }
                        else if (t0l.Z1r(leftTick, 0)) {
                            var baseline = chart.dataSet[leftTick];
                            if (!skipTransform && baseline.transform)baseline = baseline.transform;
                            var y0 = baseline[field];
                            if (!y0 || isNaN(y0)) {
                                context.moveTo(i ? x : 0, y);
                                if (tension) {
                                    points.push(x, y);
                                }
                            }
                            else {
                                y0 = (yAxis.semiLog ? this.pixelFromPrice(y0, panel) : (t0l.l8r((yAxis.high - y0), yAxis.multiplier)) + yAxis.top);
                                var x0 = t0l.K8r(x, candleWidth);
                                if (pattern) {
                                    context.dashedLineTo(x0, y0, x, y, pattern);
                                }
                                else {
                                    context.moveTo(x0, y0);
                                    if (tension) {
                                        points.push(x0, y0, x, y);
                                    }
                                    else {
                                        context.lineTo(x, y);
                                    }
                                }
                            }
                        }
                    }
                    else {
                        if (noSlopes) {
                            var quote1 = quotes[t0l.k8r(i, 1)];
                            if (!quote1)continue;
                            if (!skipTransform && quote1.transform)quote1 = quote1.transform;
                            if (i) {
                                if (pattern) {
                                    context.dashedLineTo(lastXY[0], lastXY[1], x, lastXY[1], pattern);
                                }
                                else {
                                    context.lineTo(x, lastXY[1]);
                                }
                                context.moveTo(x, y);
                            }
                            if (t0l.L8r(i, quotes.length - 1)) {
                                if (pattern) {
                                    context.dashedLineTo(x, y, x + candleWidth, y, pattern);
                                }
                                else {
                                    context.lineTo(x + candleWidth, y);
                                }
                            }
                        }
                        else {
                            if (pattern) {
                                context.dashedLineTo(lastXY[0], lastXY[1], x, y, pattern);
                            }
                            else {
                                if (tension) {
                                    points.push(x, y);
                                }
                                else {
                                    context.lineTo(x, y);
                                }
                            }
                        }
                    }
                    lastXY = [x, y];
                    if (t0l.e8r(i, (quotes.length - 1)) && tension) {
                        points.push(x, y);
                        plotSplinePrimitive(points, tension, context);
                    }
                }
                context.stroke();
                this.endClip();
                if (parameters.label && lastQuote) {
                    var txt;
                    if (yAxis.priceFormatter) {
                        txt = yAxis.priceFormatter(this, panel, lastQuote[field], parameters.labelDecimalPlaces);
                    }
                    else {
                        txt = this.formatYAxisPrice(lastQuote[field], panel, parameters.labelDecimalPlaces);
                    }
                    var yaxisLabelStyle = this.yaxisLabelStyle;
                    if (panel.yAxis.yaxisLabelStyle)yaxisLabelStyle = panel.yAxis.yaxisLabelStyle;
                    var labelcolor = t0l.J8r(yaxisLabelStyle, "noop") ? context.strokeStyle : null;
                    this.yAxisLabels.push({
                            src: (p5y + t0l.r6y),
                            "args": [panel, txt, lastQuote.cache[field], t0l.C8r(yaxisLabelStyle, "noop") ? "#FFFFFF" : context.strokeStyle, labelcolor]
                        }
                    );
                }
                return colors;
            }
            ;
            STXChart.prototype.plotMountainChart = function (panel, quotes, field, parameters) {
                var skipProjections = false, skipTransform = false, reverse = false, tension = 0, points = [];
                if (parameters) {
                    skipProjections = parameters.skipProjections;
                    skipTransform = parameters.skipTransform;
                    reverse = parameters.reverse;
                    tension = parameters.tension;
                }
                var chart = panel.chart, context = this.chart.context, first = true, t = panel.yAxis.top, b = panel.yAxis.bottom;
                this.startClip(panel.name);
                context.beginPath();
                var leftTick = t0l.Q8r(chart.dataSet.length, chart.scroll), firstX = null, firstY = null, yAxis = panel.yAxis, x = 0;
                for (var i = 0; t0l.F8r(i, quotes.length); i++) {
                    var quote = quotes[i];
                    if (!quote)continue;
                    if (skipProjections && quote.projection)break;
                    if (!skipTransform && quote.transform)quote = quote.transform;
                    var cache = quote.cache, tick = leftTick + i;
                    if (t0l.Y8r(tick, panel.cacheLeft) || t0l.N8r(tick, panel.cacheRight) || !cache[field]) {
                        if (!quote[field] && t0l.w8r(quote[field], 0))continue;
                        cache[field] = (yAxis.semiLog ? this.pixelFromPrice(quote[field], panel) : (t0l.o8r((yAxis.high - quote[field]), yAxis.multiplier)) + yAxis.top);
                        cache[field] += parameters.padding;
                    }
                    x = panel.left + t0l.M8r((i + 0.5), this.layout.candleWidth) + this.micropixels - 1;
                    if (t0l.u8r(i, quotes.length - 1)) {
                        if (this.extendLastTick)x += t0l.S8r(this.layout.candleWidth, 2);
                        if (parameters.lastTickOffset)x += parameters.lastTickOffset;
                    }
                    if (t0l.b8r(firstX, null))firstX = x;
                    var y = cache[field];
                    if (t0l.c8r(firstY, null))firstY = y;
                    if (first) {
                        first = false;
                        if (t0l.T7a(leftTick, 0)) {
                            context.moveTo(x, y);
                            if (tension) {
                                points.push(x, y);
                            }
                        }
                        else {
                            var baseline = chart.dataSet[leftTick];
                            if (baseline.transform)baseline = baseline.transform;
                            var y0 = baseline[field];
                            y0 = (yAxis.semiLog ? this.pixelFromPrice(y0, panel) : (t0l.W7a((yAxis.high - y0), yAxis.multiplier)) + yAxis.top);
                            firstX = t0l.a7a(x, this.layout.candleWidth);
                            context.moveTo(firstX, y0);
                            if (tension) {
                                points.push(firstX, y0, x, y);
                            }
                            else {
                                context.lineTo(x, y);
                            }
                        }
                    }
                    else {
                        if (tension) {
                            points.push(x, y);
                        }
                        else {
                            context.lineTo(x, y);
                        }
                    }
                    if (t0l.P7a(i, (quotes.length - 1)) && tension) {
                        points.push(x, y);
                        plotSplinePrimitive(points, tension, context);
                    }
                }
                context.lineTo(x, reverse ? t : b);
                context.lineTo(firstX, reverse ? t : b);
                if (reverse) {
                    if (t0l.t7a(firstY, t))firstY = t;
                }
                else {
                    if (t0l.R7a(firstY, b))firstY = b;
                }
                context.lineTo(firstX, firstY);
                context.fill();
                context.closePath();
                this.endClip();
            }
            ;
            STXChart.prototype.drawLineChart = function (panel, style, colorFunction) {
                var context = this.chart.context, c = this.canvasStyle(style);
                if (c.width && t0l.y7a(parseInt(c.width, 10), 25)) {
                    context.lineWidth = Math.max(1, STX.stripPX(c.width));
                }
                else {
                    context.lineWidth = 1;
                }
                this.canvasColor(style);
                var params = {skipProjections: true}
                    ;
                if (panel.chart.tension)params.tension = panel.chart.tension;
                if (panel.chart.lastTickOffset)params.lastTickOffset = panel.chart.lastTickOffset;
                var rc = this.plotLineChart(panel, panel.chart.dataSegment, "Close", params, colorFunction);
                context.lineWidth = 1;
                return rc;
            }
            ;
            STXChart.prototype.drawMountainChart = function (panel, style, colorFunction) {
                var context = this.chart.context;
                if (!style)style = "stx_mountain_chart";
                var c = this.canvasStyle(style);
                if (c.width && t0l.r7a(parseInt(c.width, 10), 25)) {
                    context.lineWidth = Math.max(1, STX.stripPX(c.width));
                }
                else {
                    context.lineWidth = 1;
                }
                var top = this.pixelFromPrice(panel.chart.highValue, panel);
                if (isNaN(top))top = 0;
                var backgroundColor = c.backgroundColor, color = c.color;
                if (color && !STX.isTransparent(color)) {
                    var gradient = context.createLinearGradient(0, top, 0, panel.yAxis.bottom);
                    gradient.addColorStop(0, backgroundColor);
                    gradient.addColorStop(1, color);
                    context.fillStyle = gradient;
                }
                else {
                    context.fillStyle = backgroundColor;
                }
                var params = {skipProjections: true}
                    ;
                if (c.padding)params.padding = parseInt(c.padding, 10);
                if (panel.chart.tension)params.tension = panel.chart.tension;
                if (panel.chart.lastTickOffset)params.lastTickOffset = panel.chart.lastTickOffset;
                this.plotMountainChart(panel, panel.chart.dataSegment, "Close", params);
                var strokeStyle = c.borderTopColor, rc;
                if (strokeStyle && !STX.isTransparent(strokeStyle)) {
                    context.strokeStyle = strokeStyle;
                    rc = this.plotLineChart(panel, panel.chart.dataSegment, "Close", params, colorFunction);
                }
                context.lineWidth = 1;
                return rc;
            }
            ;
            STXChart.prototype.drawWaveChart = function (panel) {
                var chart = panel.chart, quotes = chart.dataSegment, context = this.chart.context;
                this.startClip(panel.name);
                context.beginPath();
                var first = false, reset = false, t = panel.yAxis.top, b = panel.yAxis.bottom, xbase = panel.left + Math.floor(-0.5 * this.layout.candleWidth + this.micropixels);
                for (var i = 0; t0l.O7a(i, quotes.length); i++) {
                    xbase += this.layout.candleWidth;
                    var quote = quotes[i];
                    if (!quote)continue;
                    if (quote.projection)break;
                    if (quote.transform)quote = quote.transform;
                    var x = t0l.I7a(xbase, 3 * this.layout.candleWidth / 8), y = this.pixelFromPrice(quote.Open, panel);
                    if (t0l.d7a(y, t)) {
                        y = t;
                        if (reset) {
                            context.moveTo(x, y);
                            continue;
                        }
                        reset = true;
                    }
                    else if (t0l.V7a(y, b)) {
                        y = b;
                        if (reset) {
                            context.moveTo(x, y);
                            continue;
                        }
                        reset = true;
                    }
                    else {
                        reset = false;
                    }
                    if (!first) {
                        first = true;
                        var leftTick = t0l.s7a(chart.dataSet.length, chart.scroll);
                        if (t0l.g7a(leftTick, 0)) {
                            context.moveTo(x, y);
                        }
                        else if (t0l.j7a(leftTick, 0)) {
                            var baseline = chart.dataSet[t0l.X7a(leftTick, 1)];
                            if (baseline.transform)baseline = baseline.transform;
                            var y0 = baseline.Close;
                            y0 = (panel.yAxis.semiLog ? this.pixelFromPrice(y0, panel) : (t0l.z7a((panel.yAxis.high - y0), panel.yAxis.multiplier)) + t);
                            y0 = Math.min(Math.max(y0, t), b);
                            context.moveTo(panel.left + t0l.A9a((i - 1), this.layout.candleWidth) + this.micropixels, y0);
                            context.lineTo(x, y);
                        }
                        context.moveTo(x, y);
                    }
                    else {
                        context.lineTo(x, y);
                    }
                    x += t0l.G9a(this.layout.candleWidth, 4);
                    if (t0l.H9a(quote.Open, quote.Close)) {
                        y = this.pixelFromPrice(quote.Low, panel);
                        if (t0l.h9a(y, t))y = t;
                        if (t0l.x9a(y, b))y = b;
                        context.lineTo(x, y);
                        x += t0l.U9a(this.layout.candleWidth, 4);
                        y = this.pixelFromPrice(quote.High, panel);
                        if (t0l.D9a(y, t))y = t;
                        if (t0l.B9a(y, b))y = b;
                        context.lineTo(x, y);
                    }
                    else {
                        y = this.pixelFromPrice(quote.High, panel);
                        if (t0l.m9a(y, t))y = t;
                        if (t0l.n9a(y, b))y = b;
                        context.lineTo(x, y);
                        x += t0l.p9a(this.layout.candleWidth, 4);
                        y = this.pixelFromPrice(quote.Low, panel);
                        if (t0l.v9a(y, t))y = t;
                        if (t0l.f9a(y, b))y = b;
                        context.lineTo(x, y);
                    }
                    x += t0l.i9a(this.layout.candleWidth, 4);
                    y = this.pixelFromPrice(quote.Close, panel);
                    if (t0l.E9a(y, t))y = t;
                    if (t0l.q9a(y, b))y = b;
                    context.lineTo(x, y);
                }
                var c = this.canvasStyle("stx_line_chart");
                if (c.width && t0l.Z9a(parseInt(c.width, 10), 25)) {
                    context.lineWidth = Math.max(1, STX.stripPX(c.width));
                }
                else {
                    context.lineWidth = 1;
                }
                this.canvasColor("stx_line_chart");
                context.stroke();
                context.closePath();
                this.endClip();
                context.lineWidth = 1;
            }
            ;
            STXChart.prototype.updateFloatHRLabel = function (panel) {
                var arr = panel.yaxisLHS.concat(panel.yaxisRHS), cy = this.crossYActualPos ? this.crossYActualPos : this.cy;
                if (this.floatCanvas.isDirty)STX.clearCanvas(this.floatCanvas, this);
                if (t0l.l0a(this.controls.crossX.style.display, "none"))return;
                if (this.controls.crossY) {
                    var crosshairWidth = panel.width;
                    if (t0l.K0a(this.yaxisLabelStyle, "roundRectArrow"))crosshairWidth -= 7;
                    this.controls.crossY.style.left = panel.left + "px";
                    this.controls.crossY.style.width = crosshairWidth + "px";
                }
                for (var i = 0; t0l.k0a(i, arr.length); i++) {
                    var yAxis = arr[i], price = this.valueFromPixel(cy, panel, yAxis);
                    if (isNaN(price))continue;
                    if ((panel.min || t0l.L0a(panel.min, 0)) && t0l.e0a(price, panel.min))continue;
                    if ((panel.max || t0l.J0a(panel.max, 0)) && t0l.C0a(price, panel.max))continue;
                    var labelDecimalPlaces = null;
                    if (t0l.Q0a(yAxis, panel.chart.yAxis)) {
                        labelDecimalPlaces = 0;
                        if (t0l.F0a(yAxis.shadow, 1000))labelDecimalPlaces = 2;
                        if (t0l.Y0a(yAxis.shadow, 5))labelDecimalPlaces = 4;
                        if (yAxis.decimalPlaces || t0l.N0a(yAxis.decimalPlaces, 0))labelDecimalPlaces = yAxis.decimalPlaces;
                    }
                    if (yAxis.priceFormatter) {
                        price = yAxis.priceFormatter(this, panel, price, yAxis);
                    }
                    else {
                        price = this.formatYAxisPrice(price, panel, labelDecimalPlaces, yAxis);
                    }
                    var style = this.canvasStyle("stx-float-price");
                    this.createYAxisLabel(panel, price, cy, style.backgroundColor, style.color, this.floatCanvas.context, yAxis);
                    this.floatCanvas.isDirty = true;
                }
            }
            ;
            STXChart.prototype.headsUpHR = function () {
                var i6y = "HR", C8y = "Up", Z7y = "headsUpHR";
                if (this.runPrepend(Z7y, arguments))return;
                var panel = this.currentPanel;
                if (!panel)return;
                var chart = panel.chart;
                this.updateFloatHRLabel(panel);
                if (this.controls.floatDate && !STXChart.hideDates()) {
                    var bar = this.barFromPixel(this.cx), prices = chart.xaxis[bar];
                    if (prices && prices.DT) {
                        if (chart.xAxis.formatter) {
                            this.controls.floatDate.innerHTML = chart.xAxis.formatter(prices.DT);
                        }
                        else if (this.internationalizer) {
                            var str = this.internationalizer.monthDay.format(prices.DT);
                            if (!STXChart.isDailyInterval(this.layout.interval))str += a0y + this.internationalizer.hourMinute.format(prices.DT); else {
                                str = this.internationalizer.yearMonthDay.format(prices.DT);
                            }
                            this.controls.floatDate.innerHTML = str;
                        }
                        else {
                            var m = prices.DT.getMonth() + t0l.T52;
                            if (t0l.w0a(m, A9n))m = k5y + m;
                            var d = prices.DT.getDate();
                            if (t0l.o0a(d, A9n))d = k5y + d;
                            var h = prices.DT.getHours();
                            if (t0l.M0a(h, A9n))h = k5y + h;
                            var mn = prices.DT.getMinutes();
                            if (t0l.u0a(mn, A9n))mn = k5y + mn;
                            if (STXChart.isDailyInterval(this.layout.interval))this.controls.floatDate.innerHTML = m + e3y + d + e3y + prices.DT.getFullYear(); else {
                                this.controls.floatDate.innerHTML = m + e3y + d + a0y + h + w2n + mn;
                                var isSecond = (chart.xAxis.activeTimeUnit && t0l.S0a(chart.xAxis.activeTimeUnit, STX.SECOND)) || t0l.b0a(this.layout.timeUnit, R7n), isMS = (chart.xAxis.activeTimeUnit && t0l.c0a(chart.xAxis.activeTimeUnit, STX.MILLISECOND)) || t0l.T2a(this.layout.timeUnit, J7n);
                                if (isSecond || isMS) {
                                    var sec = prices.DT.getSeconds();
                                    if (t0l.W2a(sec, A9n))sec = k5y + sec;
                                    this.controls.floatDate.innerHTML += (w2n + sec);
                                    if (isMS) {
                                        var mil = prices.DT.getMilliseconds();
                                        if (t0l.a2a(mil, A9n))mil = k5y + mil;
                                        if (t0l.P2a(mil, K2n))mil = k5y + mil;
                                        this.controls.floatDate.innerHTML += (w2n + mil);
                                    }
                                }
                            }
                        }
                    }
                    else if (prices && prices.index) {
                        this.controls.floatDate.innerHTML = prices.index;
                    }
                    else {
                        this.controls.floatDate.innerHTML = R6y;
                    }
                }
                this.runAppend((N1y + E9y + B9y + n9y + D3y + C8y + i6y), arguments);
            }
            ;
            STXChart.prototype.setCrosshairColors = function () {
                return;
            }
            ;
            STXChart.prototype.magnetize = function () {
                var t7y = "Ope", o0y = "eefor", d0y = "ut", M5y = "call", o12 = "nnotati";
                this.magnetizedPrice = null;
                if (this.runPrepend("magnetize", arguments))return;
                if ((t0l.t2a(this.currentVectorParameters.vectorType, (B9y + o12 + F4y)) || t0l.R2a(this.currentVectorParameters.vectorType, (M5y + Q5y + d0y))) && STXChart.drawingLine)return;
                if (t0l.y2a(this.currentVectorParameters.vectorType, "projection"))return;
                if (t0l.r2a(this.currentVectorParameters.vectorType, (G8y + K3y + o0y + v5y)))return;
                var panel = this.currentPanel;
                if (t0l.O2a(panel.name, panel.chart.name)) {
                    var chart = panel.chart, tick = this.tickFromPixel(t0l.I2a(STXChart.crosshairX, this.left), chart);
                    if (t0l.d2a(tick, chart.dataSet.length))return;
                    var prices = chart.dataSet[tick];
                    if (!prices)return;
                    var price = this.valueFromPixel(this.cy, panel);
                    this.magnetizedPrice = prices.Close;
                    if (t0l.V2a(this.layout.chartType, "bar") || t0l.s2a(this.layout.chartType, "candle") || t0l.g2a(this.layout.chartType, "colored_bar") || t0l.j2a(this.layout.chartType, "hollow_candle") || t0l.X2a(this.layout.chartType, "volume_candle")) {
                        var fields = [(t7y + P5y), "High", "Low", "Close"], closest = 1000000000;
                        for (var i = 0; t0l.z2a(i, fields.length); i++) {
                            var fp = prices[fields[i]];
                            if (t0l.A4a(Math.abs(price - fp), closest)) {
                                closest = Math.abs(t0l.G4a(price, fp));
                                this.magnetizedPrice = fp;
                            }
                        }
                    }
                    var x = this.pixelFromTick(tick, chart), y = this.pixelFromPrice(this.magnetizedPrice, this.currentPanel), ctx = this.chart.tempCanvas.context;
                    ctx.beginPath();
                    ctx.lineWidth = 1;
                    var radius = t0l.H4a(Math.max(this.layout.candleWidth, 8), 2);
                    ctx.arc(x, y, radius, 0, t0l.h4a(2, Math.PI), false);
                    ctx.fillStyle = "#FFFFFF";
                    ctx.strokeStyle = "#000000";
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                }
                this.runAppend("magnetize", arguments);
            }
            ;
            STXChart.prototype.positionCrosshairsAtPointer = function () {
                if (!this.currentPanel)return;
                var chart = this.currentPanel.chart, rect = this.container.getBoundingClientRect();
                this.top = rect.top;
                this.left = rect.left;
                this.right = this.left + this.width;
                this.bottom = this.top + this.height;
                var tick = this.tickFromPixel(this.backOutX(STXChart.crosshairX), chart);
                this.cy = this.backOutY(STXChart.crosshairY);
                this.cx = this.backOutX(STXChart.crosshairX);
                this.controls.crossX.style.left = (t0l.x4a(this.pixelFromTick(tick, chart), 0.5)) + "px";
                this.controls.crossY.style.top = this.backOutY(STXChart.crosshairY) + "px";
                this.updateChartAccessories();
            }
            ;
            STXChart.prototype.doDisplayCrosshairs = function () {
                var D12 = "doDisplayCrosshairs";
                if (this.runPrepend(D12, arguments))return;
                if (this.displayInitialized) {
                    if (!this.layout.crosshair && (t0l.U4a(this.currentVectorParameters.vectorType, R6y) || !this.currentVectorParameters.vectorType)) {
                        this.undisplayCrosshairs();
                    }
                    else if (STX.Drawing[this.currentVectorParameters.vectorType] && (new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw) {
                        this.undisplayCrosshairs();
                    }
                    else {
                        if (t0l.D4a(this.controls.crossX.style.display, R6y)) {
                            this.controls.crossX.style.display = R6y;
                            this.controls.crossY.style.display = R6y;
                            if (this.preferences.magnet && this.currentVectorParameters.vectorType) {
                                STX.unappendClassName(this.container, O2y);
                            }
                            else {
                                STX.appendClassName(this.container, O2y);
                            }
                        }
                        if (this.controls.floatDate && !STXChart.hideDates()) {
                            this.controls.floatDate.style.display = q82;
                        }
                    }
                }
                this.runAppend(D12, arguments);
            }
            ;
            STXChart.prototype.undisplayCrosshairs = function () {
                var v12 = "undisplayCrosshairs";
                if (this.runPrepend(v12, arguments))return;
                if (this.controls.crossX) {
                    if (t0l.B4a(this.controls.crossX.style.display, X0n)) {
                        this.controls.crossX.style.display = X0n;
                        this.controls.crossY.style.display = X0n;
                    }
                }
                if (this.displayInitialized && this.controls.floatDate) {
                    this.controls.floatDate.style.display = X0n;
                }
                STX.unappendClassName(this.container, O2y);
                if (this.floatCanvas && this.floatCanvas.isDirty)STX.clearCanvas(this.floatCanvas, this);
                this.runAppend(v12, arguments);
            }
            ;
            STXChart.prototype.modalBegin = function () {
                var R2y = "modal";
                this.openDialog = R2y;
                this.undisplayCrosshairs();
            }
            ;
            STXChart.prototype.modalEnd = function () {
                this.cancelTouchSingleClick = x1y;
                this.openDialog = R6y;
                this.doDisplayCrosshairs();
            }
            ;
            STXChart.prototype.updateChartAccessories = function () {
                var E12 = "updateChartAccessories";
                if (this.runPrepend(E12, arguments))return;
                this.accessoryTimer = t0l.a1y;
                this.lastAccessoryUpdate = new Date().getTime();
                var floatDate = this.controls.floatDate;
                if (floatDate) {
                    var panel = this.currentPanel;
                    if (!panel)panel = this.chart.panel;
                    if (panel) {
                        var chart = panel.chart, tick = this.tickFromPixel(this.backOutX(STXChart.crosshairX), chart), bottom = t0l.m4a(this.xAxisAsFooter, x1y) ? t0l.G52 : t0l.n4a(this.chart.canvasHeight, panel.chart.bottom);
                        floatDate.style.left = (t0l.p4a(this.pixelFromTick(tick, chart), (floatDate.offsetWidth / t0l.l52), k2y)) + a9n;
                        floatDate.style.bottom = bottom + (a9n);
                    }
                }
                this.headsUpHR();
                this.runAppend(E12, arguments);
            }
            ;
            STXChart.prototype.mousemove = function (e$) {
                var e = e$ ? e$ : event;
                STXChart.crosshairX = e.clientX;
                STXChart.crosshairY = e.clientY;
                if (this.runPrepend(E0y, arguments))return;
                if (!this.displayInitialized)return;
                if (t0l.V4a(this.openDialog, R6y))return;
                this.mousemoveinner(e.clientX, e.clientY);
                this.runAppend(E0y, arguments);
            }
            ;
            STXChart.prototype.setResizeTimer = function (ms) {
                this.resizeDetectMS = ms;
                function closure(self) {
                    return function () {
                        if (!self.chart.canvas)return;
                        if (!STX.isAndroid) {
                            if (t0l.s4a(self.chart.canvas.height, Math.floor(self.devicePixelRatio * self.chart.container.clientHeight)) || t0l.g4a(self.chart.canvas.width, Math.floor(self.devicePixelRatio * self.chart.container.clientWidth))) {
                                self.resizeChart();
                                return;
                            }
                        }
                    }
                        ;
                }

                if (ms) {
                    if (this.resizeTimeout)window.clearInterval(this.resizeTimeout);
                    this.resizeTimeout = window.setInterval(closure(this), ms);
                }
                else {
                    if (this.resizeTimeout)window.clearInterval(this.resizeTimeout);
                    this.resizeTimeout = null;
                }
            }
            ;
            STXChart.prototype.whichYAxis = function (panel, x) {
                if (typeof x === "undefined")x = this.cx;
                if (panel) {
                    var arr = panel.yaxisLHS.concat(panel.yaxisRHS);
                    for (var i = 0; t0l.j4a(i, arr.length); i++) {
                        var yAxis = arr[i];
                        if (t0l.X4a(yAxis.left, x) && t0l.z4a(yAxis.left + yAxis.width, x))return yAxis;
                    }
                }
                return this.chart.panel.yAxis;
            }
            ;
            STXChart.prototype.mousemoveinner = function (epX, epY) {
                var f7n = "move", p4y = "oom";
                if (!this.chart.canvas)return;
                if (!STX.isAndroid && !STX.isIOS7or8) {
                    if (t0l.A6a(this.chart.canvas.height, Math.floor(this.devicePixelRatio * this.chart.container.clientHeight)) || t0l.G6a(this.chart.canvas.width, Math.floor(this.devicePixelRatio * this.chart.container.clientWidth))) {
                        this.resizeChart();
                        return;
                    }
                }
                var value;
                if (this.runPrepend("mousemoveinner", arguments))return;
                var rect = this.container.getBoundingClientRect();
                this.top = rect.top;
                this.left = rect.left;
                this.right = this.left + this.width;
                this.bottom = this.top + this.height;
                STXChart.crosshairX = epX;
                STXChart.crosshairY = epY;
                var cy = this.cy = this.crossYActualPos = this.backOutY(STXChart.crosshairY), cx = this.cx = this.backOutX(STXChart.crosshairX);
                this.currentPanel = this.whichPanel(cy);
                if (!this.currentPanel)this.currentPanel = this.chart.panel;
                if (!this.currentPanel)return;
                var chart = this.currentPanel.chart;
                if (chart.dataSet) {
                    this.crosshairTick = this.tickFromPixel(cx, chart);
                    value = this.valueFromPixel(cy, this.currentPanel);
                    var chField = t0l.H6a(this.currentPanel.name, "chart") ? this.preferences.horizontalCrosshairField : this.currentPanel.horizontalCrosshairField;
                    if (chField && t0l.h6a(this.crosshairTick, chart.dataSet.length) && this.crosshairTick > -1) {
                        value = chart.dataSet[this.crosshairTick][chField];
                        this.crossYActualPos = this.pixelFromPriceTransform(value, this.currentPanel);
                    }
                    this.crosshairValue = this.adjustIfNecessary(this.currentPanel, this.crosshairTick, value);
                }
                if (t0l.x6a(STXChart.crosshairX, this.left) && t0l.U6a(STXChart.crosshairX, this.right) && t0l.D6a(STXChart.crosshairY, this.top) && t0l.B6a(STXChart.crosshairY, this.bottom)) {
                    STXChart.insideChart = true;
                }
                else {
                    STXChart.insideChart = false;
                }
                this.overXAxis = t0l.m6a(STXChart.crosshairY, this.top + this.chart.panel.yAxis.bottom) && t0l.n6a(STXChart.crosshairY, this.top + this.chart.panel.bottom) && STXChart.insideChart;
                this.overYAxis = (t0l.p6a(this.cx, this.currentPanel.right) || t0l.v6a(this.cx, this.currentPanel.left)) && STXChart.insideChart;
                if (this.overXAxis || this.overYAxis || (!STXChart.insideChart && !this.grabbingScreen)) {
                    this.undisplayCrosshairs();
                    if (!this.overXAxis && !this.overYAxis)return;
                }
                if (!this.displayCrosshairs && !STXChart.resizingPanel) {
                    this.undisplayCrosshairs();
                    return;
                }
                var bHandle = this.controls.baselineHandle;
                if (this.repositioningBaseline) {
                    panel = this.panels[this.chart.panel.name];
                    this.chart.baseline.userLevel = this.adjustIfNecessary(panel, this.crosshairTick, this.valueFromPixelUntransform(this.backOutY(STXChart.crosshairY), panel));
                    if (t0l.f6a(Date.now() - this.repositioningBaseline.lastDraw, 100)) {
                        this.draw();
                        this.repositioningBaseline.lastDraw = Date.now();
                    }
                    return;
                }
                if (this.grabbingScreen && !STXChart.resizingPanel) {
                    if (this.anyHighlighted) {
                        STX.clearCanvas(this.chart.tempCanvas, this);
                        this.anyHighlighted = false;
                        var n;
                        for (n in this.overlays) {
                            this.overlays[n].highlight = false;
                        }
                        for (n in chart.series) {
                            chart.series[n].highlight = false;
                        }
                        this.displaySticky();
                    }
                    if (this.preferences.magnet && this.currentVectorParameters.vectorType) {
                        STX.clearCanvas(this.chart.tempCanvas, this);
                    }
                    if (this.grabStartX == -1) {
                        this.grabStartX = STXChart.crosshairX;
                        this.grabStartScrollX = chart.scroll;
                    }
                    if (this.grabStartY == -1) {
                        this.grabStartY = STXChart.crosshairY;
                        this.grabStartScrollY = chart.panel.yAxis.scroll;
                    }
                    var dx = t0l.i6a(STXChart.crosshairX, this.grabStartX), dy = t0l.E6a(STXChart.crosshairY, this.grabStartY);
                    if (t0l.q6a(dx, 0) && t0l.Z6a(dy, 0))return;
                    if (t0l.l3a(Math.abs(dx) + Math.abs(dy), 5))this.grabOverrideClick = true;
                    var push;
                    if (this.allowZoom && t0l.K3a(this.grabMode, "pan") && (t0l.k3a(this.grabMode.indexOf((e2n + p4y)), 0) || this.ctrl || this.overXAxis || this.overYAxis)) {
                        if (t0l.L3a(this.grabMode, "")) {
                            if (this.overXAxis)this.grabMode = "zoom-x"; else if (this.overYAxis)this.grabMode = "zoom-y";
                        }
                        if (t0l.e3a(this.grabMode, "zoom-x"))dy = 0; else if (t0l.J3a(this.grabMode, "zoom-y"))dx = 0;
                        push = t0l.C3a(dx, 25);
                        var centerMe = true;
                        if (t0l.Q3a(chart.scroll, chart.maxTicks))centerMe = false;
                        var newCandleWidth = this.grabStartCandleWidth + push;
                        if (t0l.F3a(newCandleWidth, this.minimumCandleWidth))newCandleWidth = this.minimumCandleWidth;
                        var pct = t0l.Y3a((this.layout.candleWidth - newCandleWidth), this.layout.candleWidth);
                        if (t0l.N3a(pct, 0.1)) {
                            newCandleWidth = t0l.w3a(this.layout.candleWidth, 0.9);
                        }
                        else if (pct < -0.1) {
                            newCandleWidth = t0l.o3a(this.layout.candleWidth, 1.1);
                        }
                        if (STX.ipad) {
                            if (t0l.M3a(Math.round((this.chart.width / this.layout.candleWidth) - 0.499) - 1, STXChart.ipadMaxTicks) && t0l.u3a(Math.round((this.chart.width / newCandleWidth) - 0.499) - 1, STXChart.ipadMaxTicks))return;
                        }
                        var newMaxTicks;
                        if (this.pinchingCenter) {
                            var x = this.backOutX(this.pinchingCenter), tick1 = this.tickFromPixel(x, chart);
                            this.setCandleWidth(newCandleWidth, chart);
                            var newTick = this.tickFromPixel(x, chart);
                            chart.scroll += Math.floor((t0l.S3a(newTick, tick1)));
                        }
                        else if (centerMe) {
                            newMaxTicks = Math.round(t0l.b3a((this.chart.width / newCandleWidth), 0.499));
                            if (t0l.c3a(newMaxTicks, chart.maxTicks)) {
                                this.setCandleWidth(newCandleWidth, chart);
                                chart.scroll += Math.round(t0l.T5a((newMaxTicks - chart.maxTicks), 2));
                            }
                        }
                        else {
                            newMaxTicks = Math.round(t0l.W5a((this.chart.width / newCandleWidth), 0.499));
                            if (t0l.a5a(newMaxTicks, Math.round((this.chart.width / this.layout.candleWidth) - 0.499))) {
                                this.setCandleWidth(newCandleWidth, chart);
                                var wsInTicks = Math.round(t0l.P5a(this.preferences.whitespace, this.layout.candleWidth));
                                chart.scroll = t0l.t5a(chart.maxTicks, wsInTicks);
                            }
                        }
                        this.layout.span = null;
                        var yAxis = this.whichYAxis(this.grabbingPanel, this.cx);
                        if (this.overYAxis) {
                            yAxis.zoom = Math.round(this.grabStartZoom + dy);
                            if (t0l.R5a(this.grabStartZoom, yAxis.height)) {
                                if (t0l.y5a(yAxis.zoom, yAxis.height))yAxis.zoom = t0l.r5a(yAxis.height, 1);
                            }
                            else {
                                if (t0l.O5a(yAxis.zoom, yAxis.height))yAxis.zoom = yAxis.height + 1;
                            }
                        }
                    }
                    else {
                        if (this.allowScroll) {
                            if (t0l.I5a(Math.abs(dy), this.yTolerance)) {
                                if (!this.yToleranceBroken) {
                                    dy = 0;
                                    if (t0l.d5a(dx, 0))return;
                                }
                            }
                            else {
                                this.yToleranceBroken = true;
                            }
                            this.grabMode = "pan";
                            push = Math.round(t0l.V5a(dx, this.layout.candleWidth));
                            this.microscroll = t0l.s5a(push, (dx / this.layout.candleWidth));
                            this.micropixels = this.layout.candleWidth * this.microscroll * -1;
                            if (this.shift)push *= 5;
                            chart.scroll = this.grabStartScrollX + push;
                            if (t0l.g5a(chart.scroll, 1))chart.scroll = 1;
                            if (t0l.j5a(chart.scroll, chart.maxTicks)) {
                                this.preferences.whitespace = this.initialWhitespace;
                            }
                            else {
                                this.preferences.whitespace = t0l.X5a((chart.maxTicks - chart.scroll), this.layout.candleWidth);
                            }
                            if (t0l.z5a(this.currentPanel.name, chart.name)) {
                                this.chart.panel.yAxis.scroll = this.grabStartScrollY + dy;
                            }
                        }
                        this.dispatch((f7n), {
                                stx: this,
                                panel: this.currentPanel,
                                x: this.cx,
                                y: this.cy,
                                grab: this.grabbingScreen
                            }
                        );
                    }
                    var clsrFunc = function (stx) {
                            return function () {
                                stx.draw();
                            }
                                ;
                        }
                        ;
                    if (STXChart.useAnimation) {
                        window.requestAnimationFrame(clsrFunc(this));
                    }
                    else {
                        this.draw();
                    }
                    if (this.activeDrawing) {
                        STX.clearCanvas(this.chart.tempCanvas, this);
                        this.activeDrawing.render(this.chart.tempCanvas.context);
                        this.activeDrawing.measure();
                    }
                    this.undisplayCrosshairs();
                    return;
                }
                else {
                    this.grabMode = "";
                }
                this.grabbingPanel = this.currentPanel;
                if (this.overXAxis || this.overYAxis)return;
                this.controls.crossX.style.left = (t0l.A1a(this.pixelFromTick(this.crosshairTick, chart), 0.5)) + "px";
                this.controls.crossY.style.top = this.crossYActualPos + "px";
                this.setCrosshairColors();
                if (STXChart.insideChart && !STXChart.resizingPanel) {
                    if (!STX.Drawing[this.currentVectorParameters.vectorType] || !(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw) {
                        this.doDisplayCrosshairs();
                    }
                    if (t0l.G1a(this.accessoryTimer, null))clearTimeout(this.accessoryTimer);
                    if (STXChart.drawingLine || !STX.touchDevice) {
                        this.updateChartAccessories();
                    }
                    else {
                        if (t0l.H1a(new Date().getTime() - this.lastAccessoryUpdate, 100))this.updateChartAccessories();
                        this.accessoryTimer = setTimeout((function (stx) {
                                return function () {
                                    stx.updateChartAccessories();
                                }
                                    ;
                            })(this), 10);
                    }
                }
                else {
                    this.undisplayCrosshairs();
                }
                var panel;
                if (this.repositioningDrawing) {
                    panel = this.panels[this.repositioningDrawing.panelName];
                    value = this.adjustIfNecessary(panel, this.crosshairTick, this.valueFromPixelUntransform(this.backOutY(STXChart.crosshairY), panel));
                    if (this.preferences.magnet && this.magnetizedPrice && t0l.h1a(panel.name, panel.chart.name)) {
                        value = this.adjustIfNecessary(panel, this.crosshairTick, this.magnetizedPrice);
                    }
                    STX.clearCanvas(this.chart.tempCanvas, this);
                    this.repositioningDrawing.reposition(this.chart.tempCanvas.context, this.repositioningDrawing.repositioner, this.crosshairTick, value);
                    if (this.repositioningDrawing.measure)this.repositioningDrawing.measure();
                }
                else if (STXChart.drawingLine) {
                    if (this.activeDrawing) {
                        panel = this.panels[this.activeDrawing.panelName];
                        value = this.adjustIfNecessary(panel, this.crosshairTick, this.valueFromPixelUntransform(this.backOutY(STXChart.crosshairY), panel));
                        if (this.preferences.magnet && this.magnetizedPrice && t0l.x1a(panel.name, panel.chart.name)) {
                            value = this.adjustIfNecessary(panel, this.crosshairTick, this.magnetizedPrice);
                        }
                        STX.clearCanvas(this.chart.tempCanvas, this);
                        this.activeDrawing.move(this.chart.tempCanvas.context, this.crosshairTick, value);
                        if (this.activeDrawing.measure)this.activeDrawing.measure();
                    }
                }
                else if (STXChart.resizingPanel) {
                    this.resizePanels();
                    this.drawTemporaryPanel();
                }
                else if (STXChart.insideChart) {
                    this.findHighlights();
                }
                if (STXChart.insideChart) {
                    this.dispatch("move", {
                            stx: this,
                            panel: this.currentPanel,
                            x: this.cx,
                            y: this.cy,
                            grab: this.grabbingScreen
                        }
                    );
                    this.findHighlights();
                }
                if (this.preferences.magnet && this.currentVectorParameters.vectorType) {
                    if (!STXChart.drawingLine && !this.anyHighlighted)STX.clearCanvas(this.chart.tempCanvas);
                    this.magnetize();
                }
                this.runAppend("mousemoveinner", arguments);
            }
            ;
            STXChart.prototype.findHighlights = function (isTap, clearOnly) {
                var A0y = "eri", radius = 10;
                if (isTap)radius = 30;
                var cy = this.cy, cx = this.cx;
                if (!this.currentPanel)return;
                var chart = this.currentPanel.chart;
                this.anyHighlighted = false;
                if (this.preferences.magnet && !this.activeDrawing) {
                    STX.clearCanvas(this.chart.tempCanvas, this);
                }
                var somethingChanged = false, drawingToMeasure = null, stickyArgs = ["", "", true, null, "drawing"], box = {
                        x0: this.tickFromPixel(t0l.U1a(cx, radius), chart),
                        x1: this.tickFromPixel(cx + radius, chart),
                        y0: this.valueFromPixelUntransform(t0l.D1a(cy, radius), this.currentPanel),
                        y1: this.valueFromPixelUntransform(cy + radius, this.currentPanel)
                    }
                    ;
                for (var i = 0; t0l.B1a(i, this.drawingObjects.length); i++) {
                    var drawing = this.drawingObjects[i];
                    if (drawing.permanent)continue;
                    var prevHighlight = drawing.highlighted, highlightMe = (t0l.m1a(drawing.panelName, this.currentPanel.name));
                    drawing.repositioner = drawing.intersected(this.crosshairTick, this.crosshairValue, box);
                    highlightMe = highlightMe && drawing.repositioner;
                    if (!clearOnly && highlightMe) {
                        if (prevHighlight) {
                            drawingToMeasure = drawing;
                        }
                        else if (t0l.n1a(prevHighlight, drawing.highlight(true))) {
                            if (!drawingToMeasure)drawingToMeasure = drawing;
                            somethingChanged = true;
                        }
                        this.anyHighlighted = true;
                    }
                    else {
                        if (t0l.p1a(prevHighlight, drawing.highlight(false))) {
                            somethingChanged = true;
                        }
                    }
                }
                var first = false, n, o, series;
                for (n in this.overlays) {
                    o = this.overlays[n];
                    o.prev = o.highlight;
                    o.highlight = false;
                }
                for (n in chart.seriesRenderers) {
                    var r = chart.seriesRenderers[n];
                    for (var j = 0; t0l.v1a(j, r.seriesParams.length); j++) {
                        series = r.seriesParams[j];
                        series.prev = series.highlight;
                        series.highlight = false;
                    }
                }
                if (!clearOnly) {
                    var bar = this.barFromPixel(cx);
                    if (t0l.f1a(bar, chart.dataSegment.length)) {
                        var y;
                        for (n in this.overlays) {
                            o = this.overlays[n];
                            if (t0l.i1a(o.panel, this.currentPanel.name))continue;
                            if (o.libraryEntry.isHighlighted && o.libraryEntry.isHighlighted(this, cx, cy)) {
                                o.highlight = true;
                                this.anyHighlighted = true;
                                continue;
                            }
                            var quote = chart.dataSegment[bar];
                            if (!quote)continue;
                            for (var out in this.overlays[n].outputMap) {
                                var val = quote[out];
                                y = 0;
                                if (t0l.E1a(this.currentPanel.name, chart.name)) {
                                    y = this.pixelFromPriceTransform(val, this.currentPanel);
                                }
                                else {
                                    y = this.pixelFromPrice(val, this.currentPanel);
                                }
                                if (t0l.q1a(cy - radius, y) && t0l.Z1a(cy + radius, y)) {
                                    o.highlight = true;
                                    this.anyHighlighted = true;
                                    break;
                                }
                            }
                            if (o.highlight)break;
                        }
                        for (n in chart.seriesRenderers) {
                            var renderer = chart.seriesRenderers[n];
                            if (!renderer.params.highlightable)continue;
                            for (var m = 0; t0l.l8a(m, renderer.seriesParams.length); m++) {
                                series = renderer.seriesParams[m];
                                y = renderer.caches[series.field] && renderer.caches[series.field][bar];
                                if (!y && t0l.K8a(y, 0))continue;
                                if (t0l.k8a(cy - radius, y) && t0l.L8a(cy + radius, y)) {
                                    series.highlight = true;
                                    this.anyHighlighted = true;
                                }
                                else if ((t0l.e8a(renderer.params.subtype, "step") || t0l.J8a(series.type, "step")) && t0l.C8a(bar, 0)) {
                                    var py = renderer.caches[series.field] && renderer.caches[series.field][t0l.Q8a(bar, 1)];
                                    if ((py || t0l.F8a(py, 0)) && (t0l.Y8a(cy, y) && t0l.N8a(cy, py)) || (t0l.w8a(cy, y) && t0l.o8a(cy, py))) {
                                        series.highlight = true;
                                        this.anyHighlighted = true;
                                    }
                                }
                            }
                        }
                    }
                }
                for (n in this.overlays) {
                    o = this.overlays[n];
                    if (o.highlight) {
                        this.anyHighlighted = true;
                        stickyArgs = [o.inputs.display ? o.inputs.display : o.name, null, null, o.permanent, "study"];
                        drawingToMeasure = null;
                    }
                    if (t0l.M8a(o.prev, o.highlight))somethingChanged = true;
                }
                for (n in chart.seriesRenderers) {
                    var r2 = chart.seriesRenderers[n];
                    if (!r2.params.highlightable)continue;
                    for (var m2 = 0; t0l.u8a(m2, r2.seriesParams.length); m2++) {
                        series = r2.seriesParams[m2];
                        if (series.highlight) {
                            this.anyHighlighted = true;
                            stickyArgs = [series.display, series.color, false, series.permanent, (D3y + A0y + g0y)];
                            drawingToMeasure = null;
                        }
                        if (t0l.S8a(series.prev, series.highlight))somethingChanged = true;
                    }
                }
                if (somethingChanged) {
                    this.draw();
                    this.displaySticky.apply(this, stickyArgs);
                    this.clearMeasure();
                    if (drawingToMeasure)drawingToMeasure.measure();
                }
                if (!this.anyHighlighted) {
                    this.setMeasure();
                }
            }
            ;
            STXChart.prototype.positionSticky = function (m) {
                var top = Math.max(t0l.b8a(this.cy, m.offsetHeight, g9n), t0l.G52), right = Math.min(t0l.l7N(this.chart.canvasWidth, (this.cx - l0n)), t0l.K7N(this.chart.canvasWidth, m.offsetWidth));
                m.style.top = top + a9n;
                m.style.right = right + a9n;
            }
            ;
            STXChart.prototype.displaySticky = function (message, backgroundColor, forceShow, noDelete, type) {
                var G2n = "rightclick_", m = this.controls.mSticky;
                if (!m)return;
                var mi = m.children[t0l.G52];
                if (!mi)return;
                var overlayTrashCan = m.children[t0l.T52].children[t0l.G52], mouseDeleteInstructions = m.children[t0l.T52].children[t0l.T52];
                if (!forceShow && !message) {
                    mi.innerHTML = R6y;
                    m.style.display = X0n;
                    if (STX.touchDevice && overlayTrashCan) {
                        overlayTrashCan.style.display = X0n;
                    }
                    else if (!STX.touchDevice && mouseDeleteInstructions) {
                        mouseDeleteInstructions.style.display = X0n;
                    }
                }
                else {
                    if (!message)message = R6y;
                    if (forceShow && !message) {
                        mi.style.backgroundColor = R6y;
                        mi.style.color = R6y;
                        mi.style.display = X0n;
                    }
                    else if (backgroundColor) {
                        mi.style.backgroundColor = backgroundColor;
                        mi.style.color = STX.chooseForegroundColor(backgroundColor);
                        mi.style.display = u9y;
                    }
                    else {
                        mi.style.backgroundColor = R6y;
                        mi.style.color = R6y;
                        mi.style.display = u9y;
                    }
                    mi.innerHTML = message;
                    if (type)m.children[t0l.T52].className = G2n + type;
                    m.style.display = u9y;
                    this.positionSticky(m);
                    if (noDelete) {
                        overlayTrashCan.style.display = X0n;
                        mouseDeleteInstructions.style.display = X0n;
                    }
                    else if (STX.touchDevice && overlayTrashCan) {
                        overlayTrashCan.style.display = u9y;
                        mouseDeleteInstructions.style.display = X0n;
                    }
                    else if (!STX.touchDevice && mouseDeleteInstructions) {
                        mouseDeleteInstructions.style.display = q82;
                    }
                }
            }
            ;
            STXChart.prototype.setMeasure = function (price1, price2, tick1, tick2, hover) {
                var g3y = "measureLit", x7y = "Bars", m4y = "setMeasure";
                if (this.runPrepend(m4y, arguments))return;
                var m = $$(o9n), message = R6y;
                if (!price1) {
                    if (m && t0l.k7N(m.className, G2y))m.className = G2y;
                    if (!this.anyHighlighted && t0l.L7N(this.currentVectorParameters.vectorType, R6y))this.clearMeasure();
                }
                else {
                    var distance = t0l.e7N(Math.round(Math.abs(price1 - price2) * this.chart.roundit), this.chart.roundit);
                    if (this.internationalizer) {
                        message += this.internationalizer.numbers.format(distance);
                    }
                    else {
                        message += distance;
                    }
                    var pct = t0l.J7N((price2 - price1), price1);
                    if (t0l.C7N(Math.abs(pct), t2y)) {
                        pct = Math.round(t0l.Q7N(pct, K2n));
                    }
                    else if (t0l.F7N(Math.abs(pct), m52)) {
                        pct = t0l.Y7N(Math.round(pct * o0n), A9n);
                    }
                    else {
                        pct = t0l.N7N(Math.round(pct * O0n), K2n);
                    }
                    if (this.internationalizer) {
                        pct = this.internationalizer.percent.format(t0l.w7N(pct, K2n));
                    }
                    else {
                        pct = pct + D1y;
                    }
                    message += w7y + pct + Q8y;
                    var ticks = Math.abs(t0l.o7N(tick2, tick1));
                    ticks = Math.round(ticks) + t0l.T52;
                    var barsStr = this.translateIf(x7y);
                    message += a0y + ticks + a0y + barsStr;
                    if (m) {
                        if (t0l.M7N(m.className, g3y))m.className = g3y;
                        m.innerHTML = message;
                    }
                }
                if (this.activeDrawing)return;
                m = this.controls.mSticky;
                if (m) {
                    if (hover) {
                        m.style.display = u9y;
                        m.children[t0l.G52].style.display = u9y;
                        if (price1) {
                            m.children[t0l.G52].innerHTML = message;
                        }
                        this.positionSticky(m);
                    }
                    else {
                        m.style.display = X0n;
                        m.children[t0l.G52].innerHTML = R6y;
                    }
                }
                this.runAppend(m4y, arguments);
            }
            ;
            STXChart.prototype.clearMeasure = function () {
                var m = $$(o9n);
                if (m) {
                    if (t0l.u7N(m.className, G2y))m.className = G2y;
                    m.innerHTML = R6y;
                }
            }
            ;
            STXChart.prototype.drawTemporaryPanel = function () {
                var y9n = "stx_panel_drag", borderEdge = Math.round(t0l.S7N(STXChart.resizingPanel.right, t0l.z32)) + k2y;
                STX.clearCanvas(this.chart.tempCanvas, this);
                var y = t0l.b7N(STXChart.crosshairY, this.top);
                this.plotLine(STXChart.resizingPanel.left, borderEdge, y, y, this.canvasStyle(y9n), e12, this.chart.tempCanvas.context, P0n, {}
                );
                STXChart.resizingPanel.handle.style.top = (t0l.c7N(y, STXChart.resizingPanel.handle.offsetHeight / t0l.l52)) + a9n;
            }
            ;
            STXChart.prototype.setTrashCan = function () {
                if (STX.touchDevice) {
                    var m = this.controls.mSticky;
                    if (m) {
                        m.style.display = u9y;
                        m.children[t0l.G52].style.display = X0n;
                        m.children[t0l.T52].style.display = u9y;
                        if (m.children[t0l.l52])m.children[t0l.l52].style.display = X0n;
                        m.style.top = (t0l.T9N(this.backOutY(STXChart.crosshairY), g9n)) + a9n;
                        m.style.right = t0l.W9N(this.chart.canvasWidth, (this.backOutX(STXChart.crosshairX) - l0n), a9n);
                    }
                }
            }
            ;
            STXChart.prototype.pixelFromBar = function (bar, chart) {
                if (!chart)chart = this.chart;
                var x = t0l.G52;
                if (this.chart.dataSegment && this.chart.dataSegment[bar] && this.chart.dataSegment[bar].leftOffset) {
                    x = this.chart.dataSegment[bar].leftOffset;
                }
                else {
                    x = t0l.L9N((bar + k2y), this.layout.candleWidth);
                }
                x = chart.panel.left + Math.floor(x + this.micropixels) - t0l.T52;
                return x;
            }
            ;
            STXChart.prototype.barFromPixel = function (x, chart) {
                if (!chart)chart = this.chart;
                if (t0l.e9N(this.layout.chartType, "volume_candle")) {
                    var pixel = t0l.J9N(x, chart.panel.left, this.micropixels), mult = 2, bar = Math.round(t0l.D9N(this.chart.dataSegment.length, mult)), rightofLastTick = this.chart.dataSegment[t0l.B9N(this.chart.dataSegment.length, 1)].leftOffset + t0l.m9N(this.chart.dataSegment[this.chart.dataSegment.length - 1].candleWidth, 2);
                    if (t0l.n9N(pixel, rightofLastTick)) {
                        return this.chart.dataSegment.length + Math.floor(t0l.p9N((x - rightofLastTick - chart.panel.left - this.micropixels), this.layout.candleWidth));
                    }
                    else {
                        for (var i = 1; t0l.v9N(i, this.chart.dataSegment.length); i++) {
                            mult *= 2;
                            if (!this.chart.dataSegment[bar])break;
                            var left = t0l.f9N(this.chart.dataSegment[bar].leftOffset, this.chart.dataSegment[bar].candleWidth / 2), right = this.chart.dataSegment[bar].leftOffset + t0l.i9N(this.chart.dataSegment[bar].candleWidth, 2);
                            if (t0l.E9N(bar, 0) || (t0l.q9N(pixel, left) && t0l.Z9N(pixel, right)))break; else if (t0l.l0N(pixel, left))bar -= Math.max(1, Math.round(t0l.K0N(this.chart.dataSegment.length, mult))); else bar += Math.max(1, Math.round(t0l.k0N(this.chart.dataSegment.length, mult)));
                            bar = Math.max(0, Math.min(t0l.L0N(this.chart.dataSegment.length, 1), bar));
                        }
                        if (!this.chart.dataSegment[bar]) {
                            for (i = 0; t0l.e0N(i, this.chart.dataSegment.length); i++) {
                                if (!this.chart.dataSegment[i])continue;
                                if (t0l.J0N(pixel, this.chart.dataSegment[i].leftOffset - this.chart.dataSegment[i].candleWidth / 2))return Math.max(0, t0l.C0N(i, 1)); else if (t0l.Q0N(pixel, this.chart.dataSegment[i].leftOffset + this.chart.dataSegment[i].candleWidth / 2))return i; else if (t0l.F0N(pixel, this.chart.dataSegment[i].leftOffset + this.chart.dataSegment[i].candleWidth / 2))return i + 1;
                            }
                        }
                    }
                    return bar;
                }
                else {
                    return Math.floor(t0l.Y0N((x - chart.panel.left - this.micropixels), this.layout.candleWidth));
                }
            }
            ;
            STXChart.prototype.tickFromPixel = function (x, chart) {
                if (!chart)chart = this.chart;
                var tick = t0l.N0N(chart.dataSet.length, chart.scroll, 1);
                if (t0l.v0N(this.layout.chartType, "volume_candle")) {
                    tick += this.barFromPixel(x, chart);
                }
                else {
                    tick += Math.floor(t0l.f0N((x - chart.panel.left - this.micropixels), this.layout.candleWidth));
                }
                return tick;
            }
            ;
            STXChart.prototype.pixelFromTick = function (tick, chart) {
                if (!chart)chart = this.chart;
                var bar = t0l.i0N(tick, chart.dataSet.length, chart.scroll, 1);
                if (this.chart.dataSegment && this.chart.dataSegment[bar] && this.chart.dataSegment[bar].leftOffset) {
                    return chart.panel.left + Math.floor(this.chart.dataSegment[bar].leftOffset + this.micropixels) - 1;
                }
                else {
                    var rightOffset = 0, dsTicks = 0;
                    if (this.chart.dataSegment && this.chart.dataSegment[t0l.S0N(this.chart.dataSegment.length, 1)] && this.chart.dataSegment[t0l.b0N(this.chart.dataSegment.length, 1)].leftOffset) {
                        if (t0l.c0N(this.chart.dataSegment.length, tick - chart.dataSet.length + chart.scroll)) {
                            rightOffset = t0l.T2N(this.chart.dataSegment[this.chart.dataSegment.length - 1].leftOffset, this.chart.dataSegment[this.chart.dataSegment.length - 1].candleWidth / 2);
                            dsTicks = this.chart.dataSegment.length;
                        }
                    }
                    return rightOffset + chart.panel.left + Math.floor(t0l.W2N((tick - dsTicks - chart.dataSet.length + chart.scroll - 0.5), this.layout.candleWidth) + this.micropixels) - 1;
                }
            }
            ;
            STXChart.prototype.pixelFromDate = function (date, chart) {
                return this.pixelFromTick(this.tickFromDate(date, chart), chart);
            }
            ;
            STXChart.prototype.priceFromPixel = function (y, panel, yAxis) {
                if (!panel)panel = this.chart.panel;
                var chart = panel.chart, yax = yAxis ? yAxis : panel.yAxis;
                y = t0l.a2N(yax.bottom, y);
                var price = yax.low + (t0l.P2N(y, yax.multiplier));
                if (yax.semiLog) {
                    var logPrice = yax.logLow + (t0l.t2N(y, yax.logShadow, yax.height));
                    price = Math.pow(10, logPrice);
                }
                return price;
            }
            ;
            STXChart.prototype.valueFromPixel = function (y, panel, yAxis) {
                if (!panel)panel = this.whichPanel(y);
                var p = this.priceFromPixel(y, panel, yAxis);
                return p;
            }
            ;
            STXChart.prototype.valueFromPixelUntransform = function (y, panel, yAxis) {
                if (!panel)panel = this.whichPanel(y);
                if (!panel) {
                    if (t0l.C2N(y, t0l.G52)) {
                        panel = this.panels[STX.first(this.panels)];
                    }
                    else {
                        panel = this.panels[STX.last(this.panels)];
                    }
                }
                var p = this.priceFromPixel(y, panel, yAxis);
                if (panel.chart.untransformFunc && t0l.Q2N(panel.name, panel.chart.name)) {
                    p = panel.chart.untransformFunc(this, panel.chart, p);
                }
                return p;
            }
            ;
            STXChart.prototype.pixelFromPriceTransform = function (price, panel, yAxis) {
                if (panel.chart.transformFunc)price = panel.chart.transformFunc(this, panel.chart, price, yAxis);
                return this.pixelFromPrice(price, panel, yAxis);
            }
            ;
            STXChart.prototype.pixelFromPrice = function (price, panel, yAxis) {
                if (!panel)panel = this.chart.panel;
                var yax = yAxis ? yAxis : panel.yAxis, y = t0l.F2N((yax.high - price), yax.multiplier);
                if (yax.semiLog) {
                    var p = Math.max(price, 0), logPrice = t0l.Y2N(Math.log(p), Math.LN10), height = yax.height;
                    y = t0l.N2N(height, height * (logPrice - yax.logLow) / yax.logShadow);
                }
                y += yax.top;
                return y;
            }
            ;
            STXChart.prototype.pixelFromValueAdjusted = function (panel, tick, value, yAxis) {
                if (this.layout.adj || !this.charts[panel.name])return this.pixelFromPriceTransform(value, panel, yAxis);
                var a = Math.round(tick), ratio;
                if (t0l.w2N(a, 0) && t0l.o2N(a, panel.chart.dataSet.length) && (ratio = panel.chart.dataSet[a].ratio)) {
                    return this.pixelFromPriceTransform(t0l.M2N(value, ratio), panel, yAxis);
                }
                return this.pixelFromPriceTransform(value, panel, yAxis);
            }
            ;
            STXChart.prototype.adjustIfNecessary = function (panel, tick, value) {
                if (this.layout.adj)return value;
                if (!panel || !this.charts[panel.name])return value;
                var a = Math.round(tick), ratio;
                if (t0l.u2N(a, 0) && t0l.S2N(a, panel.chart.dataSet.length) && (ratio = panel.chart.dataSet[a].ratio)) {
                    return t0l.b2N(value, ratio);
                }
                return value;
            }
            ;
            STXChart.prototype.setTransform = function (chart, transformFunction, untransformFunction) {
                chart.transformFunc = transformFunction;
                chart.untransformFunc = untransformFunction;
            }
            ;
            STXChart.prototype.unsetTransform = function (chart) {
                delete  chart.transformFunc;
                delete  chart.untransformFunc;
                for (var i = 0; t0l.c2N(i, chart.dataSet.length); i++) {
                    chart.dataSet[i].transform = null;
                }
            }
            ;
            STXChart.prototype.undo = function () {
                var C4n = "rawin", A9y = "ir_d", S32 = "stx_cr";
                if (this.runPrepend(V6y, arguments))return;
                if (this.activeDrawing) {
                    this.activeDrawing.abort();
                    this.activeDrawing = t0l.a1y;
                    STX.clearCanvas(this.chart.tempCanvas, this);
                    this.draw();
                    STX.swapClassName(this.controls.crossX, p7y, H9y);
                    STX.swapClassName(this.controls.crossY, p7y, (S32 + Q5y + D3y + D3y + N1y + B9y + A9y + C4n + R8y));
                    STXChart.drawingLine = P0n;
                }
                this.runAppend(V6y, arguments);
            }
            ;
            STXChart.prototype.undoStamp = function (before, after) {
                var q3y = "undoStamp";
                this.undoStamps.push(before);
                this.dispatch(q3y, {before: before, after: after}
                );
            }
            ;
            STXChart.prototype.undoLast = function () {
                if (this.activeDrawing) {
                    this.undo();
                }
                else {
                    if (this.undoStamps.length) {
                        this.drawingObjects = this.undoStamps.pop();
                        this.changeOccurred("vector");
                        this.draw();
                    }
                }
            }
            ;
            STXChart.prototype.addDrawing = function (drawing) {
                var drawings = STX.shallowClone(this.drawingObjects);
                this.drawingObjects.push(drawing);
                this.undoStamp(drawings, STX.shallowClone(this.drawingObjects));
            }
            ;
            STXChart.prototype.plotLine = function (x0, x1, y0, y1, color, type, context, confineToPanel, parameters) {
                if (!parameters)parameters = {}
                ;
                if (t0l.T4N(parameters.pattern, "none"))return;
                if (t0l.W4N(confineToPanel, true))confineToPanel = this.chart.panel;
                if (t0l.a4N(context, null) || typeof (context) == "undefined")context = this.chart.context;
                if (isNaN(x0) || isNaN(x1) || isNaN(y0) || isNaN(y1)) {
                    return;
                }
                var edgeTop = 0, edgeBottom = this.chart.canvasHeight, edgeLeft = 0, edgeRight = this.right;
                if (confineToPanel) {
                    edgeBottom = confineToPanel.yAxis.bottom;
                    edgeTop = confineToPanel.yAxis.top;
                    edgeLeft = confineToPanel.left;
                    edgeRight = confineToPanel.right;
                }
                var bigX, bigY, v;
                if (t0l.P4N(type, "ray")) {
                    bigX = 10000000;
                    if (t0l.t4N(x1, x0))bigX = -10000000;
                    v = {"x0": x0, "x1": x1, "y0": y0, "y1": y1}
                    ;
                    bigY = STX.yIntersection(v, bigX);
                    x1 = bigX;
                    y1 = bigY;
                }
                if (t0l.R4N(type, "line") || t0l.y4N(type, "horizontal") || t0l.r4N(type, "vertical")) {
                    bigX = 10000000;
                    var littleX = -10000000;
                    v = {"x0": x0, "x1": x1, "y0": y0, "y1": y1}
                    ;
                    bigY = STX.yIntersection(v, bigX);
                    var littleY = STX.yIntersection(v, littleX);
                    x0 = littleX;
                    x1 = bigX;
                    y0 = littleY;
                    y1 = bigY;
                }
                var t0 = 0.0, t1 = 1.0, xdelta = t0l.O4N(x1, x0), ydelta = t0l.I4N(y1, y0), p, q, r;
                for (var edge = 0; t0l.d4N(edge, 4); edge++) {
                    if (t0l.V4N(edge, 0)) {
                        p = -xdelta;
                        q = -(t0l.s4N(edgeLeft, x0));
                    }
                    if (t0l.g4N(edge, 1)) {
                        p = xdelta;
                        q = (t0l.j4N(edgeRight, x0));
                    }
                    if (t0l.X4N(edge, 2)) {
                        p = -ydelta;
                        q = -(t0l.z4N(edgeTop, y0));
                    }
                    if (t0l.A6N(edge, 3)) {
                        p = ydelta;
                        q = (t0l.G6N(edgeBottom, y0));
                    }
                    r = t0l.H6N(q, p);
                    if ((y1 || t0l.h6N(y1, 0)) && t0l.x6N(p, 0) && t0l.U6N(q, 0)) {
                        return false;
                    }
                    if (t0l.D6N(p, 0)) {
                        if (t0l.B6N(r, t1))return false; else if (t0l.m6N(r, t0))t0 = r;
                    }
                    else if (t0l.n6N(p, 0)) {
                        if (t0l.p6N(r, t0))return false; else if (t0l.v6N(r, t1))t1 = r;
                    }
                }
                var x0clip = x0 + t0l.f6N(t0, xdelta), y0clip = y0 + t0l.i6N(t0, ydelta), x1clip = x0 + t0l.E6N(t1, xdelta), y1clip = y0 + t0l.q6N(t1, ydelta);
                if (!y1 && t0l.Z6N(y1, 0) && !y0 && t0l.l3N(y0, 0)) {
                    y0clip = edgeTop;
                    y1clip = edgeBottom;
                    x0clip = v.x0;
                    x1clip = v.x0;
                    if (t0l.K3N(v.x0, edgeRight))return false;
                    if (t0l.k3N(v.x0, edgeLeft))return false;
                }
                else if (!y1 && t0l.L3N(y1, 0)) {
                    if (t0l.e3N(v.y0, v.y1))y1clip = edgeBottom; else y1clip = edgeTop;
                    x0clip = v.x0;
                    x1clip = v.x0;
                    if (t0l.J3N(v.x0, edgeRight))return false;
                    if (t0l.C3N(v.x0, edgeLeft))return false;
                }
                context.lineWidth = 1.1;
                if (typeof (color) == "object") {
                    context.strokeStyle = color.color;
                    if (color.opacity)context.globalAlpha = color.opacity; else context.globalAlpha = 1;
                    context.lineWidth = parseInt(STX.stripPX(color.width));
                }
                else {
                    if (!color || t0l.Q3N(color, "auto") || STX.isTransparent(color)) {
                        context.strokeStyle = this.defaultColor;
                    }
                    else {
                        context.strokeStyle = color;
                    }
                }
                if (parameters.opacity)context.globalAlpha = parameters.opacity;
                if (parameters.lineWidth)context.lineWidth = parameters.lineWidth;
                if (t0l.F3N(type, "zig zag"))context.lineWidth = 5;
                var pattern = null;
                if (parameters.pattern) {
                    pattern = parameters.pattern;
                    if (t0l.Y3N(pattern, "solid")) {
                        pattern = null;
                    }
                    else if (t0l.N3N(pattern, "dotted")) {
                        pattern = [context.lineWidth, context.lineWidth];
                    }
                    else if (t0l.w3N(pattern, "dashed")) {
                        pattern = [t0l.o3N(context.lineWidth, 5), t0l.M3N(context.lineWidth, 5)];
                    }
                }
                context.stxLine(x0clip, y0clip, x1clip, y1clip, context.strokeStyle, context.globalAlpha, context.lineWidth, pattern);
                context.globalAlpha = 1;
                context.lineWidth = 1;
            }
            ;
            STXChart.prototype.connectTheDots = function (points, color, type, context, confineToPanel, parameters) {
                var k8y = "no";
                if (!parameters)parameters = {}
                ;
                if (t0l.u3N(parameters.pattern, (k8y + W0n)))return;
                if (t0l.S3N(confineToPanel, true))confineToPanel = this.chart.panel;
                if (t0l.b3N(context, null) || typeof (context) == "undefined")context = this.chart.context;
                if (t0l.c3N(points.length, 4))return;
                var edgeTop = 0, edgeBottom = this.chart.canvasHeight, edgeLeft = 0, edgeRight = this.chart.width;
                if (confineToPanel) {
                    edgeBottom = confineToPanel.yAxis.bottom;
                    edgeTop = confineToPanel.yAxis.top;
                }
                context.lineWidth = 1.1;
                if (typeof (color) == "object") {
                    context.strokeStyle = color.color;
                    if (color.opacity)context.globalAlpha = color.opacity; else context.globalAlpha = 1;
                    context.lineWidth = parseInt(STX.stripPX(color.width));
                }
                else {
                    if (!color || t0l.T5N(color, "auto") || STX.isTransparent(color)) {
                        context.strokeStyle = this.defaultColor;
                    }
                    else {
                        context.strokeStyle = color;
                    }
                }
                if (parameters.opacity)context.globalAlpha = parameters.opacity;
                if (parameters.lineWidth)context.lineWidth = parameters.lineWidth;
                var pattern = null;
                if (parameters.pattern) {
                    pattern = parameters.pattern;
                    if (t0l.W5N(pattern, "solid")) {
                        pattern = null;
                    }
                    else if (t0l.a5N(pattern, "dotted")) {
                        pattern = [context.lineWidth, context.lineWidth];
                    }
                    else if (t0l.P5N(pattern, "dashed")) {
                        pattern = [t0l.t5N(context.lineWidth, 5), t0l.R5N(context.lineWidth, 5)];
                    }
                }
                context.beginPath();
                for (var i = 0; t0l.y5N(i, points.length - 2); i += 2) {
                    var x0 = points[i], y0 = points[i + 1], x1 = points[i + 2], y1 = points[i + 3];
                    if (isNaN(x0) || isNaN(x1) || isNaN(y0) || isNaN(y1))return;
                    var t0 = 0.0, t1 = 1.0, xdelta = t0l.r5N(x1, x0), ydelta = t0l.O5N(y1, y0), p, q, r;
                    for (var edge = 0; t0l.I5N(edge, 4); edge++) {
                        if (t0l.d5N(edge, 0)) {
                            p = -xdelta;
                            q = -(t0l.V5N(edgeLeft, x0));
                        }
                        if (t0l.s5N(edge, 1)) {
                            p = xdelta;
                            q = (t0l.g5N(edgeRight, x0));
                        }
                        if (t0l.j5N(edge, 2)) {
                            p = -ydelta;
                            q = -(t0l.X5N(edgeTop, y0));
                        }
                        if (t0l.z5N(edge, 3)) {
                            p = ydelta;
                            q = (t0l.A1N(edgeBottom, y0));
                        }
                        r = t0l.G1N(q, p);
                        if ((y1 || t0l.H1N(y1, 0)) && t0l.h1N(p, 0) && t0l.x1N(q, 0)) {
                            return false;
                        }
                        if (t0l.U1N(p, 0)) {
                            if (t0l.D1N(r, t1))return false; else if (t0l.B1N(r, t0))t0 = r;
                        }
                        else if (t0l.m1N(p, 0)) {
                            if (t0l.n1N(r, t0))return false; else if (t0l.p1N(r, t1))t1 = r;
                        }
                    }
                    var x0clip = x0 + t0l.v1N(t0, xdelta), y0clip = y0 + t0l.f1N(t0, ydelta), x1clip = x0 + t0l.i1N(t1, xdelta), y1clip = y0 + t0l.E1N(t1, ydelta);
                    try {
                        if (pattern) {
                            context.dashedLineTo(x0clip, y0clip, x1clip, y1clip, pattern);
                        }
                        else {
                            context.moveTo(x0clip, y0clip);
                            context.lineTo(x1clip, y1clip);
                        }
                    }
                    catch (e) {
                    }
                }
                context.stroke();
                context.closePath();
                context.globalAlpha = 1;
                context.lineWidth = 1;
            }
            ;
            STXChart.prototype.plotSpline = function (points, tension, color, type, context, confineToPanel, parameters) {
                if (!parameters)parameters = {}
                ;
                if (t0l.q1N(parameters.pattern, (P5y + Q5y + W0n)))return;
                if (t0l.Z1N(confineToPanel, true))confineToPanel = this.chart.panel;
                if (t0l.l8N(context, null) || typeof (context) == "undefined")context = this.chart.context;
                context.save();
                context.lineWidth = 1.1;
                if (typeof (color) == "object") {
                    context.strokeStyle = color.color;
                    if (color.opacity)context.globalAlpha = color.opacity; else context.globalAlpha = 1;
                    context.lineWidth = parseInt(STX.stripPX(color.width));
                }
                else {
                    if (!color || t0l.K8N(color, "auto") || STX.isTransparent(color)) {
                        context.strokeStyle = this.defaultColor;
                    }
                    else {
                        context.strokeStyle = color;
                    }
                }
                if (parameters.opacity)context.globalAlpha = parameters.opacity;
                if (parameters.lineWidth)context.lineWidth = parameters.lineWidth;
                var pattern = null;
                if (parameters.pattern) {
                    pattern = parameters.pattern;
                    if (t0l.k8N(pattern, "solid")) {
                        pattern = null;
                    }
                    else if (t0l.L8N(pattern, "dotted")) {
                        pattern = [context.lineWidth, context.lineWidth];
                    }
                    else if (t0l.e8N(pattern, "dashed")) {
                        pattern = [t0l.J8N(context.lineWidth, 5), t0l.C8N(context.lineWidth, 5)];
                    }
                }
                if (pattern && context.setLineDash) {
                    context.setLineDash(pattern);
                    context.lineDashOffset = 0;
                }
                plotSpline(points, tension, context);
                context.restore();
            }
            ;
            STXChart.prototype.drawingClick = function (panel, x, y) {
                if (!this.activeDrawing) {
                    if (!panel)return;
                    var Factory = STXChart.drawingTools[this.currentVectorParameters.vectorType];
                    if (!Factory) {
                        if (STX.Drawing[this.currentVectorParameters.vectorType]) {
                            Factory = STX.Drawing[this.currentVectorParameters.vectorType];
                            STXChart.registerDrawingTool(this.currentVectorParameters.vectorType, Factory);
                        }
                    }
                    if (Factory) {
                        this.activeDrawing = new Factory();
                        this.activeDrawing.construct(this, panel);
                        if (!this.charts[panel.name]) {
                            if (this.activeDrawing.chartsOnly) {
                                this.activeDrawing = t0l.a1y;
                                return;
                            }
                        }
                    }
                }
                if (this.activeDrawing) {
                    if (this.userPointerDown && !this.activeDrawing.dragToDraw) {
                        if (!STXChart.drawingLine)this.activeDrawing = t0l.a1y;
                        return;
                    }
                    var tick = this.tickFromPixel(x, panel.chart), dpanel = this.panels[this.activeDrawing.panelName], value = this.adjustIfNecessary(dpanel, tick, this.valueFromPixelUntransform(y, dpanel));
                    if (this.preferences.magnet && this.magnetizedPrice) {
                        value = this.adjustIfNecessary(dpanel, tick, this.magnetizedPrice);
                    }
                    if (this.activeDrawing.click(this.chart.tempCanvas.context, tick, value)) {
                        if (this.activeDrawing) {
                            STXChart.drawingLine = P0n;
                            STX.clearCanvas(this.chart.tempCanvas, this);
                            this.addDrawing(this.activeDrawing);
                            this.activeDrawing = t0l.a1y;
                            this.adjustDrawings();
                            this.draw();
                            this.changeOccurred(n82);
                            STX.swapClassName(this.controls.crossX, p7y, H9y);
                            STX.swapClassName(this.controls.crossY, p7y, H9y);
                        }
                    }
                    else {
                        this.changeOccurred(c7y);
                        STXChart.drawingLine = x1y;
                        STX.swapClassName(this.controls.crossX, H9y, p7y);
                        STX.swapClassName(this.controls.crossY, H9y, p7y);
                    }
                    return x1y;
                }
                return P0n;
            }
            ;
            STXChart.prototype.whichPanel = function (y) {
                for (var p in this.panels) {
                    var panel = this.panels[p];
                    if (panel.hidden)continue;
                    if (t0l.Q8N(y, panel.top) && t0l.F8N(y, panel.bottom))return panel;
                }
                return t0l.a1y;
            }
            ;
            STXChart.prototype.mouseup = function (e) {
                if (this.runPrepend(S9n, arguments))return;
                this.swipe.end = x1y;
                if (this.repositioningDrawing) {
                    if (!this.currentVectorParameters.vectorType || (t0l.Y8N(Date.now() - this.mouseTimer, a4n))) {
                        this.changeOccurred(n82);
                        STX.clearCanvas(this.chart.tempCanvas, this);
                        this.repositioningDrawing = t0l.a1y;
                        this.adjustDrawings();
                        this.draw();
                        return;
                    }
                    else {
                        this.repositioningDrawing = P0n;
                    }
                }
                if (this.repositioningBaseline) {
                    this.repositioningBaseline = t0l.a1y;
                    this.chart.panel.yAxis.scroll = t0l.N8N(this.pixelFromPriceTransform(this.chart.baseline.userLevel, this.chart.panel), (this.chart.panel.yAxis.top + this.chart.panel.yAxis.bottom) / t0l.l52);
                    this.draw();
                    return;
                }
                var wasMouseDown = this.userPointerDown;
                this.userPointerDown = P0n;
                if (!this.displayInitialized)return;
                this.grabbingScreen = P0n;
                if (t0l.w8N(this.openDialog, R6y)) {
                    if (STXChart.insideChart)STX.unappendClassName(this.container, N0y);
                    return;
                }
                if (this.grabOverrideClick) {
                    this.swipeRelease();
                    STX.unappendClassName(this.container, N0y);
                    this.grabOverrideClick = P0n;
                    return;
                }
                if (STXChart.insideChart)STX.unappendClassName(this.container, N0y);
                if (STXChart.resizingPanel) {
                    this.releaseHandle({}
                    );
                    return;
                }
                if (!e)e = event;
                if ((e.which && t0l.o8N(e.which, t0l.l52)) || (e.button && t0l.M8N(e.button, t0l.l52))) {
                    if (this.anyHighlighted) {
                        this.rightClickHighlighted();
                        if (e.preventDefault && this.captureTouchEvents)e.preventDefault();
                        e.stopPropagation();
                        return P0n;
                    }
                    else {
                        return x1y;
                    }
                }
                if (t0l.u8N(e.clientX, this.left) || t0l.S8N(e.clientX, this.right))return;
                if (t0l.b8N(e.clientY, this.top) || t0l.c8N(e.clientY, this.bottom))return;
                var cy = this.backOutY(e.clientY), cx = this.backOutX(e.clientX);
                if (wasMouseDown) {
                    this.drawingClick(this.currentPanel, cx, cy);
                }
                if (!this.activeDrawing) {
                    this.dispatch(I12, {stx: this, panel: this.currentPanel, x: cx, y: cy}
                    );
                }
                this.runAppend(S9n, arguments);
            }
            ;
            STXChart.prototype.grabbingHand = function () {
                if (!this.allowScroll)return;
                if (!this.grabbingScreen)return;
                if (STX.touchDevice)return;
                STX.appendClassName(this.container, N0y);
            }
            ;
            STXChart.prototype.mousedown = function (e) {
                var L2y = "ne_delta";
                if (this.runPrepend("mousedown", arguments))return;
                this.grabOverrideClick = false;
                if (t0l.T7o(this.openDialog, ""))return;
                if (!this.displayInitialized)return;
                if (!this.displayCrosshairs)return;
                if (!STXChart.insideChart)return;
                if (this.manageTouchAndMouse && e && e.preventDefault && this.captureTouchEvents)e.preventDefault();
                this.mouseTimer = Date.now();
                this.userPointerDown = true;
                if (!e)e = event;
                if ((e.which && t0l.W7o(e.which, 2)) || (e.button && t0l.a7o(e.button, 2))) {
                    return;
                }
                var chart = this.currentPanel.chart;
                if (t0l.P7o(e.clientX, this.left) && t0l.t7o(e.clientX, this.right) && t0l.R7o(e.clientY, this.top) && t0l.y7o(e.clientY, this.bottom)) {
                    if (this.repositioningDrawing)return;
                    for (var i = 0; t0l.r7o(i, this.drawingObjects.length); i++) {
                        var drawing = this.drawingObjects[i];
                        if (drawing.highlighted) {
                            if (this.ctrl) {
                                var Factory = STXChart.drawingTools[drawing.name], clonedDrawing = new Factory();
                                clonedDrawing.reconstruct(this, drawing.serialize());
                                this.drawingObjects.push(clonedDrawing);
                                this.repositioningDrawing = clonedDrawing;
                                clonedDrawing.repositioner = drawing.repositioner;
                                return;
                            }
                            this.repositioningDrawing = drawing;
                            return;
                        }
                    }
                    if ((t0l.O7o(this.layout.chartType, (h9y + r4n + L2y)) || t0l.I7o(this.layout.chartType, "baseline_delta_mountain")) && t0l.d7o(chart.baseline.userLevel, false)) {
                        var y0 = this.valueFromPixelUntransform(t0l.V7o(this.cy, 5), this.currentPanel), y1 = this.valueFromPixelUntransform(this.cy + 5, this.currentPanel), x0 = t0l.s7o(this.chart.right, parseInt(getComputedStyle(this.controls.baselineHandle).width, 10));
                        if (t0l.g7o(chart.baseline.actualLevel, y0) && t0l.j7o(chart.baseline.actualLevel, y1) && t0l.X7o(this.cx, x0)) {
                            this.repositioningBaseline = {lastDraw: Date.now()}
                            ;
                            return;
                        }
                    }
                    this.drawingClick(this.currentPanel, this.cx, this.cy);
                    if (this.activeDrawing && this.activeDrawing.dragToDraw)return;
                }
                this.grabbingScreen = true;
                this.yToleranceBroken = false;
                if (!e)e = event;
                this.grabStartX = e.clientX;
                this.grabStartY = e.clientY;
                this.grabStartScrollX = chart.scroll;
                this.grabStartScrollY = chart.panel.yAxis.scroll;
                this.grabStartCandleWidth = this.layout.candleWidth;
                this.grabStartZoom = this.whichYAxis(this.currentPanel).zoom;
                setTimeout((function (self) {
                        return function () {
                            self.grabbingHand();
                        }
                            ;
                    })(this), 100);
                this.swipeStart(chart);
                this.runAppend("mousedown", arguments);
            }
            ;
            STXChart.prototype.changeVectorType = function (value) {
                this.currentVectorParameters.vectorType = value;
                if (STXChart.drawingLine)this.undo();
                this.setCrosshairColors();
                if (STXChart.insideChart)this.doDisplayCrosshairs();
            }
            ;
            STXChart.prototype.rightClickOverlay = function (name) {
                var t1y = "ickOve", A4y = "Cl", B0y = "ht", o6y = "rightClickOverlay";
                if (this.runPrepend(o6y, arguments))return;
                var sd = this.overlays[name];
                if (sd.editFunction) {
                    sd.editFunction();
                }
                else {
                    this.removeOverlay(name);
                }
                this.runAppend((x5y + R8y + B0y + A4y + t1y + K3y + t0l.n5y + B9y + t0l.O2n), arguments);
            }
            ;
            STXChart.prototype.removeOverlay = function (name) {
                var I4y = "removeOverlay";
                if (this.runPrepend(I4y, arguments))return;
                var mySD;
                for (var o in this.overlays) {
                    var sd = this.overlays[o];
                    if (sd.inputs.Field && sd.inputs.Field.indexOf(name) != -t0l.T52) {
                        this.removeOverlay(sd.name);
                    }
                    else if (t0l.z7o(sd.name, name)) {
                        mySD = sd;
                    }
                }
                var study = this.layout.studies[name];
                STX.deleteRHS(STX.Studies.studyPanelMap, study);
                if (mySD)this.cleanupRemovedStudy(mySD);
                delete  this.overlays[name];
                this.displaySticky();
                this.createDataSet();
                this.changeOccurred(d52);
                this.runAppend(I4y, arguments);
            }
            ;
            STXChart.prototype.addSeries = function (field, parameters, cb) {
                if (this.runPrepend("addSeries", arguments))return;
                if (!parameters)parameters = {}
                ;
                if (!parameters.chartName)parameters.chartName = this.chart.name;
                var obj = {parameters: STX.clone(parameters), yValueCache: [], display: field}
                    ;
                if (t0l.A9o("display", obj.parameters))obj.display = obj.parameters.display;
                if (obj.parameters.isComparison)obj.parameters.shareYAxis = true;
                if (!obj.parameters.chartType && obj.parameters.color)obj.parameters.chartType = "line";
                if (obj.parameters.chartType && t0l.G9o(obj.parameters.chartType, "mountain"))obj.parameters.chartType = (t0l.n5y + q1y + W0n);
                if (!obj.parameters.panel)obj.parameters.panel = this.chart.panel.name;
                var chart = this.charts[parameters.chartName], self = this;

                function addSeriesData(stx) {
                    var mIterator = 0, cIterator = 0, c, m;
                    while (parameters.data && t0l.H9o(mIterator, stx.masterData.length) && t0l.h9o(cIterator, parameters.data.length)) {
                        c = parameters.data[cIterator];
                        m = stx.masterData[mIterator];
                        if (!c.DT || typeof c.DT == "undefined")c.DT = STX.strToDateTime(c.Date);
                        if (t0l.x9o(c.DT.getTime(), m.DT.getTime())) {
                            if (typeof c.Value != "undefined") {
                                m[field] = c.Value;
                            }
                            else if (stx.layout.adj && typeof c.Adj_Close != "undefined") {
                                m[field] = c.Adj_Close;
                            }
                            else {
                                m[field] = c.Close;
                            }
                            cIterator++;
                            mIterator++;
                            continue;
                        }
                        if (t0l.U9o(c.DT, m.DT)) {
                            if (parameters.forceData) {
                                stx.masterData.splice(mIterator, 0, {DT: c.DT}
                                );
                                continue;
                            }
                            cIterator++;
                        }
                        else mIterator++;
                    }
                    if (parameters.forceData && t0l.D9o(mIterator, stx.masterData.length)) {
                        while (parameters.data && t0l.B9o(cIterator, parameters.data.length)) {
                            var c = parameters.data[cIterator];
                            if (!c.DT || typeof c.DT == "undefined")c.DT = STX.strToDateTime(c.Date);
                            m = {DT: c.DT}
                            ;
                            if (typeof c.Value != "undefined") {
                                m[field] = c.Value;
                            }
                            else if (stx.layout.adj && typeof c.Adj_Close != "undefined") {
                                m[field] = c.Adj_Close;
                            }
                            else {
                                m[field] = c.Close;
                            }
                            stx.masterData.push(m);
                            cIterator++;
                        }
                    }
                }

                function setUpRenderer(stx, obj) {
                    if (obj.parameters.color) {
                        var r = stx.getSeriesRenderer("_generic_series");
                        if (!r) {
                            r = stx.setSeriesRenderer(new STX.Renderer.Lines({
                                    params: {
                                        panel: obj.parameters.panel,
                                        type: "legacy",
                                        name: "_generic_series",
                                        overChart: true
                                    }
                                    ,
                                }
                            ));
                        }
                        r.attachSeries(field, obj.parameters).ready();
                    }
                }

                if (chart) {
                    chart.series[field] = obj;
                }
                if (parameters.isComparison) {
                    self.setComparison(true, chart);
                }
                var doneInCallback = false;
                if (parameters.data) {
                    if (parameters.data.useDefaultQuoteFeed) {
                        var driver = this.quoteDriver, fetchParams = driver.makeParams(field, parameters.symbolObject, this.chart);
                        fetchParams.startDate = this.chart.masterData[0].DT;
                        fetchParams.endDate = this.chart.masterData[t0l.m9o(this.chart.masterData.length, 1)].DT;
                        if (parameters.symbolObject)fetchParams.symbolObject = parameters.symbolObject;
                        doneInCallback = true;
                        function handleResponse(dataCallback) {
                            if (!dataCallback.error) {
                                parameters.data = dataCallback.quotes;
                                addSeriesData(self);
                                setUpRenderer(self, obj);
                            }
                            if (cb)cb(dataCallback.error, obj);
                            self.runAppend("addSeries", arguments);
                        }
                        ;
                        if (fetchParams.stx.isEquationChart(fetchParams.symbol)) {
                            STX.fetchEquationChart(fetchParams, handleResponse);
                        }
                        else {
                            driver.quoteFeed.fetch(fetchParams, handleResponse);
                        }
                    }
                    else if (this.masterData) {
                        addSeriesData(this);
                    }
                }
                else {
                    obj.addSeriesData = addSeriesData;
                }
                if (!doneInCallback) {
                    setUpRenderer(self, obj);
                    if (cb)cb(null, obj);
                    this.runAppend("addSeries", arguments);
                }
                return obj;
            }
            ;
            STXChart.prototype.isEquationChart = function (symbol) {
                var V7n = "=";
                if (!this.allowEquations || !STX.computeEquationChart)return P0n;
                if (symbol && t0l.n9o(symbol[t0l.G52], V7n))return x1y;
                return P0n;
            }
            ;
            STXChart.prototype.deleteSeries = function (field, chart) {
                var t9y = "deleteSeries";
                if (this.runPrepend(t9y, arguments))return;
                if (!chart)chart = this.chart;
                delete  chart.series[field];
                if (this.quoteDriver)this.quoteDriver.updateSubscriptions();
                this.runAppend(t9y, arguments);
            }
            ;
            STXChart.prototype.removeSeries = function (field, chart) {
                if (this.runPrepend((K3y + E9y + v5y + Q5y + t0l.F4n + E9y + W6y + q1y + E9y + D3y), arguments))return;
                if (!chart)chart = this.chart;
                for (var r in chart.seriesRenderers) {
                    var renderer = chart.seriesRenderers[r];
                    for (var sp = t0l.p9o(renderer.seriesParams.length, 1); t0l.v9o(sp, 0); sp--) {
                        var series = renderer.seriesParams[sp];
                        if (!series.permanent && t0l.f9o(series.field, field)) {
                            renderer.removeSeries(field);
                        }
                    }
                }
                this.deleteSeries(field, chart);
                var comparing = false;
                for (var s in chart.series) {
                    if (chart.series[s].parameters.isComparison)comparing = true;
                }
                if (!comparing)this.setComparison(false, chart);
                this.createDataSet();
                this.draw();
                this.runAppend("removeSeries", arguments);
            }
            ;
            STXChart.prototype.rendererAction = function (chart, phase) {
                var r3y = "rendererAction";
                if (this.runPrepend(r3y, arguments))return;
                for (var id in chart.seriesRenderers) {
                    var renderer = chart.seriesRenderers[id];
                    if (renderer.params.overChart && t0l.i9o(phase, m7y))continue;
                    if (!renderer.params.overChart && t0l.E9o(phase, r32))continue;
                    if (!this.panels[renderer.params.panel])continue;
                    if (t0l.q9o(this.panels[renderer.params.panel].chart, chart))continue;
                    if (t0l.Z9o(phase, a7y)) {
                        renderer.performCalculations();
                    }
                    else {
                        renderer.draw();
                        if (renderer.cb)renderer.cb(renderer.colors);
                    }
                }
                this.runAppend(r3y, arguments);
            }
            ;
            STXChart.prototype.drawSeries = function (chart, seriesArray, yAxis) {
                var N32 = "ga";
                if (this.runPrepend((n9y + B82 + W6y + q1y + E9y + D3y), arguments))return;
                var quotes = chart.dataSegment, legendColorMap = {}
                    , series = null;
                if (!seriesArray)seriesArray = chart.series;
                for (var field in seriesArray) {
                    series = seriesArray[field];
                    var parameters = series.parameters;
                    if (!parameters.chartType)continue;
                    var panel = chart.panel;
                    if (parameters.panel)panel = this.panels[parameters.panel];
                    if (!panel)continue;
                    var yax = yAxis ? yAxis : panel.yAxis, minMax = [parameters.minimum, parameters.maximum];
                    if ((!parameters.minimum && t0l.l0o(parameters.minimum, 0)) || (!parameters.maximum && t0l.K0o(parameters.maximum, 0))) {
                        var minMaxCalc = STX.minMax(quotes, field);
                        if (!parameters.minimum && t0l.k0o(parameters.minimum, 0))minMax[0] = minMaxCalc[0];
                        if (!parameters.maximum && t0l.L0o(parameters.maximum, 0))minMax[1] = minMaxCalc[1];
                    }
                    var min = minMax[0], top = yax.top, bottom = yax.bottom, height = t0l.e0o(bottom, top), t = parameters.marginTop, b = parameters.marginBottom;
                    if (t)top = t0l.J0o(t, 1) ? (top + t) : (top + (t0l.C0o(height, t)));
                    if (b)bottom = t0l.Q0o(b, 1) ? (t0l.F0o(bottom, b)) : (t0l.Y0o(bottom, (height * b)));
                    var multiplier = t0l.N0o((bottom - top), (minMax[1] - min)), started = false, lastPoint = null, val = null, x = null, y = null, px = null, py = null, cw = this.layout.candleWidth, context = this.chart.context, isStep = (t0l.w0o(parameters.type, "step") || t0l.o0o(parameters.subtype, "step")), color = parameters.color;
                    if (!color)color = this.defaultColor;
                    var width = parameters.width;
                    if (!width || isNaN(width) || t0l.M0o(width, 1))width = 1;
                    if (series.highlight || series.parameters.highlight)width *= 2;
                    this.startClip(panel.name);
                    seriesPlotter = new STX.Plotter();
                    seriesPlotter.newSeries("line", "stroke", color, 1, width);
                    if (parameters.gaps && parameters.gaps.color)seriesPlotter.newSeries("gap", "stroke", parameters.gaps.color, 1, width); else seriesPlotter.newSeries("gap", "stroke", color, 1, width);
                    series.yValueCache = new Array(quotes.length);
                    var yValueCache = series.yValueCache, lastQuote = null, gap = null, points = [], doTransform = series.parameters.shareYAxis && !yAxis, shareYAxis = series.parameters.shareYAxis || yAxis, xbase = t0l.u0o(panel.left, (isStep ? 1 : 0.5) * cw, this.micropixels, 1), x0 = xbase;
                    for (var i = 0; t0l.X0o(i, quotes.length); i++) {
                        xbase += t0l.z0o(cw, 2);
                        if (isStep)xbase += t0l.A2o(cw, 2);
                        cw = this.layout.candleWidth;
                        if (!isStep)xbase += t0l.G2o(cw, 2);
                        if (t0l.H2o(x, null) && t0l.h2o(y, null)) {
                            if (!gap || parameters.gaps)points.push([x, y]);
                        }
                        var quote = quotes[i];
                        if (!quote)continue;
                        if (quote.candleWidth) {
                            if (!isStep)xbase += t0l.x2o((quote.candleWidth - cw), 2);
                            cw = quote.candleWidth;
                        }
                        if (quote.transform && doTransform)quote = quote.transform;
                        val = quote[field];
                        if (!val && t0l.U2o(val, 0)) {
                            if (isStep || parameters.gaps) {
                                yValueCache[i] = y;
                            }
                            if (t0l.D2o(gap, false)) {
                                if (isStep) {
                                    x += cw;
                                    seriesPlotter.lineTo("line", x, y);
                                }
                                seriesPlotter.moveTo("gap", x, y);
                            }
                            gap = true;
                            if (x && !parameters.gaps)points.push([x, bottom]);
                            continue;
                        }
                        if (!isStep && lastPoint && t0l.B2o(lastPoint, i - 1)) {
                            px = x;
                            py = y;
                        }
                        else {
                            px = null;
                        }
                        x = xbase;
                        if (t0l.m2o(x, panel.right))lastQuote = quote;
                        if (this.extendLastTick && t0l.n2o(i, quotes.length - 1))x += t0l.p2o(cw, 2);
                        if (isStep && started) {
                            if (gap && parameters.gaps && parameters.gaps.pattern) {
                                seriesPlotter.dashedLineTo("gap", x, y, parameters.gaps.pattern);
                            }
                            else if (gap && !parameters.gaps) {
                                points.push([x, bottom]);
                                seriesPlotter.moveTo("gap", x, y);
                            }
                            else if (!gap && parameters.pattern) {
                                seriesPlotter.dashedLineTo("line", x, y, parameters.pattern);
                            }
                            else {
                                seriesPlotter.lineTo((gap ? "gap" : "line"), x, y);
                            }
                            points.push([x, y]);
                        }
                        if (shareYAxis) {
                            y = this.pixelFromPrice(val, panel, yax);
                        }
                        else {
                            y = t0l.v2o(bottom, ((val - min) * multiplier));
                        }
                        if (t0l.f2o(px, null)) {
                            var vector = {x0: px, x1: x, y0: py, y1: y}
                                ;
                            for (; t0l.i2o(lastPoint, i); lastPoint++) {
                                var xInt = panel.left + Math.floor(xbase + t0l.E2o(((lastPoint - i) + 0.5), cw)) + this.micropixels - 1, yInt = STX.yIntersection(vector, xInt);
                                yValueCache[lastPoint] = yInt;
                            }
                        }
                        yValueCache[i] = y;
                        if (i && points.length && started && !yValueCache[t0l.q2o(i, 1)] && t0l.Z2o(yValueCache[i - 1], 0)) {
                            for (var bf = t0l.l4o(i, 1); t0l.K4o(bf, 0); bf--) {
                                if (yValueCache[bf])break;
                                yValueCache[bf] = points[t0l.k4o(points.length, 1)][1];
                            }
                        }
                        if (!started) {
                            started = true;
                            var leftTick = t0l.L4o(chart.dataSet.length, chart.scroll);
                            if (t0l.e4o(leftTick, 0)) {
                                seriesPlotter.moveTo((gap ? "gap" : "line"), x, y);
                            }
                            else {
                                var baseline = chart.dataSet[leftTick];
                                if (baseline.transform && doTransform)baseline = baseline.transform;
                                var y0 = baseline[field];
                                if (shareYAxis) {
                                    y0 = this.pixelFromPrice(y0, panel, yax);
                                }
                                else {
                                    y0 = t0l.J4o(bottom, ((y0 - min) * multiplier));
                                }
                                y0 = Math.min(Math.max(y0, top), bottom);
                                if (isNaN(y0)) {
                                    seriesPlotter.moveTo((gap ? "gap" : "line"), x, y);
                                }
                                else {
                                    seriesPlotter.moveTo((gap ? "gap" : "line"), x0, y0);
                                    if (isStep) {
                                        if (gap) {
                                            if (parameters.gaps)seriesPlotter.lineTo("gap", x, y0); else seriesPlotter.moveTo((N32 + t0l.V3y), x, y0);
                                        }
                                        else seriesPlotter.lineTo("line", x, y0);
                                    }
                                    if (!gap || parameters.gaps) {
                                        if (isStep)points.unshift([x, y0]);
                                        points.unshift([x0, y0]);
                                    }
                                    if (gap && parameters.gaps && parameters.gaps.pattern) {
                                        seriesPlotter.dashedLineTo("gap", x, y, parameters.gaps.pattern);
                                    }
                                    else if (gap && !parameters.gaps) {
                                        points.unshift([x, bottom]);
                                        points.unshift([x0, bottom]);
                                        seriesPlotter.moveTo("gap", x, y);
                                    }
                                    else if (!gap && parameters.pattern) {
                                        seriesPlotter.dashedLineTo("line", x, y, parameters.pattern);
                                    }
                                    else {
                                        seriesPlotter.lineTo((gap ? "gap" : "line"), x, y);
                                    }
                                }
                            }
                        }
                        else {
                            if (gap && parameters.gaps && parameters.gaps.pattern) {
                                seriesPlotter.dashedLineTo("gap", x, y, parameters.gaps.pattern);
                            }
                            else if (gap && !parameters.gaps) {
                                points.push([x, bottom]);
                                seriesPlotter.moveTo("gap", x, y);
                            }
                            else if (!gap && parameters.pattern) {
                                seriesPlotter.dashedLineTo("line", x, y, parameters.pattern);
                                if (isStep && t0l.C4o(i, quotes.length - 1))seriesPlotter.dashedLineTo("line", x + cw, y, parameters.pattern);
                            }
                            else {
                                seriesPlotter.lineTo((gap ? "gap" : (t0l.n5y + q1y + W0n)), x, y);
                                if (isStep && t0l.Q4o(i, quotes.length - 1) && !gap)seriesPlotter.lineTo("line", x + cw, y);
                            }
                        }
                        lastPoint = i;
                        if (gap)seriesPlotter.moveTo("line", x, y);
                        gap = false;
                    }
                    if (gap) {
                        x = panel.left + Math.floor(xbase + cw + this.micropixels) - 1;
                        if (this.extendLastTick)x += t0l.F4o(cw, 2);
                        if (parameters.gaps && parameters.gaps.pattern) {
                            if (started) {
                                seriesPlotter.dashedLineTo("gap", x, y, parameters.gaps.pattern);
                            }
                        }
                        else if (parameters.gaps) {
                            seriesPlotter.lineTo("gap", x, y);
                        }
                    }
                    if (t0l.Y4o(series.parameters.chartType, "mountain") && points.length) {
                        points.push([x, (gap && !parameters.gaps) ? bottom : y]);
                        if (!parameters.fillStyle) {
                            parameters.fillStyle = color;
                            if (!parameters.fillOpacity)parameters.fillOpacity = 0.3;
                        }
                        seriesPlotter.newSeries("mountain", "fill", parameters.fillStyle, parameters.fillOpacity);
                        for (var pt = 0; t0l.N4o(pt, points.length); pt++) {
                            seriesPlotter[pt ? "lineTo" : "moveTo"]("mountain", points[pt][0], Math.min(bottom, points[pt][1]));
                        }
                        seriesPlotter.lineTo("mountain", x, bottom);
                        seriesPlotter.lineTo("mountain", points[0][0], bottom);
                        seriesPlotter.draw(context, "mountain");
                    }
                    seriesPlotter.draw(context, "gap");
                    seriesPlotter.draw(context, "line");
                    this.endClip();
                    if (shareYAxis && lastQuote) {
                        if (yax.priceFormatter) {
                            txt = yax.priceFormatter(this, panel, lastQuote[field], yax);
                        }
                        else {
                            txt = this.formatYAxisPrice(lastQuote[field], panel, null, yax);
                        }
                        this.yAxisLabels.push({
                                src: "series",
                                "args": [panel, txt, this.pixelFromPrice(lastQuote[field], panel, yax), color, null, null, yax]
                            }
                        );
                    }
                    var display = series.parameters.display;
                    if (!display)display = series.display;
                    legendColorMap[field] = {color: color, display: display}
                    ;
                }
                if (chart.legend && series && series.useChartLegend) {
                    if (chart.legendRenderer)chart.legendRenderer(this, {
                            "chart": chart,
                            "legendColorMap": legendColorMap,
                            "coordinates": {x: chart.legend.x, y: chart.legend.y + chart.panel.yAxis.top}
                        }
                    );
                }
                this.runAppend("drawSeries", arguments);
            }
            ;
            STXChart.prototype.isDailyInterval = function (interval) {
                if (t0l.w4o(interval, v82))return x1y;
                if (t0l.o4o(interval, V2y))return x1y;
                if (t0l.M4o(interval, O52))return x1y;
                return P0n;
            }
            ;
            STXChart.prototype.setPeriodicityV2 = function (period, interval, timeUnit, cb) {
                var E7y = "Dr", Y3y = "ote", a2n = "ack", q6y = "lb", z1y = "Cal", J1y = "her", q9y = "cau", Y5y = "ici", d3y = "riod", h12 = "ge", x9y = "ot", U4y = "V", z12 = (2.97E2 <= (53., 0x10D) ? (139., "h") : (0x158, 42) > 94.30E1 ? 10.9E1 : (0x1A2, 0xBD) >= (0xB4, 0x8C) ? (122., "P") : (0x12D, 54.40E1)), p2y = "set";
                if (this.runPrepend((p2y + z12 + E9y + K3y + q1y + Q5y + n9y + q1y + S9y + K4n + U4y + N3y), arguments))return;
                if (typeof timeUnit === "function") {
                    cb = timeUnit;
                    timeUnit = null;
                }
                var switchInterval = false;
                if (!interval)return;
                if (!period)return;
                delete  this.layout.setSpan;
                if (t0l.u4o(interval, "year")) {
                    interval = "month";
                    if (!period)period = 1;
                    period = t0l.S4o(period, 12);
                }
                var isDaily = this.isDailyInterval(interval), wasDaily = this.isDailyInterval(this.layout.interval);
                if (isDaily)timeUnit = null; else if (t0l.b4o(interval, "tick"))timeUnit = null; else if (!timeUnit)timeUnit = "minute";
                var getDifferentData = false;
                if (this.chart.symbol) {
                    if (t0l.c4o(isDaily, wasDaily) || this.dontRoll)getDifferentData = true;
                    if (!wasDaily) {
                        if (t0l.T6o(this.layout.interval, interval))getDifferentData = true;
                    }
                    if (t0l.W6o(timeUnit, this.layout.timeUnit))getDifferentData = true;
                }
                this.layout.periodicity = period;
                this.layout.interval = interval;
                this.layout.timeUnit = timeUnit;
                if (getDifferentData) {
                    this.changeOccurred("layout");
                    if (this.quoteDriver) {
                        for (var c in this.charts) {
                            if (this.charts[c].symbol) {
                                if (this.displayInitialized)this.quoteDriver.newChart({
                                        symbol: this.charts[c].symbol,
                                        symbolObject: this.charts[c].symbolObject,
                                        chart: this.charts[c]
                                    }
                                    , cb); else this.newChart(this.charts[c].symbol, null, this.charts[c], cb);
                            }
                        }
                        return;
                    }
                    else if (this.dataCallback) {
                        this.dataCallback();
                        if (cb)cb(null);
                        return;
                    }
                    else {
                        console.log((S9y + d32 + P5y + x9y + a0y + S9y + Y1y + P5y + h12 + a0y + t0l.V3y + E9y + d3y + Y5y + t0l.r6y + t0l.O2n + a0y + h9y + E9y + q9y + O12 + a0y + P5y + E9y + R0n + J1y + a0y + n9y + B9y + Y4y + z1y + q6y + a2n + a0y + Q5y + K3y + a0y + X3y + t0l.O6y + Y3y + E7y + q1y + t0l.F4n + H0y + a0y + B9y + R1y + a0y + D3y + E9y + t0l.r6y));
                        return;
                    }
                }
                var chartName, chart;
                for (chartName in this.charts) {
                    chart = this.charts[chartName];
                    var dt, pos = Math.round(t0l.a6o(chart.maxTicks, 2));
                    this.setCandleWidth(this.layout.candleWidth, chart);
                    var centerMe = true, rightAligned = false;
                    if (t0l.P6o(chart.scroll, chart.maxTicks))centerMe = false; else if (chart.dataSegment && !chart.dataSegment[pos]) {
                        centerMe = false;
                        rightAligned = t0l.t6o(chart.scroll, chart.dataSet.length);
                    }
                    if (centerMe && chart.dataSegment && t0l.R6o(chart.dataSegment.length, 0)) {
                        if (t0l.y6o(chart.maxTicks, ((Math.round((this.chart.width / this.layout.candleWidth) - 0.499) - 1) / 2))) {
                            pos = t0l.r6o(chart.dataSegment.length, 1);
                        }
                        if (t0l.O6o(pos, chart.dataSegment.length)) {
                            dt = chart.dataSegment[t0l.I6o(chart.dataSegment.length, 1)].DT;
                            pos = t0l.d6o(chart.dataSegment.length, 1);
                        }
                        else {
                            dt = chart.dataSegment[pos].DT;
                        }
                    }
                    this.createDataSet();
                    if (centerMe) {
                        if (chart.dataSegment && t0l.V6o(chart.dataSegment.length, 0)) {
                            for (var i = t0l.s6o(chart.dataSet.length, 1); t0l.g6o(i, 0); i--) {
                                var nd = chart.dataSet[i].DT;
                                if (t0l.j6o(nd.getTime(), dt.getTime())) {
                                    chart.scroll = (t0l.X6o(chart.dataSet.length, i)) + pos;
                                    break;
                                }
                            }
                        }
                    }
                    else if (!rightAligned) {
                        var wsInTicks = Math.round(t0l.z6o(this.preferences.whitespace, this.layout.candleWidth));
                        chart.scroll = t0l.A3o(chart.maxTicks, wsInTicks);
                    }
                    else {
                        chart.scroll = chart.dataSet.length + rightAligned;
                    }
                }
                if (this.displayInitialized)this.draw();
                this.changeOccurred("layout");
                if (this.quoteDriver) {
                    for (chartName in this.charts) {
                        chart = this.charts[chartName];
                        if (chart.symbol && chart.moreAvailable) {
                            this.quoteDriver.checkLoadMore(chart);
                        }
                    }
                }
                if (cb)cb(null);
                this.runAppend("setPeriodicityV2", arguments);
            }
            ;
            STXChart.prototype.drawVectors = function () {
                var X2n = "wVec", Y9n = "dra";
                if (this.vectorsShowing)return;
                if (this.runPrepend((Y9n + X2n + M1y + K3y + D3y), arguments))return;
                this.vectorsShowing = true;
                if (!this.chart.hideDrawings) {
                    var tmpPanels = {}
                        , panelName, i;
                    for (i = 0; t0l.G3o(i, this.drawingObjects.length); i++) {
                        var drawing = this.drawingObjects[i];
                        panelName = drawing.panelName;
                        if (!this.panels[drawing.panelName])continue;
                        if (!tmpPanels[panelName]) {
                            tmpPanels[panelName] = [];
                        }
                        tmpPanels[panelName].push(drawing);
                    }
                    for (panelName in tmpPanels) {
                        this.startClip(panelName);
                        var arr = tmpPanels[panelName];
                        for (i = 0; t0l.H3o(i, arr.length); i++) {
                            arr[i].render(this.chart.context);
                        }
                        this.endClip();
                    }
                }
                this.runAppend("drawVectors", arguments);
            }
            ;
            STXChart.prototype.consolidatedQuote = function (quotes, position, periodicity, interval, timeUnit, dontRoll, alignToHour) {
                var Y0n = "edQu", V7y = "lid", y7y = "so";
                if (t0l.h3o(position, 0))return null;
                var arguments$ = [quotes, position, periodicity, interval, dontRoll, alignToHour];
                if (this.runPrepend("consolidatedQuote", arguments$))return null;
                if (!dontRoll && this.dontRoll)dontRoll = true;
                var quote = quotes[position];

                function consolidate(self, p) {
                    var ratio = 1;
                    if (self.layout.adj && quotes[p].Adj_Close) {
                        ratio = t0l.x3o(quotes[p].Adj_Close, quotes[p].Close);
                    }
                    if (t0l.U3o("High", quotes[p]))if (t0l.D3o(quotes[p].High * ratio, quote.High))quote.High = t0l.B3o(quotes[p].High, ratio);
                    if (t0l.m3o("Low", quotes[p]))if (t0l.n3o(quotes[p].Low * ratio, quote.Low))quote.Low = t0l.p3o(quotes[p].Low, ratio);
                    quote.Volume += quotes[p].Volume;
                    if (t0l.v3o("Close", quotes[p]) && t0l.f3o(quotes[p].Close, null))quote.Close = t0l.i3o(quotes[p].Close, ratio);
                    quote.ratio = ratio;
                    for (var element in quotes[p]) {
                        if (!quote[element]) {
                            quote[element] = quotes[p][element];
                        }
                    }
                }

                function newInterval(p, interval) {
                    var d1 = quotes[t0l.E3o(p, 1)].DT, d2 = quotes[p].DT;
                    if (t0l.q3o(interval, "week")) {
                        if (t0l.Z3o(d2.getDay(), d1.getDay()))return true;
                    }
                    else if (t0l.l5o(interval, "month")) {
                        if (t0l.K5o(d2.getMonth(), d1.getMonth()))return true;
                    }
                    else {
                        if (t0l.k5o(d2.getDay(), d1.getDay()))return true;
                    }
                    return false;
                }

                function newIntradayInterval(position, p, periodicity, interval, timeUnit) {
                    var nextBar = t0l.L5o(interval, periodicity), d1 = new Date(quotes[position].DT);
                    if (t0l.e5o(timeUnit, "millisecond"))d1.setMilliseconds(d1.getMilliseconds() + nextBar); else if (t0l.J5o(timeUnit, "second"))d1.setSeconds(d1.getSeconds() + nextBar); else d1.setMinutes(d1.getMinutes() + nextBar);
                    var d2 = quotes[p].DT;
                    if (alignToHour) {
                        if (t0l.C5o(quotes[position].DT.getMinutes(), nextBar)) {
                            if (t0l.Q5o(d2.getMinutes() % nextBar, 0)) {
                                return true;
                            }
                        }
                    }
                    if (t0l.F5o(d2.getTime(), d1.getTime()))return true;
                    return false;
                }

                var p = position, i;
                if ((t0l.Y5o(interval, "week") || t0l.N5o(interval, "month")) && !dontRoll) {
                    for (i = 1; t0l.w5o(i, periodicity); i++) {
                        while (t0l.o5o(p + 1, quotes.length) && !newInterval(p + 1, interval)) {
                            p++;
                            consolidate(this, p);
                        }
                        if (t0l.M5o(i, periodicity)) {
                            p++;
                            if (t0l.u5o(p, quotes.length))consolidate(this, p);
                        }
                    }
                }
                else if (!this.isDailyInterval(interval) && t0l.S5o(interval, "tick") && t0l.b5o(periodicity, 1)) {
                    for (i = 1; t0l.c5o(i, periodicity); i++) {
                        p = position + i;
                        if (t0l.T1o(p, quotes.length) && newIntradayInterval(position, p, periodicity, interval, timeUnit)) {
                            p--;
                            break;
                        }
                        if (t0l.W1o(p, 0) && t0l.a1o(p, quotes.length)) {
                            consolidate(this, p);
                        }
                    }
                }
                else {
                    for (i = 1; t0l.P1o(i, periodicity); i++) {
                        p = position + i;
                        if (t0l.t1o(p, 0) && t0l.R1o(p, quotes.length)) {
                            consolidate(this, p);
                        }
                    }
                }
                for (i in this.plugins) {
                    var plugin = this.plugins[i];
                    if (plugin.consolidate)plugin.consolidate(quotes, position, p, quote);
                }
                this.runAppend((S9y + F4y + y7y + V7y + B9y + t0l.r6y + Y0n + Q5y + t0l.r6y + E9y), arguments$);
                return {"quote": quote, "position": p + 1}
                    ;
            }
            ;
            H(t0l.G52);
            P(t0l.T52);
            U(t0l.l52);
            C(t0l.a52);
            Q(t0l.t52);
            F(t0l.F7n);
            Y(e7n);
            STXChart.prototype.displayChart = function (chart) {
                var j3y = "erplot", e0y = "baseli", Q7n = "tt", A6y = "ove", v9y = "e_u", p2n = "eli", R82 = "ne_trac", H12 = "x_c", j7y = "ndle_", A4n = "stx_ca", L1y = "ns", f9n = "e_up", Q3y = "ollo", G4y = "stx_", e0n = "har", c4y = "_c", n2n = "ba", X7y = "agi", noBorders = (t0l.y1o(this.layout.candleWidth - chart.tmpWidth, 2) && t0l.r1o(chart.tmpWidth, 3));
                if (this.runPrepend("displayChart", arguments))return;
                this.chart.baseLegendColors = [];
                var chartType = this.layout.chartType, colorFunction = null;
                if (chart.customChart) {
                    if (chart.customChart.chartType)chartType = chart.customChart.chartType;
                    if (chart.customChart.colorFunction)colorFunction = chart.customChart.colorFunction;
                }
                this.controls.baselineHandle.style.display = "none";
                var panel = chart.panel;
                if (t0l.O1o(this.layout.aggregationType, (t0l.P1y + X7y))) {
                    this.drawKagiSquareWave(panel, "stx_kagi_up", "stx_kagi_down");
                    this.chart.baseLegendColors.push(this.getCanvasColor("stx_kagi_up"));
                    this.chart.baseLegendColors.push(this.getCanvasColor("stx_kagi_down"));
                }
                else if (t0l.I1o(this.layout.aggregationType, "pandf")) {
                    this.drawPointFigureChart(panel, "stx_pandf_up", "X");
                    this.chart.baseLegendColors.push(this.getCanvasColor("stx_pandf_up"));
                    this.drawPointFigureChart(panel, "stx_pandf_down", "O");
                    this.chart.baseLegendColors.push(this.getCanvasColor("stx_pandf_down"));
                }
                else if (t0l.d1o(chartType, "line")) {
                    this.drawLineChart(panel, "stx_line_chart");
                }
                else if (t0l.V1o(chartType, "mountain")) {
                    this.chart.baseLegendColors = null;
                    this.drawMountainChart(panel);
                }
                else if (t0l.s1o(chartType, "colored_mountain")) {
                    this.startClip(panel.name);
                    var stxLineUpColor = this.getCanvasColor("stx_line_up"), stxLineDownColor = this.getCanvasColor("stx_line_down"), stxLineColor = this.getCanvasColor("stx_line_chart");
                    if (!colorFunction)colorFunction = function (stx, quote, mode) {
                        if (t0l.g1o(quote.Close, quote.iqPrevClose))return stxLineUpColor; else if (t0l.j1o(quote.Close, quote.iqPrevClose))return stxLineDownColor; else return stxLineColor;
                        return null;
                    }
                    ;
                    var colors1 = this.drawMountainChart(panel, "stx_colored_mountain_chart", colorFunction);
                    for (var c1 in colors1)this.chart.baseLegendColors.push(c1);
                    this.endClip();
                }
                else if (t0l.X1o(chartType, "wave")) {
                    this.drawWaveChart(panel);
                }
                else if (t0l.z1o(chartType, "bar")) {
                    this.startClip(panel.name);
                    this.drawBarChartHighPerformance(panel, "stx_bar_chart");
                    this.endClip();
                }
                else if (t0l.A8o(chartType, "colored_line")) {
                    this.startClip(panel.name);
                    var stxLineUpColor = this.getCanvasColor("stx_line_up"), stxLineDownColor = this.getCanvasColor("stx_line_down"), stxLineColor = this.getCanvasColor("stx_line_chart");
                    if (!colorFunction)colorFunction = function (stx, quote, mode) {
                        if (t0l.G8o(quote.Close, quote.iqPrevClose))return stxLineUpColor; else if (t0l.H8o(quote.Close, quote.iqPrevClose))return stxLineDownColor; else return stxLineColor;
                        return null;
                    }
                    ;
                    var colors1 = this.drawLineChart(panel, "stx_line_chart", colorFunction);
                    for (var c1 in colors1)this.chart.baseLegendColors.push(c1);
                    this.endClip();
                }
                else if (t0l.h8o(chartType, "colored_bar")) {
                    this.startClip(panel.name);
                    if (colorFunction) {
                        var colors2 = this.drawBarChart(panel, (D3y + F9n + u0y + n2n + K3y + c4y + e0n + t0l.r6y), colorFunction);
                        for (var c2 in colors2)this.chart.baseLegendColors.push(c2);
                    }
                    else {
                        this.drawBarChartHighPerformance(panel, "stx_bar_up", STXChart.CLOSEUP);
                        this.drawBarChartHighPerformance(panel, "stx_bar_down", STXChart.CLOSEDOWN);
                        this.drawBarChartHighPerformance(panel, "stx_bar_even", STXChart.CLOSEEVEN);
                        this.chart.baseLegendColors.push(this.getCanvasColor("stx_bar_up"));
                        this.chart.baseLegendColors.push(this.getCanvasColor("stx_bar_down"));
                    }
                    this.endClip();
                }
                else if (t0l.x8o(chartType, "hollow_candle") || t0l.U8o(chartType, "volume_candle")) {
                    this.startClip(panel.name);
                    if (colorFunction) {
                        if (!this.noWicksOnCandles[this.layout.aggregationType])this.drawShadows(panel, colorFunction);
                        this.drawCandles(panel, colorFunction, false);
                        this.drawCandles(panel, colorFunction, true);
                    }
                    else {
                        if (!this.noWicksOnCandles[this.layout.aggregationType]) {
                            this.drawShadowsHighPerformance(panel, (G4y + N1y + Q3y + W4n + u0y + D4y + P5y + n9y + t0l.n5y + f9n), STXChart.CLOSEUP);
                            this.drawShadowsHighPerformance(panel, "stx_hollow_candle_down", STXChart.CLOSEDOWN);
                            this.drawShadowsHighPerformance(panel, "stx_hollow_candle_even", STXChart.CLOSEEVEN);
                        }
                        var colorUp = this.getCanvasColor("stx_hollow_candle_up"), colorDown = this.getCanvasColor("stx_hollow_candle_down"), colorEven = this.getCanvasColor("stx_hollow_candle_even");
                        this.drawCandlesHighPerformance(panel, colorUp, "transparent", t0l.D8o(STXChart.CLOSEUP, STXChart.CANDLEDOWN));
                        this.drawCandlesHighPerformance(panel, colorDown, "transparent", t0l.B8o(STXChart.CLOSEDOWN, STXChart.CANDLEDOWN));
                        this.drawCandlesHighPerformance(panel, colorEven, (o8y + B9y + L1y + t0l.V3y + B9y + K3y + k9y + t0l.r6y), t0l.m8o(STXChart.CLOSEEVEN, STXChart.CANDLEDOWN));
                        this.drawCandlesHighPerformance(panel, this.containerColor, colorUp, t0l.n8o(STXChart.CLOSEUP, STXChart.CANDLEUP));
                        this.drawCandlesHighPerformance(panel, this.containerColor, colorDown, t0l.p8o(STXChart.CLOSEDOWN, STXChart.CANDLEUP));
                        this.drawCandlesHighPerformance(panel, this.containerColor, colorEven, t0l.v8o(STXChart.CLOSEEVEN, STXChart.CANDLEUP));
                        this.chart.baseLegendColors.push(colorUp);
                        this.chart.baseLegendColors.push(colorDown);
                    }
                    this.endClip();
                }
                else if (t0l.f8o(chartType, "candle")) {
                    this.startClip(panel.name);
                    var coloredShadowUp = this.getCanvasColor("stx_candle_shadow_up"), coloredShadowDown = this.getCanvasColor("stx_candle_shadow_down"), coloredShadow = (t0l.i8o(coloredShadowUp, coloredShadowDown));
                    if (!colorFunction && coloredShadow) {
                        var stxCandleShadow = this.getCanvasColor("stx_candle_shadow"), stxCandleUpColor = this.getCanvasColor("stx_candle_up"), stxCandleDownColor = this.getCanvasColor("stx_candle_down"), stxCandleUp = this.canvasStyle((A4n + j7y + t0l.O6y + t0l.V3y)), stxCandleDown = this.canvasStyle("stx_candle_down");
                        colorFunction = function (stx, quote, mode) {
                            if (t0l.E8o(mode, "shadow")) {
                                if (coloredShadow) {
                                    if (t0l.q8o(quote.Close, quote.Open))return coloredShadowUp; else if (t0l.Z8o(quote.Close, quote.Open))return coloredShadowDown;
                                }
                                return stxCandleShadow;
                            }
                            else if (t0l.l7B(mode, "solid")) {
                                if (t0l.K7B(quote.Close, quote.Open))return stxCandleUpColor; else if (t0l.k7B(quote.Close, quote.Open))return stxCandleDownColor; else if (t0l.L7B(quote.Close, quote.Open))return stxCandleShadow;
                            }
                            else if (t0l.e7B(mode, "outline")) {
                                var styleArray1;
                                if (t0l.J7B(quote.Close, quote.Open))styleArray1 = stxCandleUp; else if (t0l.C7B(quote.Close, quote.Open))styleArray1 = stxCandleDown; else return null;
                                var borderColor = styleArray1["border-left-color"];
                                if (!borderColor)borderColor = styleArray1.borderLeftColor;
                                return borderColor;
                            }
                            return null;
                        }
                        ;
                    }
                    if (colorFunction) {
                        if (!this.noWicksOnCandles[this.layout.aggregationType])this.drawShadows(panel, colorFunction);
                        this.drawCandles(panel, colorFunction, false);
                        if (!noBorders)this.drawCandles(panel, colorFunction, true);
                    }
                    else {
                        if (!this.noWicksOnCandles[this.layout.aggregationType])this.drawShadowsHighPerformance(panel, "stx_candle_shadow");
                        var styleArray = this.canvasStyle((D3y + t0l.r6y + H12 + d32 + n9y + t0l.n5y + E9y + u0y + t0l.O6y + t0l.V3y)), borderColor = styleArray["border-left-color"];
                        if (!borderColor)borderColor = styleArray.borderLeftColor;
                        if (noBorders)borderColor = null;
                        this.drawCandlesHighPerformance(panel, this.getCanvasColor("stx_candle_up"), borderColor, STXChart.CANDLEUP);
                        this.chart.baseLegendColors.push(styleArray.color);
                        styleArray = this.canvasStyle("stx_candle_down");
                        borderColor = styleArray["border-left-color"];
                        if (!borderColor)borderColor = styleArray.borderLeftColor;
                        if (noBorders)borderColor = null;
                        this.drawCandlesHighPerformance(panel, this.getCanvasColor("stx_candle_down"), borderColor, STXChart.CANDLEDOWN);
                        this.chart.baseLegendColors.push(styleArray.color);
                    }
                    this.endClip();
                }
                else if (t0l.Q7B(chartType, "baseline_delta")) {
                    this.startClip(panel.name);
                    this.setStyle("stx_baseline_trace", "opacity", 0);
                    this.drawLineChart(panel, (O9y + j2n + u0y + h9y + r4n + R82 + E9y));
                    var baseline = chart.baseline.actualLevel;
                    if (t0l.F7B(baseline, null)) {
                        baseline = this.pixelFromPriceTransform(baseline, chart.panel);
                        var styles = {
                                "over": (O9y + j2n + o4y + B9y + D3y + p2n + P5y + v9y + t0l.V3y),
                                "under": "stx_baseline_down"
                            }
                            ;
                        for (var s in styles) {
                            var parameters = {
                                    panelName: "chart",
                                    band: "Close",
                                    threshold: chart.baseline.actualLevel,
                                    color: this.getCanvasColor(styles[s]),
                                    direction: (t0l.Y7B(s, "over") ? 1 : -1),
                                    edgeHighlight: this.getCanvasColor(styles[s]),
                                    edgeParameters: {
                                        pattern: "solid",
                                        lineWidth: parseInt(this.canvasStyle(styles[s]).width, 10) + 0.1,
                                        opacity: 1
                                    }
                                }
                                , color = parameters.color;
                            if (color && t0l.N7B(color, "transparent")) {
                                var gradient = chart.context.createLinearGradient(0, (t0l.w7B(s, (A6y + K3y)) ? 0 : t0l.o7B(2, baseline)), 0, baseline);
                                gradient.addColorStop(0, STX.hexToRgba(color, 60));
                                gradient.addColorStop(1, STX.hexToRgba(color, 10));
                                parameters.color = gradient;
                                parameters.opacity = 1;
                            }
                            STX.Studies.preparePeakValleyFill(this, chart.dataSegment, parameters);
                            this.chart.baseLegendColors.push(color);
                        }
                        this.plotLine(0, 1, baseline, baseline, this.containerColor, "line", chart.context, true, {
                                pattern: "solid",
                                lineWidth: "1.1",
                                opacity: 1
                            }
                        );
                        this.plotLine(0, 1, baseline, baseline, this.getCanvasColor("stx_baseline"), "line", chart.context, true, {
                                pattern: (n9y + Q5y + Q7n + r2y),
                                lineWidth: "2.1",
                                opacity: 0.5
                            }
                        );
                        if (t0l.M7B(this.chart.baseline.userLevel, false)) {
                            this.controls.baselineHandle.style.top = t0l.u7B(baseline, parseInt(getComputedStyle(this.controls.baselineHandle).height, 10) / 2, "px");
                            this.controls.baselineHandle.style.left = t0l.q7B(this.chart.right, parseInt(getComputedStyle(this.controls.baselineHandle).width, 10), "px");
                            this.controls.baselineHandle.style.display = "block";
                        }
                    }
                    this.endClip();
                }
                else if (t0l.z7B(chartType, "baseline_delta_mountain")) {
                    this.startClip(panel.name);
                    this.setStyle("stx_baseline_trace", "opacity", 0);
                    this.drawLineChart(panel, "stx_baseline_trace");
                    var baseline = chart.baseline.actualLevel;
                    if (t0l.A9B(baseline, null)) {
                        baseline = this.pixelFromPriceTransform(baseline, chart.panel);
                        var styles = {"over": "stx_baseline_up", "under": "stx_baseline_down"}
                            ;
                        for (var s in styles) {
                            var parameters = {
                                    panelName: "chart",
                                    band: "Close",
                                    threshold: chart.baseline.actualLevel,
                                    color: this.getCanvasColor(styles[s]),
                                    direction: (t0l.G9B(s, "over") ? 1 : -1),
                                    edgeHighlight: this.getCanvasColor(styles[s]),
                                    edgeParameters: {
                                        pattern: "solid",
                                        lineWidth: parseInt(this.canvasStyle(styles[s]).width, 10) + 0.1,
                                        opacity: 1
                                    }
                                }
                                ;
                            parameters.color = "transparent";
                            STX.Studies.preparePeakValleyFill(this, chart.dataSegment, parameters);
                            this.chart.baseLegendColors.push(color);
                        }
                        this.plotLine(0, 1, baseline, baseline, this.containerColor, "line", chart.context, true, {
                                pattern: "solid",
                                lineWidth: "1.1",
                                opacity: 1
                            }
                        );
                        this.plotLine(0, 1, baseline, baseline, this.getCanvasColor((G4y + e0y + W0n)), "line", chart.context, true, {
                                pattern: "dotted",
                                lineWidth: "2.1",
                                opacity: 0.5
                            }
                        );
                        if (t0l.H9B(this.chart.baseline.userLevel, false)) {
                            this.controls.baselineHandle.style.top = t0l.h9B(baseline, parseInt(getComputedStyle(this.controls.baselineHandle).height, 10) / 2, (t0l.V3y + j2n));
                            this.controls.baselineHandle.style.left = t0l.t9B(this.chart.right, parseInt(getComputedStyle(this.controls.baselineHandle).width, 10), "px");
                            this.controls.baselineHandle.style.display = "block";
                        }
                        this.drawMountainChart(panel, "stx_baseline_delta_mountain");
                    }
                    this.endClip();
                }
                else if (t0l.C9B(chartType, (D3y + D4y + Q7n + j3y))) {
                    this.startClip(panel.name);
                    this.scatter(panel);
                    this.endClip();
                }
                else {
                    this.chart.baseLegendColors = null;
                }
                this.runAppend("displayChart", arguments);
            }
            ;
            STXChart.prototype.calculateATR = function (chart, period) {
                if (!period)period = 20;
                var total = 0;
                for (var i = 1; t0l.Q9B(i, chart.dataSet.length); i++) {
                    var q = chart.dataSet[i], previousClose = chart.dataSet[t0l.F9B(i, 1)].Close, trueRange = Math.max(t0l.Y9B(q.High, q.Low), Math.abs(t0l.N9B(q.High, previousClose)), Math.abs(t0l.w9B(q.Low, previousClose)));
                    total += trueRange;
                    if (t0l.o9B(i, period))total -= chart.dataSet[t0l.M9B(i, period)].trueRange;
                    q.trueRange = trueRange;
                    q.atr = t0l.u9B(total, period);
                }
            }
            ;
            STXChart.prototype.calculateMedianPrice = function (chart) {
                var d;
                for (var i = 0; t0l.S9B(i, chart.dataSet.length); ++i) {
                    d = chart.dataSet[i];
                    d[(N1y + t0l.n5y + m6y + N3y)] = t0l.b9B((d.High + d.Low), 2);
                }
            }
            ;
            STXChart.prototype.calculateTypicalPrice = function (chart) {
                var d;
                for (var i = 0; t0l.c9B(i, chart.dataSet.length); ++i) {
                    d = chart.dataSet[i];
                    d["hlc/3"] = t0l.T0B((d.High + d.Low + d.Close), 3);
                }
            }
            ;
            STXChart.prototype.calculateWeightedClose = function (chart) {
                var d;
                for (var i = 0; t0l.W0B(i, chart.dataSet.length); ++i) {
                    d = chart.dataSet[i];
                    d["hlcc/4"] = t0l.a0B((d.High + d.Low + 2 * d.Close), 4);
                }
            }
            ;
            STXChart.prototype.calculateOHLC4 = function (chart) {
                var d;
                for (var i = 0; t0l.P0B(i, chart.dataSet.length); ++i) {
                    d = chart.dataSet[i];
                    d["ohlc/4"] = t0l.t0B((d.Open + d.High + d.Low + d.Close), 4);
                }
            }
            ;
            STXChart.prototype.currentQuote = function () {
                var quote = null;
                if (!this.chart.dataSet)return null;
                for (var i = t0l.R0B(this.chart.dataSet.length, 1); t0l.y0B(i, 0); i--)if (this.chart.dataSet[i])return this.chart.dataSet[i];
                return null;
            }
            ;
            STXChart.prototype.correctIfOffEdge = function (theChart) {
                if (this.runPrepend("correctIfOffEdge", arguments))return;
                for (var chartName in this.charts) {
                    var chart = this.charts[chartName], leftPad = this.minimumLeftBars + 1;
                    if (chart.allowScrollPast) {
                        var rightPad = t0l.r0B(chart.maxTicks, leftPad);
                        if (t0l.O0B(chart.maxTicks - rightPad, chart.dataSet.length)) {
                            rightPad = t0l.I0B(chart.maxTicks, chart.dataSet.length);
                        }
                        if (t0l.d0B(chart.scroll - rightPad, chart.dataSet.length)) {
                            chart.scroll = chart.dataSet.length + rightPad;
                        }
                        if (t0l.V0B(chart.scroll, leftPad)) {
                            chart.scroll = leftPad;
                            this.micropixels = -this.layout.candleWidth / 2;
                        }
                    }
                    else {
                        if (t0l.s0B(chart.scroll, leftPad)) {
                            chart.scroll = leftPad;
                        }
                        if (t0l.g0B(chart.scroll, chart.dataSet.length)) {
                            chart.scroll = chart.dataSet.length;
                        }
                    }
                }
                this.runAppend("correctIfOffEdge", arguments);
            }
            ;
            STXChart.prototype.createDataSegment = function (theChart) {
                var C7y = "ment", G7y = "Seg", n4y = "eateDa";
                if (this.runPrepend((n7y + n4y + Y4y + G7y + C7y), arguments))return;
                for (var chartName in this.charts) {
                    var chart = this.charts[chartName];
                    if (theChart)chart = theChart;
                    chart.baseline.actualLevel = chart.baseline.userLevel ? chart.baseline.userLevel : chart.baseline.defaultLevel;
                    chart.dataSegment = [];
                    var position = t0l.j0B(chart.dataSet.length, chart.scroll, 1);
                    for (var i = -1; t0l.b0B(i, chart.scroll) && t0l.c0B(i, chart.maxTicks); i++) {
                        position++;
                        if (i == -1 && !chart.baseline.includeInDataSegment)continue;
                        if (t0l.T2B(position, chart.dataSet.length) && t0l.W2B(position, 0)) {
                            if (chart.dataSet[position].candleWidth) {
                                chart.dataSet[position].candleWidth = null;
                                chart.dataSet[position].leftOffset = null;
                            }
                            chart.dataSegment.push(chart.dataSet[position]);
                            if (t0l.a2B(chart.baseline.actualLevel, null) && t0l.P2B(i, 0))chart.baseline.actualLevel = chart.dataSet[position].iqPrevClose;
                        }
                        else if (t0l.t2B(position, 0)) {
                            chart.dataSegment.push(null);
                        }
                    }
                    if (t0l.R2B(this.layout.chartType, "volume_candle")) {
                        var totalVolume = 0;
                        for (var v = 0; t0l.y2B(v, chart.dataSegment.length); v++) {
                            if (chart.dataSegment[v])totalVolume += chart.dataSegment[v].Volume;
                        }
                        var accumOffset = 0;
                        for (var w = 0; t0l.r2B(w, chart.dataSegment.length); w++) {
                            if (chart.dataSegment[w]) {
                                if (chart.dataSegment[w].Volume) {
                                    var workingWidth = chart.width;
                                    if (t0l.O2B(chart.scroll, chart.maxTicks))workingWidth -= this.preferences.whitespace;
                                    chart.dataSegment[w].candleWidth = t0l.I2B(workingWidth, chart.dataSegment[w].Volume, totalVolume);
                                    chart.dataSegment[w].leftOffset = accumOffset + t0l.w2B(chart.dataSegment[w].candleWidth, 2);
                                    accumOffset += chart.dataSegment[w].candleWidth;
                                }
                                else {
                                    chart.dataSegment[w].candleWidth = this.layout.candleWidth;
                                    chart.dataSegment[w].leftOffset = accumOffset + t0l.o2B(this.layout.candleWidth, 2);
                                    accumOffset += this.layout.candleWidth;
                                }
                            }
                            else {
                                accumOffset += this.layout.candleWidth;
                            }
                        }
                    }
                    if (theChart)break;
                }
                this.runAppend("createDataSegment", arguments);
            }
            ;
            STXChart.prototype.leftTick = function () {
                return t0l.M2B(this.chart.dataSet.length, this.chart.scroll);
            }
            ;
            STXChart.prototype.getStartDateOffset = function () {
                for (var ds = 0; t0l.u2B(ds, this.chart.dataSegment.length); ds++) {
                    if (this.chart.dataSegment[ds]) {
                        return ds;
                    }
                }
                return 0;
            }
            ;
            STXChart.prototype.setStartDate = function (dt) {
                for (var i = 0; t0l.S2B(i, this.chart.dataSet.length); i++) {
                    var bar = this.chart.dataSet[i];
                    if (t0l.b2B(bar.DT.getTime(), dt.getTime())) {
                        this.chart.scroll = t0l.c2B(this.chart.dataSet.length, i);
                        this.draw();
                        return;
                    }
                }
            }
            ;
            STXChart.prototype.updateListeners = function (event) {
                for (var i in this.plugins) {
                    var plugin = this.plugins[i];
                    if (plugin.display && plugin.listener)plugin.listener(this, event);
                }
            }
            ;
            STXChart.prototype.clearPixelCache = function () {
                for (var x in this.panels) {
                    var panel = this.panels[x];
                    panel.cacheHigh = null;
                    panel.cacheLow = null;
                    panel.cacheLeft = 1000000;
                    panel.cacheRight = -1;
                }
                for (var chartName in this.charts) {
                    var chart = this.charts[chartName];
                    if (!chart.dataSet)continue;
                    for (var i = 0; t0l.T4B(i, chart.dataSet.length); i++) {
                        chart.dataSet[i].cache = {}
                        ;
                    }
                }
            }
            ;
            STXChart.prototype.createYAxisLabel = function (panel, txt, y, backgroundColor, color, ctx, yAxis) {
                var h52 = "mi";
                if (t0l.W4B(panel.yAxis.drawPriceLabels, false))return;
                var yax = yAxis ? yAxis : panel.yAxis, context = ctx ? ctx : this.chart.context, margin = 3, height = this.getCanvasFontSize("stx_yaxis") + t0l.a4B(margin, 2);
                this.canvasFont("stx_yaxis", context);
                var drawBorders = yax.displayBorder;
                if (t0l.P4B(this.axisBorders, false))drawBorders = false;
                if (t0l.t4B(this.axisBorders, true))drawBorders = true;
                var tickWidth = drawBorders ? 3 : 0, width;
                try {
                    width = context.measureText(txt).width + tickWidth + t0l.R4B(margin, 2);
                }
                catch (e) {
                    width = yax.width;
                }
                var x = t0l.y4B(yax.left, margin, 3), textx = x + margin + tickWidth, radius = 3, position = (t0l.F4B(yax.position, null) ? panel.chart.yAxis.position : yax.position);
                if (t0l.Y4B(position, (t0l.n5y + M2y))) {
                    x = yax.left + yax.width + margin - 3;
                    width = width * -1;
                    textx = x;
                    radius = -3;
                    context.textAlign = "right";
                }
                if (t0l.N4B(y + (height / 2), yax.bottom))y = t0l.w4B(yax.bottom, (height / 2));
                if (t0l.o4B(y - (height / 2), yax.top))y = yax.top + (t0l.M4B(height, 2));
                context.fillStyle = backgroundColor;
                if (typeof (STX[this.yaxisLabelStyle]) == 'undefined') {
                    this.yaxisLabelStyle = "roundRectArrow";
                }
                var yaxisLabelStyle = this.yaxisLabelStyle;
                if (yax.yaxisLabelStyle)yaxisLabelStyle = yax.yaxisLabelStyle;
                STX[yaxisLabelStyle](context, x, t0l.u4B(y, (height / 2)), width, height, radius, true, false);
                if (t0l.S4B(this.preferences.currentPriceLine, true) && t0l.b4B(panel.chart.scroll - 1, Math.ceil(panel.chart.width / this.layout.candleWidth))) {
                    context.globalCompositeOperation = "destination-over";
                    this.plotLine(panel.left, panel.right, y, y, backgroundColor, "line", context, panel, {
                            pattern: "dashed",
                            lineWidth: 1,
                            opacity: 0.8
                        }
                    );
                    context.globalCompositeOperation = "source-over";
                }
                context.textBaseline = (h52 + n9y + n9y + t0l.n5y + E9y);
                context.fillStyle = color ? color : STX.chooseForegroundColor(backgroundColor);
                if (t0l.c4B(context.fillStyle, backgroundColor)) {
                    if (t0l.T6B(backgroundColor.toUpperCase(), "#FFFFFF"))context.fillStyle = "#000000"; else context.fillStyle = "#FFFFFF";
                }
                context.fillText(txt, textx, y + 1);
                context.textAlign = "left";
            }
            ;
            STXChart.prototype.createXAxisLabel = function (panel, txt, x, backgroundColor, color, pointed) {
                var D9y = "FFF", I7y = "F", context = this.chart.context, margin = 2, fontstyle = "stx-float-date", height = this.getCanvasFontSize(fontstyle) + t0l.W6B(margin, 2);
                this.canvasFont(fontstyle, context);
                var width;
                try {
                    width = context.measureText(txt).width + t0l.a6B(margin, 2);
                }
                catch (e) {
                    width = 0;
                }
                var y = panel.top + panel.height - height;
                if (t0l.P6B(x + (width / 2), panel.left) || t0l.t6B(x - (width / 2), panel.right))return;
                if (!pointed) {
                    if (t0l.R6B(x + (width / 2), panel.right))x = t0l.y6B(panel.right, (width / 2));
                    if (t0l.r6B(x - (width / 2), panel.left))x = panel.left + (t0l.O6B(width, 2));
                }
                context.fillStyle = backgroundColor;
                STX.roundRect(context, t0l.I6B(x, (width / 2)), y, width, height, 3, true, false);
                if (pointed) {
                    var arrowHeight = t0l.d6B(panel.bottom, panel.yAxis.bottom, height);
                    context.beginPath();
                    context.moveTo(t0l.o6B(x, arrowHeight), y);
                    context.lineTo(x, t0l.M6B(y, arrowHeight));
                    context.lineTo(x + arrowHeight, y);
                    context.closePath();
                    context.fill();
                }
                context.textBaseline = "top";
                context.fillStyle = color ? color : STX.chooseForegroundColor(backgroundColor);
                if (t0l.u6B(context.fillStyle, backgroundColor)) {
                    if (t0l.S6B(backgroundColor.toUpperCase(), "#FFFFFF"))context.fillStyle = "#000000"; else context.fillStyle = (b5y + I7y + D9y + I7y + I7y);
                }
                context.fillText(txt, t0l.b6B(x, width / 2, margin), y + margin);
            }
            ;
            STXChart.prototype.drawCurrentHR = function () {
                var W2n = "ntH", y82 = "ur", F0y = "ataS", K52 = "R", d1y = "rentH", b9n = "wCur";
                if (this.runPrepend((k9n + B9y + b9n + d1y + K52), arguments))return;
                var backgroundColor, color;
                for (var chartName in this.charts) {
                    var chart = this.charts[chartName], panel = chart.panel, yAxis = panel.yAxis;
                    if (t0l.l3B(yAxis.drawCurrentPriceLabel, false))continue;
                    if (chart.customChart && t0l.K3B(chart.customChart.chartType, "none"))continue;
                    var whichSet = yAxis.whichSet;
                    if (!whichSet)whichSet = (n9y + F0y + I0y);
                    var l = chart[whichSet].length;
                    if (t0l.k3B(whichSet, "dataSegment")) {
                        while (t0l.L3B(l, (chart.width - this.micropixels + (this.layout.candleWidth) / 2 + 1) / this.layout.candleWidth))l--;
                    }
                    if (l) {
                        var quote = chart[whichSet][t0l.e3B(l, 1)], prevClose = quote.Close, currentClose = quote.Close;
                        if (t0l.J3B(chart.dataSet.length, 2)) {
                            var quote2 = chart[whichSet][t0l.C3B(l, 2)];
                            prevClose = quote2.Close;
                        }
                        if (t0l.Q3B(currentClose, prevClose)) {
                            backgroundColor = this.canvasStyle("stx_current_hr_down").backgroundColor;
                            color = this.canvasStyle("stx_current_hr_down").color;
                        }
                        else {
                            backgroundColor = this.canvasStyle("stx_current_hr_up").backgroundColor;
                            color = this.canvasStyle("stx_current_hr_up").color;
                        }
                        if (quote.transform)quote = quote.transform;
                        var txt, labelDecimalPlaces = Math.max(panel.yAxis.printDecimalPlaces, panel.chart.decimalPlaces);
                        if (yAxis.maxDecimalPlaces || t0l.F3B(yAxis.maxDecimalPlaces, 0))labelDecimalPlaces = Math.min(labelDecimalPlaces, yAxis.maxDecimalPlaces);
                        if (yAxis.priceFormatter) {
                            txt = yAxis.priceFormatter(this, panel, quote.Close, labelDecimalPlaces);
                        }
                        else {
                            txt = this.formatYAxisPrice(quote.Close, panel, labelDecimalPlaces);
                        }
                        var y = this.pixelFromPrice(quote.Close, panel);
                        this.createYAxisLabel(panel, txt, y, backgroundColor, color);
                    }
                }
                this.runAppend((n9y + B82 + t9n + y82 + R1y + W2n + K52), arguments);
            }
            ;
            STXChart.prototype.getDefaultColor = function () {
                var a82 = 0.65;
                this.defaultColor = e4y;
                var bgColor = t0l.a1y, div = this.chart.container;
                while (!bgColor || STX.isTransparent(bgColor)) {
                    var cStyle = getComputedStyle(div);
                    if (!cStyle)return;
                    bgColor = cStyle.backgroundColor;
                    if (STX.isTransparent(bgColor))bgColor = M4y;
                    div = div.parentNode;
                    if (!div || !div.tagName)break;
                }
                if (bgColor) {
                    if (t0l.Y3B(bgColor, M4y))bgColor = c7n;
                    this.containerColor = bgColor;
                    if (!STX.isTransparent(bgColor)) {
                        var hsv = STX.hsv(bgColor), v = hsv[t0l.l52];
                        if (t0l.N3B(v, a82))this.defaultColor = e4y; else this.defaultColor = c7n;
                    }
                    else {
                        this.defaultColor = e4y;
                    }
                }
                else {
                    this.containerColor = c7n;
                }
            }
            ;
            STXChart.prototype.startAsyncAction = function () {
                if (!this.pendingAsyncs)this.pendingAsyncs = [];
                this.pendingAsyncs.push(x1y);
            }
            ;
            STXChart.prototype.registerChartDrawnCallback = function (fc) {
                if (!this.asyncCallbacks)this.asyncCallbacks = [];
                this.asyncCallbacks.push(fc);
                return {fc: fc}
                    ;
            }
            ;
            STXChart.prototype.unregisterChartDrawnCallback = function (obj) {
                for (var i = 0; t0l.w3B(i, this.asyncCallbacks.length); i++) {
                    if (t0l.o3B(this.asyncCallbacks[i], obj.fc)) {
                        this.asyncCallbacks.splice(i, 1);
                        return;
                    }
                }
            }
            ;
            STXChart.prototype.makeAsyncCallbacks = function () {
                if (!this.asyncCallbacks)return;
                if (!this.pendingAsyncs || !this.pendingAsyncs.length) {
                    for (var i = 0; t0l.M3B(i, this.asyncCallbacks.length); i++) {
                        (this.asyncCallbacks[i])();
                    }
                }
            }
            ;
            STXChart.prototype.completeAsyncAction = function () {
                this.pendingAsyncs.pop();
                this.makeAsyncCallbacks();
            }
            ;
            STXChart.prototype.draw = function () {
                this.debug();
                if (!this.chart.canvas)return;
                if (!this.chart.dataSet)return;
                if (!this.chart.canvasHeight)return;
                this.offset = t0l.u3B(this.layout.candleWidth, this.candleWidthPercent, 2);
                STX.clearCanvas(this.chart.canvas, this);
                if (this.runPrepend("draw", arguments))return;
                if (!this.xaxisHeight) {
                    this.xaxisHeight = this.getCanvasFontSize("stx_xaxis") + 4;
                    if (this.chart.xAxis.displayBorder || this.axisBorders)this.xaxisHeight += 3;
                }
                this.getDefaultColor();
                this.vectorsShowing = false;
                this.drawPanels();
                this.yAxisLabels = [];
                var i, chart, chartName, plugin;
                for (chartName in this.charts) {
                    chart = this.charts[chartName];
                    this.correctIfOffEdge();
                    this.createDataSegment();
                    var axisRepresentation = this.createXAxis(chart);
                    this.initializeDisplay(chart);
                    this.rendererAction(chart, "calculate");
                    this.renderYAxis(chart);
                    this.drawXAxis(chart, axisRepresentation);
                    chart.tmpWidth = Math.floor(t0l.q3B(this.layout.candleWidth, this.candleWidthPercent));
                    if (t0l.Z3B(chart.tmpWidth % 2, 0)) {
                        chart.tmpWidth += 1;
                        if (t0l.l5B(chart.tmpWidth, this.layout.candleWidth))chart.tmpWidth -= 2;
                    }
                    if (t0l.K5B(chart.tmpWidth, 0.5))chart.tmpWidth = 0.5;
                    for (i in this.plugins) {
                        plugin = this.plugins[i];
                        if (plugin.display) {
                            if (plugin.drawUnder)plugin.drawUnder(this, chart);
                        }
                    }
                    this.rendererAction(chart, "underlay");
                    STX.Studies.displayStudies(this, chart, true);
                    this.displayChart(chart);
                    STX.Studies.displayStudies(this, chart, false);
                    this.rendererAction(chart, "overlay");
                }
                for (chartName in this.charts) {
                    chart = this.charts[chartName];
                    for (i in this.plugins) {
                        plugin = this.plugins[i];
                        if (plugin.display) {
                            if (plugin.drawOver)plugin.drawOver(this, chart);
                        }
                    }
                }
                for (var panel in this.panels) {
                    if (!this.panels[panel].hidden)this.plotYAxisText(this.panels[panel]);
                }
                for (var yLbl = 0; t0l.k5B(yLbl, this.yAxisLabels.length); yLbl++) {
                    this.createYAxisLabel.apply(this, this.yAxisLabels[yLbl].args);
                }
                this.createCrosshairs();
                this.drawVectors();
                this.drawCurrentHR();
                this.displayInitialized = true;
                if (this.controls.home) {
                    if (t0l.L5B(this.chart.scroll - 1, Math.ceil(this.chart.width / this.layout.candleWidth))) {
                        this.controls.home.style.display = "block";
                    }
                    else {
                        this.controls.home.style.display = "none";
                    }
                }
                this.positionMarkers();
                for (chartName in this.charts) {
                    chart = this.charts[chartName];
                    if (this.quoteDriver)this.quoteDriver.checkLoadMore(chart);
                }
                this.runAppend("draw", arguments);
                this.makeAsyncCallbacks();
            }
            ;
            STXChart.prototype.adjustBackingStore = function (canvas, context) {
                this.devicePixelRatio = window.devicePixelRatio || 1;
                if (t0l.e5B(this.devicePixelRatio, 1.0))this.devicePixelRatio = 1.0;
                var backingStoreRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1, ratio = t0l.J5B(this.devicePixelRatio, backingStoreRatio);
                if (!STX.isAndroid || STX.is_chrome) {
                    var oldWidth = canvas.width, oldHeight = canvas.height;
                    canvas.width = t0l.C5B(oldWidth, ratio);
                    canvas.height = t0l.Q5B(oldHeight, ratio);
                    canvas.style.width = oldWidth + 'px';
                    canvas.style.height = oldHeight + 'px';
                    context.scale(ratio, ratio);
                }
            }
            ;
            STXChart.prototype.resizeCanvas = function () {
                if (!this.chart.panel)this.chart.panel = this.panels.chart;
                var canvas = this.chart.canvas, context = this.chart.context;
                if (canvas && context) {
                    this.chart.tempCanvas.height = canvas.height = this.chart.container.clientHeight;
                    this.chart.tempCanvas.width = canvas.width = this.chart.container.clientWidth;
                    this.adjustBackingStore(canvas, context);
                    this.adjustBackingStore(this.chart.tempCanvas, this.chart.tempCanvas.context);
                    this.floatCanvas.height = this.chart.container.clientHeight;
                    this.floatCanvas.width = this.chart.container.clientWidth;
                    this.adjustBackingStore(this.floatCanvas, this.floatCanvas.context);
                }
                var rect = this.container.getBoundingClientRect();
                this.top = rect.top;
                this.left = rect.left;
                this.canvasWidth = this.chart.canvasWidth = this.chart.container.clientWidth;
                this.right = this.left + this.canvasWidth;
                this.height = this.chart.container.clientHeight;
                this.width = t0l.F5B(this.right, this.left);
                this.bottom = this.top + this.height;
                this.calculateYAxisPositions();
                this.chart.canvasRight = this.right;
                this.chart.canvasHeight = this.height;
                var candleWidth = this.layout.candleWidth;
                if (typeof (candleWidth) == "undefined")candleWidth = 8;
                for (var chartName in this.charts) {
                    var chart = this.charts[chartName];
                    if (this.layout.span) {
                        this.setCandleWidth(this.getSpanCandleWidth(this.layout.span), chart);
                    }
                    else {
                        this.setCandleWidth(candleWidth, chart);
                        if (t0l.Y5B(chart.scroll, chart.width / candleWidth)) {
                            chart.scroll = Math.floor(t0l.N5B(chart.width, candleWidth));
                            var wsInTicks = Math.round(t0l.w5B(this.preferences.whitespace, this.layout.candleWidth));
                            chart.scroll -= wsInTicks;
                        }
                    }
                    var idealNumberOfTicks = 10, appxLabelWidth;
                    try {
                        appxLabelWidth = t0l.o5B(context.measureText("10:00").width, 2);
                    }
                    catch (e) {
                        appxLabelWidth = 100;
                    }
                    while (t0l.M5B(idealNumberOfTicks, 1)) {
                        if (t0l.u5B(this.chart.width / appxLabelWidth, idealNumberOfTicks))break;
                        idealNumberOfTicks /= 1.5;
                    }
                    chart.xAxis.autoComputedTickSizePixels = Math.round(t0l.S5B(this.chart.width, idealNumberOfTicks));
                    if (t0l.b5B(chart.xAxis.autoComputedTickSizePixels, 1))chart.xAxis.autoComputedTickSizePixels = 1;
                }
            }
            ;
            STXChart.prototype.setCandleWidth = function (newCandleWidth, chart) {
                if (!chart)chart = this.chart;
                if (t0l.c5B(newCandleWidth, this.minimumCandleWidth))newCandleWidth = this.minimumCandleWidth;
                this.layout.candleWidth = newCandleWidth;
                chart.maxTicks = Math.ceil(t0l.T1B(this.chart.width, newCandleWidth) + 0.5);
            }
            ;
            STXChart.prototype.resizeChart = function (maintainScroll) {
                var E2y = "resizeChart";
                if (this.runPrepend(E2y, arguments))return;
                if (t0l.W1B(maintainScroll, P0n))maintainScroll = x1y;
                if (maintainScroll)this.preAdjustScroll();
                var previousHeight = this.chart.canvasHeight;
                this.resizeCanvas();
                if (maintainScroll)this.postAdjustScroll();
                if (this.displayInitialized) {
                    this.adjustPanelPositions();
                    this.draw();
                }
                else if (t0l.a1B(this.chart.canvasHeight, t0l.G52) && t0l.P1B(previousHeight, t0l.G52)) {
                    this.adjustPanelPositions();
                    this.draw();
                }
                this.runAppend(E2y, arguments);
            }
            ;
            STXChart.prototype.newChart = function (symbol, masterData, chart, cb, params) {
                var V9y = "gured", b2y = "fi", G5y = "eFe", P7y = "uo", U82 = "pecif", l8y = "terDa", Q12 = ((70.5E1, 5.0E1) > 55 ? (101, "12") : (0x115, 108) >= (6.41E2, 78.30E1) ? 0x14C : (0, 0xEC) <= 11.24E2 ? (0x195, "N") : (1.342E3, 88.)), b7y = "ing", K9n = "Warn", z0n = 'object';
                if (!chart)chart = this.chart;
                if (!params)params = {}
                ;
                if (params.periodicity) {
                    if (params.periodicity.interval)this.layout.interval = params.periodicity.interval;
                    if (params.periodicity.period)this.layout.periodicity = params.periodicity.period;
                    this.layout.timeUnit = params.periodicity.timeUnit;
                }
                var prevSymbol = chart.symbol, prevSymbolObject = STX.clone(chart.symbolObject), prevMarket = chart.market;
                if (!symbol) {
                    chart.symbol = t0l.a1y;
                    chart.symbolObject = {symbol: t0l.a1y}
                    ;
                }
                else if (typeof symbol == z0n) {
                    chart.symbol = symbol.symbol;
                    chart.symbolObject = symbol;
                }
                else {
                    chart.symbol = symbol;
                    chart.symbolObject.symbol = symbol;
                }
                if (!masterData && this.quoteDriver) {
                    var callback = function (err) {
                            if (err) {
                                chart.symbol = prevSymbol;
                                chart.symbolObject = prevSymbolObject;
                                chart.market = prevMarket;
                            }
                            if (cb)cb(err);
                        }
                        , setSpan = params.span;
                    if (!setSpan && this.layout)setSpan = this.layout.setSpan;
                    if (setSpan && setSpan.base) {
                        var multiplier = setSpan.multiplier || t0l.T52;
                        this.chart.masterData = t0l.a1y;
                        this.displayInitialized = P0n;
                        this.setSpan({
                                maintainPeriodicity: params.periodicity ? x1y : P0n,
                                multiplier: multiplier,
                                base: setSpan.base,
                                symbol: chart.symbol
                            }
                            , callback);
                    }
                    else {
                        var self = this;
                        this.quoteDriver.newChart({
                                symbol: chart.symbol,
                                symbolObject: chart.symbolObject,
                                chart: chart,
                                initializeChart: x1y
                            }
                            , function () {
                                self.adjustPanelPositions();
                                self.quoteDriver.updateSubscriptions();
                                if (params.stretchToFillScreen) {
                                    self.fillScreen();
                                }
                                callback.apply(self, arguments);
                            }
                        );
                    }
                }
                else {
                    if (!masterData) {
                        console.log((K9n + b7y + p9n + Q12 + Q5y + a0y + v5y + B9y + D3y + l8y + t0l.r6y + B9y + a0y + D3y + U82 + q1y + E9y + n9y + a0y + B9y + B0n + a0y + P5y + Q5y + a0y + w32 + P7y + t0l.r6y + G5y + r2y + a0y + S9y + F4y + b2y + V9y));
                    }
                    if (!chart.symbol)chart.symbol = R6y;
                    this.setMasterData(masterData, chart);
                    this.createDataSet();
                    this.initializeChart();
                    if (params.span && params.span.multiplier && params.span.base) {
                        this.setSpan({
                                maintainPeriodicity: x1y,
                                multiplier: params.span.multiplier,
                                base: params.span.base
                            }
                        );
                    }
                    else if (params.stretchToFillScreen) {
                        this.fillScreen();
                    }
                    else {
                        this.draw();
                    }
                    this.adjustPanelPositions();
                    if (cb)cb();
                }
            }
            ;
            STXChart.prototype.fillScreen = function () {
                var candleWidth = this.layout.candleWidth, chartWidth = t0l.t1B(this.chart.width, this.preferences.whitespace), count = this.chart.dataSet.length;
                if (t0l.R1B(count * candleWidth, chartWidth)) {
                    this.draw();
                    return;
                }
                var newCandleWidth = t0l.y1B(chartWidth, count);
                this.setCandleWidth(newCandleWidth, this.chart);
                this.home({maintainWhitespace: true}
                );
            }
            ;
            STXChart.prototype.setMasterData = function (masterData, chart) {
                var j5y = '= ', F5y = 'dex', T6y = 'I', O8y = 'ast', y12 = 'in', t4y = 'tr', n1y = 'des', X6y = 'vi', p3y = 'ro', U1y = 'rve', H2y = 'ata', E7n = '() ', x9n = 'oa', k12 = 'seFl', Y6y = ((0x17D, 2.) <= 105. ? (142., 'U') : (80.9E1, 125.) < 0x46 ? (6.97E2, 6) : 0xEB > (7.88E2, 1.078E3) ? 56 : (0x96, 46.5E1)), z52 = '. ', E8y = 'mber', x52 = 'ot', j1y = 'ng', i2n = 'si', Y9y = 'C', d12 = 'at', H3y = 'erD', R9y = 'tMa', c8y = 'jec', r7y = 'ta', l1y = 'Da', n32 = 'st', j6y = 'T', s9y = 'D', Z2n = 'g', l5y = 'sin', z2y = 'M', o82 = ' : ', m2n = 'rData', n7n = 'tMaste';
                if (!chart)chart = this.chart;
                if (this.marketFactory) {
                    var marketDef = this.marketFactory(chart.symbolObject);
                    this.setMarket(marketDef, chart);
                }
                chart.masterData = masterData;
                if (t0l.r1B(chart.name, (g12 + T0n)))this.masterData = masterData;
                var i;
                for (i = 0; masterData && t0l.O1B(i, masterData.length); i++) {
                    if (this.transformMasterDataQuote)masterData[i] = this.transformMasterDataQuote(masterData[i]);
                    var quotes = masterData[i];
                    if (quotes.DT) {
                        quotes.DT = new Date(quotes.DT);
                        quotes.Date = STX.yyyymmddhhmmssmmm(quotes.DT);
                    }
                    else if (quotes.Date)quotes.DT = STX.strToDateTime(quotes.Date); else console.log((d2y + f8y + n7n + m2n + o82 + z2y + C2n + d2y + l5y + Z2n + G7n + s9y + j6y + G7n + U9n + c9y + G7n + s9y + U9n + z4y + f8y + G7n + d0n + C0n + G7n + K0n + U9n + n32 + O32 + l1y + r7y + G7n + d0n + m9n + c8y + z4y));
                    if (quotes.Volume && typeof quotes.Volume !== "number")quotes.Volume = parseInt(quotes.Volume, 10);
                    if (typeof quotes.Close == 'number') {
                    }
                    else {
                        console.log((d2y + f8y + R9y + d2y + z4y + H3y + d12 + U9n + o82 + Y9y + h2n + f52 + f8y + G7n + C2n + d2y + G7n + K0n + C2n + d2y + i2n + j1y + G7n + d0n + e2y + G7n + C0n + x52 + G7n + U9n + G7n + C0n + a6y + E8y + z52 + Y6y + T7n + G7n + q2y + U9n + e2y + k12 + x9n + z4y + E7n + C2n + a7n + G7n + Z9y + d0n + a6y + e2y + G7n + T9n + H2y + G7n + d2y + f8y + U1y + e2y + G7n + q2y + p3y + X6y + n1y + G7n + d2y + t4y + y12 + Z2n + d2y + z52 + z2y + O8y + O32 + l1y + r7y + G7n + T6y + C0n + F5y + j5y) + i + ' Value = ' + quotes.Close);
                    }
                    if (t0l.I1B(quotes.High, null))delete  quotes.High;
                    if (t0l.d1B(quotes.Low, null))delete  quotes.Low;
                    if (t0l.V1B(quotes.Open, null))delete  quotes.Open;
                }
                chart.decimalPlaces = this.callbacks.calculateTradingDecimalPlaces({
                        stx: this,
                        chart: chart,
                        symbol: chart.symbolObject.symbol,
                        symbolObject: chart.symbolObject
                    }
                );
                if (!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDates(masterData);
                this.chart.roundit = Math.pow(10, chart.decimalPlaces);
                for (i in this.plugins) {
                    var plugin = this.plugins[i];
                    if (plugin.display) {
                        if (plugin.setMasterData)plugin.setMasterData(this, chart);
                    }
                }
                for (var s in this.chart.series) {
                    var series = this.chart.series[s];
                    if (series.addSeriesData) {
                        series.addSeriesData(this);
                    }
                }
            }
            ;
            STXChart.prototype.getSymbols = function () {
                var o3y = "ter", T12 = "ar", M0y = "lu", c82 = "inc", a = [], obj;
                for (var chartName in this.charts) {
                    var chart = this.charts[chartName];
                    a.push({
                            symbol: chart.symbol,
                            symbolObject: chart.symbolObject,
                            periodicity: this.layout.periodicity,
                            interval: this.layout.interval,
                            timeUnit: this.layout.timeUnit
                        }
                    );
                    for (var field in chart.series) {
                        var series = chart.series[field];
                        if (!series.parameters.data || !series.parameters.data.useDefaultQuoteFeed)continue;
                        obj = {
                            symbol: field,
                            symbolObject: series.symbolObject,
                            periodicity: this.layout.periodicity,
                            interval: this.layout.interval,
                            timeUnit: this.layout.timeUnit
                        }
                        ;
                        if (t0l.s1B(arguments[0], (c82 + M0y + n9y + E9y + e3y + t0l.V3y + T12 + l0y + o3y + D3y)))obj.parameters = series.parameters;
                        if (!obj.symbolObject)obj.symbolObject = {symbol: field}
                        ;
                        a.push(obj);
                    }
                }
                for (var p in this.panels) {
                    if (this.panels[p].studyQuotes) {
                        for (var sq in this.panels[p].studyQuotes) {
                            obj = {
                                symbol: sq,
                                symbolObject: {symbol: sq}
                                ,
                                periodicity: this.layout.periodicity,
                                interval: this.layout.interval,
                                timeUnit: this.layout.timeUnit
                            }
                            ;
                            a.push(obj);
                        }
                    }
                }
                for (var s = t0l.g1B(a.length, 1); t0l.j1B(s, 0); s--) {
                    var symbol = a[s].symbol;
                    if (this.isEquationChart(symbol)) {
                        var res = STX.formatEquation(symbol);
                        if (res) {
                            for (var sym = 0; t0l.X1B(sym, res.symbols.length); sym++) {
                                obj = {
                                    symbol: res.symbols[sym],
                                    symbolObject: a[s].symbolObject,
                                    periodicity: a[s].periodicity,
                                    interval: a[s].interval,
                                    timeUnit: a[s].timeUnit
                                }
                                ;
                                a.push(obj);
                            }
                            a.splice(s, 1);
                        }
                    }
                }
                return a;
            }
            ;
            STXChart.prototype.setDisplayDate = function (quote) {
                var dt = quote.DT, milli = t0l.z1B(dt.getSeconds(), o0n) + dt.getMilliseconds(), newDT;
                if (this.dataZone) {
                    newDT = new timezoneJS.Date(dt.getFullYear(), dt.getMonth(), dt.getDate(), dt.getHours(), dt.getMinutes(), this.dataZone);
                    dt = new Date(newDT.getTime() + milli);
                }
                if (this.displayZone) {
                    newDT = new timezoneJS.Date(dt.getTime(), this.displayZone);
                    dt = new Date(newDT.getFullYear(), newDT.getMonth(), newDT.getDate(), newDT.getHours(), newDT.getMinutes());
                    dt = new Date(dt.getTime() + milli);
                }
                quote.displayDate = dt;
            }
            ;
            STXChart.prototype.setDisplayDates = function (masterData) {
                if (!masterData)return;
                for (var i = 0; t0l.A8B(i, masterData.length); i++) {
                    var quote = masterData[i];
                    if (quote.DT)this.setDisplayDate(quote);
                }
            }
            ;
            STXChart.prototype.streamTrade = function (priceData, now, symbol, params) {
                var j9y = "ject", s32 = "ob", chart = this.chart;
                if (!params)params = {}
                ;
                if (params.chart)chart = params.chart;
                var price = null, bid = null, ask = null, volume = 0;
                if (typeof priceData == (s32 + j9y)) {
                    price = priceData.last;
                    bid = priceData.bid;
                    ask = priceData.ask;
                    volume = priceData.volume;
                    now = new Date(now);
                }
                else {
                    price = arguments[0];
                    volume = arguments[1];
                    now = new Date(arguments[2]);
                    symbol = arguments[3];
                }
                var md = chart.masterData;
                if (!now) {
                    now = new Date();
                }
                var quote;
                if (!md || !md.length || t0l.G8B(this.layout.interval, "tick")) {
                    quote = {
                        Date: STX.yyyymmddhhmmssmmm(now),
                        DT: now,
                        Open: price,
                        Close: price,
                        High: price,
                        Low: price,
                        Volume: volume,
                        Bid: bid,
                        Ask: ask
                    }
                    ;
                    this.appendMasterData([quote], chart, params);
                }
                else {
                    quote = STX.clone(md[t0l.H8B(md.length, 1)]);
                    var market24 = new STX.Market({}
                        ), iter_parms = {
                            'begin': quote.DT,
                            'interval': this.layout.interval,
                            'periodicity': this.layout.periodicity,
                            'timeUnit': this.layout.timeUnit,
                            'inZone': this.dataZone,
                            'outZone': this.dataZone
                        }
                        , iter = market24.newIterator(iter_parms), next = iter.next();
                    if (t0l.h8B(now, next)) {
                        if (symbol) {
                            if (price || t0l.x8B(price, 0)) {
                                quote[symbol] = price;
                            }
                        }
                        else {
                            if (price || t0l.U8B(price, 0)) {
                                quote.Close = price;
                                if (t0l.D8B(price, quote.High) || t0l.B8B(quote.High, null))quote.High = price;
                                if (t0l.m8B(price, quote.Low) || t0l.n8B(quote.Low, null))quote.Low = price;
                                if (t0l.p8B(quote.Open, null))quote.Open = price;
                            }
                            if (volume)quote.Volume += volume;
                            if (bid || t0l.v8B(bid, 0))quote.Bid = bid;
                            if (ask || t0l.f8B(ask, 0))quote.Ask = ask;
                        }
                        var newParams = STX.clone(params);
                        if (typeof quote.Adj_Close != "undefined") {
                            quote.Adj_Close = quote.Close;
                        }
                        this.appendMasterData([quote], chart, newParams);
                    }
                    else {
                        var gaps = [], iter2_parms = {
                                'begin': now,
                                'interval': this.layout.interval,
                                'periodicity': this.layout.periodicity,
                                'timeUnit': this.layout.timeUnit,
                                'inZone': this.dataZone,
                                'outZone': this.dataZone
                            }
                            , iter2 = market24.newIterator(iter2_parms);
                        iter2.next();
                        now = iter2.previous();
                        while (t0l.i8B(next, now) && this.streamParameters.fillGaps) {
                            var gap = {
                                    Date: STX.yyyymmddhhmmssmmm(next),
                                    DT: next,
                                    Close: quote.Close,
                                    Open: quote.Close,
                                    High: quote.Close,
                                    Low: quote.Close,
                                    Volume: 0,
                                    Bid: quote.Bid,
                                    Ask: quote.Ask
                                }
                                ;
                            gaps.push(gap);
                            next = iter.next();
                        }
                        if (symbol) {
                            var c = this.currentQuote();
                            quote = {
                                Date: STX.yyyymmddhhmmssmmm(next),
                                DT: next,
                                Open: null,
                                Close: c.Close,
                                High: null,
                                Low: null,
                                Volume: volume,
                                Bid: c.Bid,
                                Ask: c.Ask
                            }
                            ;
                            quote[symbol] = price;
                        }
                        else {
                            quote = {
                                Date: STX.yyyymmddhhmmssmmm(next),
                                DT: next,
                                Open: price,
                                Close: price,
                                High: price,
                                Low: price,
                                Volume: volume,
                                Bid: bid,
                                Ask: ask
                            }
                            ;
                        }
                        gaps.push(quote);
                        this.appendMasterData(gaps, chart, params);
                    }
                }
            }
            ;
            STXChart.prototype.appendMasterData = function (appendQuotes, chart, params) {
                var O7y = "un";
                if (!params)params = {}
                ;
                if (!chart)chart = this.chart;
                if (t0l.E8B(appendQuotes.constructor, Object))appendQuotes = [appendQuotes];
                if (this.runPrepend("appendMasterData", [appendQuotes, chart, params]))return;
                if (!appendQuotes || !appendQuotes.length)return;
                var dt = appendQuotes[0].DT;
                if (!dt)dt = STX.strToDateTime(appendQuotes[0].Date);
                var masterData = chart.masterData, i;
                if (!masterData || !masterData.length) {
                    masterData = chart.masterData = STX.clone(appendQuotes);
                    for (i = 0; t0l.q8B(i, masterData.length); i++) {
                        if (masterData[i].DT)masterData[i].Date = STX.yyyymmddhhmmssmmm(masterData[i].DT); else masterData[i].DT = STX.strToDateTime(masterData[i].Date);
                        if (masterData[i].Volume && typeof masterData[i].Volume !== "number")masterData[i].Volume = parseInt(masterData[i].Volume, 10);
                        if (!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDate(masterData[i]);
                    }
                }
                else {
                    i = t0l.Z8B(masterData.length, 1);
                    while (t0l.l7j(i, 0)) {
                        var dt2 = masterData[i].DT;
                        if (!dt2)dt2 = STX.strToDateTime(masterData[i].Date);
                        if (t0l.K7j(dt2.getTime(), dt.getTime())) {
                            var plusOne = 0;
                            if (t0l.k7j(dt2.getTime(), dt.getTime()))plusOne = 1;
                            var advancing = plusOne;
                            for (var j = 0; t0l.L7j(j, appendQuotes.length); j++) {
                                if (!plusOne) {
                                    if (typeof masterData[i + j] != "undefined") {
                                        if (!appendQuotes[j].Volume && masterData[i + j].Volume) {
                                            appendQuotes[j].Volume = masterData[i + j].Volume;
                                        }
                                        if (!params.allowReplaceOHL) {
                                            if (masterData[i + j].Open) {
                                                appendQuotes[j].Open = masterData[i + j].Open;
                                            }
                                            if (t0l.e7j(masterData[i + j].High, appendQuotes[j].High)) {
                                                appendQuotes[j].High = masterData[i + j].High;
                                            }
                                            if (masterData[i + j].Low && t0l.J7j(masterData[i + j].Low, appendQuotes[j].Low)) {
                                                appendQuotes[j].Low = masterData[i + j].Low;
                                            }
                                        }
                                    }
                                    else {
                                        advancing++;
                                    }
                                    for (var field in this.chart.series) {
                                        if (typeof appendQuotes[j][field] == "undefined" && typeof masterData[i + j] != (O7y + n9y + E9y + S82 + E9y + n9y))appendQuotes[j][field] = masterData[i + j][field];
                                    }
                                    for (var p in this.panels) {
                                        if (this.panels[p].studyQuotes) {
                                            for (var sq in this.panels[p].studyQuotes) {
                                                if (!this.panels[p].studyQuotes[sq])continue;
                                                if (typeof appendQuotes[j][sq] == "undefined" && typeof masterData[i + j] != "undefined")appendQuotes[j][sq] = masterData[i + j][sq];
                                            }
                                        }
                                    }
                                }
                                masterData[i + j + plusOne] = appendQuotes[j];
                                if (masterData[i + j + plusOne].DT)masterData[i + j + plusOne].Date = STX.yyyymmddhhmmssmmm(masterData[i + j + plusOne].DT); else masterData[i + j + plusOne].DT = STX.strToDateTime(masterData[i + j + plusOne].Date);
                                if (masterData[i + j + plusOne].Volume && typeof masterData[i + j + plusOne].Volume !== "number")masterData[i + j + plusOne].Volume = parseInt(masterData[i + j + plusOne].Volume, 10);
                                if (!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDate(this.masterData[i + j + plusOne]);
                                var dontAdvanceScroll = t0l.C7j(chart.scroll, chart.maxTicks + 1) || chart.lockScroll || chart.spanLock;
                                if (dontAdvanceScroll && advancing) {
                                    chart.scroll += advancing;
                                    this.grabStartScrollX += advancing;
                                }
                            }
                            break;
                        }
                        i--;
                    }
                    for (i in this.plugins) {
                        var plugin = this.plugins[i];
                        if (plugin.display) {
                            if (plugin.appendMasterData)plugin.appendMasterData(this, appendQuotes, chart);
                        }
                    }
                }
                if (!this.masterData || !this.masterData.length)this.masterData = masterData;
                if (!params.noCreateDataSet) {
                    var sp = this.streamParameters;
                    if (++sp.count > sp.maxTicks || params.bypassGovernor) {
                        clearTimeout(sp.timeout);
                        this.createDataSet();
                        this.draw();
                        this.updateChartAccessories();
                        sp.count = 0;
                        sp.timeout = -1;
                    }
                    else {
                        var self = this;
                        if (sp.timeout == -1) {
                            sp.timeout = setTimeout(function () {
                                    self.createDataSet();
                                    self.draw();
                                    self.updateChartAccessories();
                                    self.streamParameters.count = 0;
                                    self.streamParameters.timeout = -1;
                                }
                                , sp.maxWait);
                        }
                    }
                }
                this.runAppend("appendMasterData", arguments);
            }
            ;
            STXChart.prototype.displayAll = function (params, cb) {
                var chart = this.chart;
                if (params && params.chart)chart = params.chart;
                var self = this;

                function displayTheResults() {
                    if (!chart.masterData.length)return;
                    var p = STX.clone(params);
                    p.dtLeft = chart.masterData[0].DT;
                    p.dtRight = chart.masterData[t0l.Q7j(chart.masterData.length, 1)].DT;
                    self.setRange(p);
                    if (cb)cb();
                }

                function loadAllTheData() {
                    self.quoteDriver.loadAll(chart, displayTheResults);
                }

                if (!this.quoteDriver) {
                    displayTheResults();
                    return;
                }
                if (this.dontRoll && t0l.F7j(this.layout.interval, "month")) {
                    this.setPeriodicityV2(1, "month", loadAllTheData);
                }
                else if (!STXChart.isDailyInterval(this.layout.interval)) {
                    this.setPeriodicityV2(1, "day", loadAllTheData);
                }
                else {
                    if (chart.moreAvailable) {
                        loadAllTheData();
                    }
                    else {
                        displayTheResults();
                    }
                }
            }
            ;
            STXChart.prototype.setRange = function (params, cb) {
                var u7y = "ndle", S52 = "ume_", G6y = "ol", Q1y = "nt", b32 = "d_", Y2y = "lor", S7n = 8037264, z5y = 6699687, C1y = 1687556116, g4y = ((15., 112) < (0x249, 4.91E2) ? (1.014E3, 1565675193) : (129., 0x5C) < (0x188, 7.0E1) ? 1.397E3 : (87, 3.54E2) >= (12.86E2, 0x24E) ? 14.290E2 : (93, 0x21D));
                if (STX.isEmpty(params)) {
                    params = {
                        dtLeft: arguments[0],
                        dtRight: arguments[1],
                        padding: arguments[2],
                        chart: arguments[3],
                        goIntoFuture: false
                    }
                    ;
                    cb = arguments[4];
                }
                if (params.periodicity) {
                    if (t0l.Y7j(params.periodicity.interval, 'tick'))params.periodicity = null;
                    if (!params.periodicity.period)params.periodicity.period = 1;
                }
                if (!params.chart)params.chart = this.chart;
                if (typeof params.padding == "undefined") {
                    params.padding = this.preferences.whitespace;
                }
                var dontChangePeriodicity = false, chart = params.chart, lt = params.dtLeft, rt = new Date();
                var W32 = g4y, k32 = -C1y, G32 = t0l.l52;
                for (var K32 = t0l.T52; t0l.F62.m62(K32.toString(), K32.toString().length, z5y) !== W32; K32++) {
                    ctx.fill();
                    G32 += t0l.l52;
                }
                if (t0l.F62.m62(G32.toString(), G32.toString().length, S7n) !== k32) {
                    panel.subholder.appendChild(this.controls.iconsTemplate.cloneNode(x1y));
                    self.defaultMarkerPlacement(params);
                    this.runAppend(V6y, arguments);
                    axisRepresentation.push(new STXChart.XAxisLabel(hz, G9n, text));
                    return k4H - H4H;
                }
                if (params.dtRight)rt = params.dtRight;
                if (!lt) {
                    var iter = this.standardMarketIterator(rt, null, chart);
                    lt = iter.previous(chart.maxTicks);
                    if (!params.periodicity)dontChangePeriodicity = true;
                }
                var self = this;

                function showTheRange() {
                    if (!chart.dataSet || t0l.N7j(chart.dataSet.length, 0)) {
                        if (cb)cb();
                        return;
                    }
                    var l = 0, r = 0;
                    if (t0l.w7j(lt.getTime(), chart.dataSet[0].DT.getTime()) || params.goIntoPast) {
                        l = self.tickFromDate(lt, chart, null, true);
                    }
                    else {
                        l = 0;
                    }
                    if (t0l.o7j(rt.getTime(), chart.dataSet[chart.dataSet.length - 1].DT.getTime()) || params.goIntoFuture) {
                        r = self.tickFromDate(rt, chart);
                    }
                    else {
                        r = t0l.M7j(chart.dataSet.length, 1);
                    }
                    var ticks = t0l.u7j(r, l, 1);
                    if (t0l.q7j(ticks, 1)) {
                        if (cb)cb();
                        return;
                    }
                    self.setCandleWidth(t0l.Z7j((self.chart.width - params.padding), ticks), chart);
                    chart.scroll = (t0l.l9j(chart.dataSet.length, l, 1));
                    self.draw();
                    self.changeOccurred("layout");
                    if (cb)cb();
                }

                var loadMoreCount = 0;

                function loadTheRange(err) {
                    var N9y = "gic", m0y = "ci", R4y = "rio", b3y = "ec", x0y = ") ", W82 = "ny", x4y = "oo", W9n = "(): ", Z82 = "tRa", z6y = "Cha", v52 = (87.80E1 >= (0x1F, 0x195) ? (10, "S") : (7.08E2, 0x224));
                    if (err) {
                        if (cb)cb(err);
                        return;
                    }
                    loadMoreCount++;
                    if (t0l.G9j(loadMoreCount, 10)) {
                        console.log((v52 + X52 + X4y + z6y + T0n + e6y + D3y + E9y + Z82 + P5y + R8y + E9y + W9n + X52 + x4y + a0y + v5y + B9y + W82 + a0y + t0l.n5y + Q5y + B9y + n9y + D3y + w7y + R5y + k5y + x0y + G8y + K3y + Q5y + v5y + a0y + D3y + E9y + K3y + t0l.F4n + E9y + K3y + C7n + v52 + M1y + t0l.V3y + t0l.V3y + q1y + O5y + C7n + t9n + N1y + b3y + t0l.P1y + a0y + t0l.V3y + E9y + R4y + u2n + m0y + t0l.r6y + t0l.O2n + a0y + t0l.n5y + Q5y + N9y + e6y));
                        showTheRange();
                        return;
                    }
                    if (chart.moreAvailable && t0l.H9j(chart.masterData[0].DT, lt)) {
                        self.quoteDriver.checkLoadMore(chart, true, false, function (err) {
                                if (!err)loadTheRange();
                            }
                        );
                    }
                    else {
                        showTheRange();
                    }
                }

                function estimateMaxTicks(rtMS, ltMS, interval, period, dontRoll) {
                    var ticks = 0, ms = t0l.h9j(rtMS, ltMS);
                    if (STXChart.isDailyInterval(interval)) {
                        if (t0l.x9j(interval, "month")) {
                            ticks = t0l.U9j((ms / STX.MONTH), period);
                        }
                        else if (t0l.D9j(interval, "week")) {
                            ticks = t0l.B9j((ms / STX.WEEK), period);
                        }
                        else {
                            ticks = t0l.m9j((ms / STX.DAY), period);
                        }
                    }
                    else {
                        if (!isNaN(interval))ticks = t0l.n9j((ms / (STX.MINUTE * interval)), period); else {
                            if (t0l.p9j(interval, "millisecond"))ticks = t0l.v9j(ms, period); else if (t0l.f9j(interval, "second"))ticks = t0l.i9j((ms / STX.SECOND), period); else if (t0l.E9j(interval, "hour"))ticks = t0l.q9j((ms / STX.HOUR), period); else ticks = t0l.Z9j((ms / STX.MINUTE), period);
                        }
                    }
                    return Math.round(ticks);
                }

                if (this.quoteDriver) {
                    var intervalToUse, periodToUse, timeUnitToUse;
                    if (dontChangePeriodicity) {
                        intervalToUse = this.layout.interval;
                        timeUnitToUse = this.layout.timeUnit;
                        periodToUse = this.layout.period;
                    }
                    else if (params.periodicity) {
                        intervalToUse = params.periodicity.interval;
                        timeUnitToUse = params.periodicity.timeUnit;
                        periodToUse = params.periodicity.period;
                    }
                    else {
                        var rangeInMS = t0l.l0j(rt.getTime(), lt.getTime());
                        if (params.rangePeriodicityMap) {
                            var periodicityMap = params.rangePeriodicityMap, entryToUse = null;
                            for (var i = 0; t0l.K0j(i, periodicityMap.length); i++) {
                                var mapEntry = periodicityMap[i];
                                if (t0l.k0j(rangeInMS, mapEntry.range)) {
                                    entryToUse = mapEntry;
                                    break;
                                }
                            }
                            intervalToUse = entryToUse.interval;
                            periodToUse = entryToUse.periodicity;
                            timeUnitToUse = entryToUse.timeUnit;
                        }
                        else {
                            var pixelsPerBar = 2;
                            switch (this.layout.chartType) {
                                case "line":
                                case "colored_line":
                                case "mountain":
                                case (T0y + Y2y + E9y + b32 + u12 + Q1y + B9y + q1y + P5y):
                                case "baseline_delta":
                                case "baseline_delta_mountain":
                                case "wave":
                                    pixelsPerBar = 2;
                                    break;
                                case "candle":
                                case "bar":
                                case "colored_bar":
                                case "hollow_candle":
                                case (t0l.F4n + G6y + S52 + S9y + B9y + u7y):
                                case "scatterplot":
                                    pixelsPerBar = 5;
                                    break;
                            }
                            if (params.pixelsPerBar)pixelsPerBar = params.pixelsPerBar;
                            var numBars = t0l.L0j(chart.width, pixelsPerBar), possibleIntervals = [{
                                interval: 5,
                                ms: t0l.e0j(STX.MINUTE, 5)
                            }
                                , {interval: 30, ms: t0l.J0j(STX.MINUTE, 30)}
                                , {interval: "day", ms: STX.DAY}
                                , {interval: "month", ms: STX.MONTH}
                                , {interval: "year", ms: Number.MAX_VALUE}
                            ], numBarsLastInterval;
                            for (var j = 0; t0l.C0j(j, possibleIntervals.length); j++) {
                                var numBarsThisInterval = t0l.Q0j(rangeInMS, possibleIntervals[j].ms);
                                if (t0l.F0j(numBarsThisInterval, numBars)) {
                                    if (possibleIntervals[t0l.Y0j(j, 1)]) {
                                        intervalToUse = possibleIntervals[t0l.N0j(j, 1)].interval;
                                        periodToUse = Math.ceil(t0l.w0j(numBarsLastInterval, numBars));
                                    }
                                    else {
                                        intervalToUse = possibleIntervals[j].interval;
                                        periodToUse = 1;
                                    }
                                    break;
                                }
                                numBarsLastInterval = numBarsThisInterval;
                            }
                        }
                    }
                    this.chart.scroll = this.chart.maxTicks = estimateMaxTicks(rt.getTime(), lt.getTime(), intervalToUse, periodToUse, this.dontRoll);
                    this.layout.candleWidth = t0l.o0j(this.chart.width, this.chart.maxTicks);
                    var needDifferentData = t0l.M0j(this.layout.timeUnit, timeUnitToUse) && (t0l.u0j(timeUnitToUse, "seconds") || t0l.S0j(timeUnitToUse, "milliseconds"));
                    if (!needDifferentData && (t0l.b0j(STXChart.isDailyInterval(this.layout.interval), STXChart.isDailyInterval(intervalToUse))))needDifferentData = true; else if (!STXChart.isDailyInterval(this.layout.interval) && t0l.c0j(this.layout.interval, intervalToUse))needDifferentData = true;
                    if (!this.chart.masterData || needDifferentData) {
                        this.layout.interval = intervalToUse;
                        this.layout.periodicity = periodToUse;
                        this.layout.timeUnit = timeUnitToUse;
                        if (!this.layout.timeUnit) {
                            if (STXChart.isDailyInterval(this.layout.interval))this.layout.timeUnit = null; else if (t0l.T2j(this.layout.interval, "second"))this.layout.timeUnit = "second"; else this.layout.timeUnit = "minute";
                        }
                        var qparams = {symbol: chart.symbol, symbolObject: chart.symbolObject, chart: chart}
                            ;
                        if (!this.displayInitialized)qparams.initializeChart = true;
                        this.quoteDriver.newChart(qparams, loadTheRange);
                    }
                    else {
                        if (t0l.W2j(this.layout.interval, intervalToUse) || t0l.a2j(this.layout.periodicity, periodToUse)) {
                            this.layout.interval = intervalToUse;
                            this.layout.periodicity = periodToUse;
                            this.createDataSet();
                        }
                        loadTheRange();
                    }
                }
                else {
                    showTheRange();
                }
            }
            ;
            STXChart.prototype.setSpan = function (params, cb) {
                var I9n = ((25.90E1, 68) >= (67, 0xC7) ? 6.2E2 : (0x1D2, 104) > (143, 2.59E2) ? (0xC3, 9.92E2) : (9.4E1, 0x17E) >= (1., 85) ? (0x9D, 59) : (75, 0x22)), Z8y = 23, i4y = 'today', T4y = 'ytd', t4n = "today", Z9n = "ytd", q0n = "all", period = arguments[t0l.G52], interval = arguments[t0l.T52], padding = arguments[t0l.l52], chart = arguments[t0l.z32], useMarketTZ = arguments[t0l.a52];
                if (typeof params == L9y) {
                    period = params.period ? params.period : (params.multiplier ? params.multiplier : t0l.T52);
                    interval = params.interval ? params.interval : (params.base ? params.base : (params.span ? params.span : params.period));
                    padding = params.padding;
                    chart = params.chart;
                    useMarketTZ = params.useMarketTZ;
                }
                else {
                    params = {
                        period: period,
                        interval: interval,
                        padding: padding,
                        chart: chart,
                        useMarketTZ: useMarketTZ
                    }
                    ;
                    cb = arguments[t0l.H52];
                }
                if (!params.padding)params.padding = t0l.G52;
                if (!chart)chart = this.chart;
                interval = interval.toLowerCase();
                if (t0l.P2j(interval, q0n)) {
                    this.displayAll(params, cb);
                    return;
                }
                var iterInterval = interval;
                if (t0l.t2j(interval, w2y)) {
                    iterInterval = O52;
                    period *= I7n;
                }
                else if (t0l.R2j(interval, Z9n)) {
                    iterInterval = v82;
                }
                else if (t0l.y2j(interval, t4n)) {
                    iterInterval = v82;
                }
                var parms_copy = STX.shallowClone(params);
                parms_copy.goIntoFuture = P0n;
                var iter_parms = {
                        'begin': new Date(),
                        'interval': iterInterval,
                        'periodicity': period,
                        'inZone': this.dataZone,
                        'outZone': this.dataZone
                    }
                    , iter = chart.market.newIterator(iter_parms), leftDT = new Date();
                if (t0l.r2j(interval, T4y)) {
                    leftDT.setMonth(t0l.G52);
                    leftDT.setDate(t0l.T52);
                    leftDT.setHours(t0l.G52);
                    leftDT.setMinutes(t0l.G52);
                    leftDT.setSeconds(t0l.G52);
                    leftDT.setMilliseconds(t0l.G52);
                }
                else if (t0l.O2j(interval, t4n)) {
                    iter.next();
                    leftDT = iter.previous();
                }
                else {
                    leftDT = iter.previous();
                }
                parms_copy.dtLeft = leftDT;
                if (t0l.I2j(interval, i4y)) {
                    parms_copy.goIntoFuture = x1y;
                    parms_copy.dtRight = new Date(leftDT);
                    var closeHour = iter.market.zclose_hour, closeMinute = iter.market.zclose_minute;
                    parms_copy.dtRight.setHours(closeHour ? closeHour : Z8y);
                    parms_copy.dtRight.setMinutes(closeHour ? closeMinute : I9n);
                    parms_copy.dtRight.setSeconds(t0l.G52);
                    parms_copy.dtLeft.setHours(iter.market.zopen_hour);
                    parms_copy.dtLeft.setMinutes(iter.market.zopen_minute);
                    parms_copy.dtLeft.setSeconds(t0l.G52);
                }
                if (parms_copy.maintainPeriodicity) {
                    parms_copy.periodicity = {}
                    ;
                    parms_copy.periodicity.interval = this.layout.interval;
                    parms_copy.periodicity.period = this.layout.periodicity;
                }
                chart.spanLock = P0n;
                var self = this;
                this.setRange(parms_copy, function (err) {
                        if (!params.maintainPeriodicity) {
                            self.layout.setSpan = {base: params.base, multiplier: params.multiplier}
                            ;
                            self.changeOccurred(d52);
                        }
                        if (t0l.d2j(interval, Z9n) || t0l.V2j(interval, t4n)) {
                            chart.spanLock = x1y;
                        }
                        if (cb)cb(err);
                    }
                );
            }
            ;
            STXChart.prototype.getSpanCandleWidth = function (span) {
                var arr = span.split(",");
                if (t0l.s2j(arr.length, 2))return;
                var num = parseFloat(arr[0]), now = new Date(), prev = new Date();
                if (t0l.g2j(arr[1], "year")) {
                    prev.setFullYear(t0l.j2j(prev.getFullYear(), num));
                }
                else if (t0l.X2j(arr[1], "month")) {
                    prev.setMonth(t0l.z2j(prev.getMonth(), num));
                }
                else if (t0l.A4j(arr[1], "day")) {
                    prev.setDate(t0l.G4j(prev.getDate(), num));
                }
                else if (t0l.H4j(arr[1], "week")) {
                    prev.setDate(t0l.h4j(prev.getDate(), (7 * num)));
                }
                var diff = t0l.x4j((now.getTime() - prev.getTime()), 1000, 60, 60, 24);
                diff = t0l.D4j(diff, 5, 7);
                var candleWidth = t0l.r4j(this.chart.width, diff);
                return candleWidth;
            }
            ;
            STXChart.prototype.setMaxTicks = function (ticks, params) {
                if (!params)params = {}
                ;
                ticks = Math.round(ticks);
                if (t0l.O4j(ticks, t0l.l52))ticks = t0l.l52;
                var padding = params.padding;
                if (!padding)padding = t0l.G52;
                this.layout.candleWidth = t0l.I4j((this.chart.width - padding), ticks);
                if (!this.layout.candleWidth)this.layout.candleWidth = t0l.t52;
                this.chart.maxTicks = Math.round(t0l.d4j((this.chart.width / this.layout.candleWidth), 0.499));
                if (params.padding || t0l.V4j(params.padding, t0l.G52))this.chart.scroll = ticks + t0l.T52;
            }
            ;
            STXChart.prototype.construct = function () {
                this.stackPanel(e9y, e9y, t0l.T52);
                this.adjustPanelPositions();
                this.chart.panel = this.panels[this.chart.name];
                this.cx = t0l.G52;
                this.cy = t0l.G52;
                this.micropixels = t0l.G52;
                this.chart.panel.subholder.appendChild(this.controls.home);
                this.callbackListeners = {}
                ;
            }
            ;
            STXChart.prototype.addEventListener = function (type, cb) {
                if (!type)type = i1y;
                var arr = this.callbackListeners[type];
                if (!arr)this.callbackListeners[type] = arr = [];
                arr.push(cb);
                return {type: type, cb: cb}
                    ;
            }
            ;
            STXChart.prototype.removeEventListener = function (obj, cb) {
                if (typeof obj != "object") {
                    obj = {type: type, cb: cb}
                    ;
                }
                if (!obj.type)obj.type = "*";
                var arr = this.callbackListeners[obj.type];
                if (!arr)return;
                for (var i = 0; t0l.s4j(i, arr.length); i++) {
                    if (t0l.g4j(arr[i], obj.cb)) {
                        arr.splice(i);
                        if (!arr.length)obj[obj.type] = null;
                        return;
                    }
                }
            }
            ;
            STXChart.prototype.dispatch = function (type, data) {
                if (this.callbacks[type])(this.callbacks[type])(data);
                var arr = this.callbackListeners[type];
                if (arr) {
                    for (var i = 0; t0l.j4j(i, arr.length); i++)(arr[i])(data);
                }
                arr = this.callbackListeners["*"];
                if (arr) {
                    for (var j = 0; t0l.X4j(j, arr.length); j++)(arr[j])(data);
                }
            }
            ;
            STXChart.prototype.deleteYAxisIfUnused = function (panel, yAxis) {
                if (!yAxis)return;
                if (t0l.z4j(yAxis, panel.yAxis))return;
                for (var r in this.chart.seriesRenderers) {
                    var renderer = this.chart.seriesRenderers[r];
                    if (t0l.A6j(renderer.params.yAxis, yAxis)) {
                        if (t0l.G6j(renderer.seriesParams.length, 0))return;
                    }
                }
                var i;
                for (i = 0; t0l.H6j(i, panel.yaxisLHS.length); i++) {
                    if (t0l.h6j(panel.yaxisLHS[i], yAxis))panel.yaxisLHS.splice(i, 1);
                }
                for (i = 1; t0l.x6j(i, panel.yaxisRHS.length); i++) {
                    if (t0l.U6j(panel.yaxisRHS[i], yAxis))panel.yaxisRHS.splice(i, 1);
                }
                this.resizeCanvas();
                this.adjustPanelPositions();
            }
            ;
            STXChart.prototype.addYAxis = function (panel, yAxis) {
                if (!yAxis)return;
                if (!panel.yaxisLHS) {
                    panel.yaxisLHS = [];
                    panel.yaxisRHS = [];
                    if (t0l.D6j(panel.yAxis.position, "right"))panel.yaxisRHS.push(panel.yAxis); else panel.yaxisLHS.push(panel.yAxis);
                }
                var arr = panel.yaxisLHS.concat(panel.yaxisRHS);
                for (var i = 0; t0l.B6j(i, arr.length); i++) {
                    if (t0l.m6j(arr[i], yAxis))return;
                }
                if (t0l.n6j(yAxis.position, "left")) {
                    panel.yaxisLHS.unshift(yAxis);
                }
                else {
                    yAxis.position = "right";
                    panel.yaxisRHS.push(yAxis);
                }
                this.preAdjustScroll();
                this.resizeCanvas();
                this.adjustPanelPositions();
                this.postAdjustScroll();
            }
            ;
            STXChart.prototype.calculateYAxisPositions = function () {
                var panelsInOrder = [];
                for (var chartName in this.charts) {
                    panelsInOrder.push(chartName);
                }
                for (var panelName in this.panels) {
                    var p = this.panels[panelName];
                    if (t0l.p6j(p.name, p.chart.name))continue;
                    panelsInOrder.push(panelName);
                }
                for (var j = 0; t0l.v6j(j, panelsInOrder.length); j++) {
                    var panel = this.panels[panelsInOrder[j]];
                    if (!panel)continue;
                    var isAChart = t0l.f6j(panel.name, panel.chart.name);
                    if (!panel.yaxisLHS) {
                        panel.yaxisLHS = [];
                        panel.yaxisRHS = [];
                        if (t0l.i6j(panel.name, panel.chart.name) || panel.yAxis.position) {
                            if (t0l.E6j(panel.yAxis.position, "left"))panel.yaxisLHS.push(panel.yAxis); else panel.yaxisRHS.push(panel.yAxis);
                        }
                        else {
                            var position = panel.chart.panel.yAxis.position;
                            if (!position || t0l.q6j(position, "right"))panel.yaxisRHS.push(panel.yAxis); else panel.yaxisLHS.push(panel.yAxis);
                        }
                    }
                    if (!panel.yAxis.width)panel.yAxis.width = this.yaxisWidth;
                    panel.yaxisTotalWidthRight = 0;
                    var i, yaxis;
                    panel.yaxisTotalWidthLeft = 0;
                    for (i = 0; t0l.Z6j(i, panel.yaxisLHS.length); i++) {
                        yaxis = panel.yaxisLHS[i];
                        panel.yaxisTotalWidthLeft += yaxis.width;
                        yaxis.justifyRight = (t0l.l3j(yaxis.justifyRight, null) ? panel.chart.yAxis.justifyRight : yaxis.justifyRight);
                        if (t0l.K3j(yaxis.justifyRight, null))yaxis.justifyRight = true;
                    }
                    for (i = 0; t0l.k3j(i, panel.yaxisRHS.length); i++) {
                        yaxis = panel.yaxisRHS[i];
                        panel.yaxisTotalWidthRight += yaxis.width;
                    }
                    var x = 0;
                    for (i = 0; t0l.L3j(i, panel.yaxisLHS.length); i++) {
                        yaxis = panel.yaxisLHS[i];
                        yaxis.left = x;
                        x += yaxis.width;
                    }
                    x = t0l.e3j(this.width, panel.yaxisTotalWidthRight);
                    for (i = 0; t0l.J3j(i, panel.yaxisRHS.length); i++) {
                        yaxis = panel.yaxisRHS[i];
                        yaxis.left = x;
                        x += yaxis.width;
                    }
                    if (typeof this.yaxisLeft != "undefined")panel.chart.yaxisPaddingRight = this.yaxisLeft;
                    panel.yaxisCalculatedPaddingRight = panel.yaxisTotalWidthRight;
                    if (panel.chart.yaxisPaddingRight || t0l.C3j(panel.chart.yaxisPaddingRight, 0))panel.yaxisCalculatedPaddingRight = panel.chart.yaxisPaddingRight;
                    panel.yaxisCalculatedPaddingLeft = panel.yaxisTotalWidthLeft;
                    if (panel.chart.yaxisPaddingLeft || t0l.Q3j(panel.chart.yaxisPaddingLeft, 0))panel.yaxisCalculatedPaddingLeft = panel.chart.yaxisPaddingLeft;
                    if (isAChart) {
                        panel.left = panel.yaxisCalculatedPaddingLeft;
                        panel.right = t0l.F3j(this.width, panel.yaxisCalculatedPaddingRight);
                    }
                    else {
                        panel.left = panel.chart.panel.left;
                        panel.right = panel.chart.panel.right;
                    }
                    panel.width = t0l.Y3j(panel.right, panel.left);
                    panel.handle.style.left = panel.left + "px";
                    panel.handle.style.width = panel.width + "px";
                    if (isAChart) {
                        panel.chart.left = panel.left;
                        panel.chart.right = panel.right;
                        panel.chart.width = t0l.N3j(panel.right, panel.left);
                    }
                }
            }
            ;
            STXChart.prototype.initializeChart = function (container) {
                var X5y = "nv", r82 = "e8";
                if (this.runPrepend("initializeChart", arguments))return;
                if (!this.chart.symbolObject.symbol)this.chart.symbolObject.symbol = this.chart.symbol;
                if (this.locale)this.setLocale(this.locale);
                if (!this.displayZone && STXChart.defaultDisplayTimeZone) {
                    this.setTimeZone(null, STXChart.defaultDisplayTimeZone);
                }
                this.calculateYAxisPositions();
                this.micropixels = 0;
                if (container)this.chart.container = container;
                this.chart.container.stx = this;
                if (!this.chart.container.STXRegistered) {
                    this.chart.container.STXRegistered = true;
                    STXChart.registeredContainers.push(this.chart.container);
                }
                if (STX.isSurface) {
                    if (!this.gesture) {
                        this.gesture = new MSGesture();
                        if (this.manageTouchAndMouse) {
                            this.gesture.target = this.chart.container;
                        }
                        else {
                            this.gesture.target = document.body;
                        }
                        this.gesturePointerId = null;
                    }
                }
                this.registerHTMLElements();
                if (this.chart.canvas && document.createElement("canvas").getContext) {
                    if (!this.chart.canvas.id) {
                        this.chart.container.removeChild(this.chart.canvas);
                        this.chart.canvas = null;
                    }
                    if (this.chart.tempCanvas && !this.chart.tempCanvas.id) {
                        this.chart.container.removeChild(this.chart.tempCanvas);
                        this.chart.tempCanvas = null;
                    }
                    if (this.floatCanvas && !this.floatCanvas.id) {
                        this.chart.container.removeChild(this.floatCanvas);
                        this.floatCanvas = null;
                    }
                }
                else {
                    if (t0l.w3j(this.layout.candleWidth, this.minimumCandleWidth))this.layout.candleWidth = this.minimumCandleWidth;
                    if (t0l.o3j(this.layout.candleWidth, 50))this.layout.candleWidth = 8;
                }
                if (!this.chart.canvas)this.chart.canvas = document.createElement("canvas");
                if (!this.chart.canvas.getContext) {
                    this.chart.canvas = this.chart.container.querySelectorAll("#ie8canvas")[0];
                    if (!this.chart.canvas.getContext) {
                        if (window.G_vmlCanvasManager)G_vmlCanvasManager.initElement(this.chart.canvas);
                    }
                    this.chart.canvas.style.display = "block";
                }
                else {
                    this.chart.container.appendChild(this.chart.canvas);
                }
                this.chart.canvas.style.position = "absolute";
                this.chart.canvas.style.left = "0px";
                this.chart.context = this.chart.canvas.getContext("2d");
                this.chart.canvas.context = this.chart.context;
                this.chart.context.lineWidth = 1;
                if (!this.chart.tempCanvas)this.chart.tempCanvas = document.createElement("canvas");
                if (!this.chart.tempCanvas.getContext) {
                    this.chart.tempCanvas = this.chart.container.querySelectorAll((b5y + q1y + r82 + D4y + X5y + B9y + D3y + J4n + v5y + t0l.V3y))[0];
                    if (!this.chart.tempCanvas.getContext) {
                        if (window.G_vmlCanvasManager)G_vmlCanvasManager.initElement(this.chart.tempCanvas);
                    }
                    this.chart.tempCanvas.style.display = "block";
                }
                else {
                    this.chart.container.appendChild(this.chart.tempCanvas);
                }
                this.chart.tempCanvas.style.position = "absolute";
                this.chart.tempCanvas.style.left = "0px";
                this.chart.tempCanvas.context = this.chart.tempCanvas.getContext("2d");
                this.chart.tempCanvas.context.lineWidth = 1;
                if (!this.floatCanvas)this.floatCanvas = document.createElement("canvas");
                if (!this.floatCanvas.getContext) {
                    this.floatCanvas = this.chart.container.querySelectorAll("#ie8canvasFloat")[0];
                    if (!this.floatCanvas.getContext) {
                        if (window.G_vmlCanvasManager)G_vmlCanvasManager.initElement(this.chart.tempCanvas);
                    }
                    this.floatCanvas.style.display = "block";
                }
                else {
                    this.chart.container.appendChild(this.floatCanvas);
                }
                this.floatCanvas.style.position = "absolute";
                this.floatCanvas.style.left = "0px";
                this.floatCanvas.context = this.floatCanvas.getContext("2d");
                this.floatCanvas.context.lineWidth = 1;
                this.resizeCanvas();
                if (STX.isAndroid) {
                    this.chart.tempCanvas.ontouchstart = function (e) {
                        if (e.preventDefault)e.preventDefault();
                    }
                    ;
                    this.floatCanvas.ontouchstart = function (e) {
                        if (e.preventDefault)e.preventDefault();
                    }
                    ;
                }
                this.panels.chart.display = this.chart.symbol;
                if (this.chart.symbolDisplay)this.panels.chart.display = this.chart.symbolDisplay;
                this.adjustPanelPositions();
                this.chart.panel = this.panels[this.chart.name];
                this.calculateYAxisMargins(this.chart.panel.yAxis);
                this.initialWhitespace = this.preferences.whitespace;
                if (this.chart.dataSet && t0l.M3j(this.chart.dataSet.length, 0)) {
                    this.chart.scroll = Math.floor(t0l.u3j(this.chart.width, this.layout.candleWidth));
                    var wsInTicks = Math.round(t0l.S3j(this.preferences.whitespace, this.layout.candleWidth));
                    this.chart.scroll -= wsInTicks;
                }
                if (STX.touchDevice) {
                    var overlayTrashCan = this.chart.container.querySelectorAll("#overlayTrashCan")[0], vectorTrashCan = this.chart.container.querySelectorAll("#vectorTrashCan")[0];
                    if (overlayTrashCan)overlayTrashCan.onmspointerup = overlayTrashCan.ontouchend = (function (self) {
                            return function (e) {
                                self.deleteHighlighted(true);
                            }
                                ;
                        })(this);
                    if (vectorTrashCan)vectorTrashCan.onmspointerup = vectorTrashCan.ontouchend = (function (self) {
                            return function (e) {
                                self.deleteHighlighted(true);
                            }
                                ;
                        })(this);
                }
                if (this.manageTouchAndMouse) {
                    this.registerTouchAndMouseEvents();
                }
                this.chart.container.onmouseout = (function (self) {
                        return function (e) {
                            self.handleMouseOut(e);
                        }
                            ;
                    })(this);
                if (this.controls.chartControls) {
                    this.controls.chartControls.style.display = "block";
                }
                this.abortDrawings();
                this.undoStamps = [];
                for (var panelName in this.panels) {
                    var panel = this.panels[panelName];
                    if (panel.markerHolder) {
                        this.chart.container.removeChild(panel.markerHolder);
                        panel.markerHolder = null;
                    }
                }
                for (var i in this.plugins) {
                    var plugin = this.plugins[i];
                    if (plugin.display) {
                        if (plugin.initializeChart)plugin.initializeChart(this);
                    }
                }
                if (!this.resizeListenerInitialized) {
                    this.resizeListenerInitialized = true;
                    var closure = function (self) {
                            return function (e) {
                                self.resizeChart();
                            }
                                ;
                        }
                        ;
                    if (window.attachEvent) {
                        window.attachEvent("onresize", closure(this));
                    }
                    else {
                        var c = closure(this);
                        window.addEventListener("resize", c, true);
                        this.eventListeners.push({"element": window, "event": "resize", "function": c}
                        );
                    }
                }
                if (this.chart.baseline.userLevel)this.chart.baseline.userLevel = null;
                this.setResizeTimer(this.resizeDetectMS);
                this.runAppend("initializeChart", arguments);
            }
            ;
            STXChart.prototype.destroy = function () {
                this.setResizeTimer(0);
                if (this.quoteDriver)this.quoteDriver.die();
                this.styles = {}
                ;
                for (var i = 0; t0l.b3j(i, this.eventListeners.length); i++) {
                    var listener = this.eventListeners[i];
                    listener.element.removeEventListener(listener.event, listener["function"]);
                }
            }
            ;
            STXChart.prototype.handleMouseOut = function (e) {
                var y8y = "handleMouseOut";
                e = e || window.event;
                if (!STX.withinElement(this.chart.container, e.pageX, e.pageY)) {
                    if (this.runPrepend(y8y, arguments))return;
                    this.undisplayCrosshairs();
                    this.grabbingScreen = P0n;
                    this.touches = [];
                    this.touching = P0n;
                    if (this.activeDrawing && this.userPointerDown) {
                        this.userPointerDown = P0n;
                        this.drawingLine = P0n;
                        var cy = this.backOutY(e.pageY), cx = this.backOutX(e.pageX);
                        this.drawingClick(this.currentPanel, cx, cy);
                    }
                    STXChart.insideChart = P0n;
                    this.displaySticky();
                    this.runAppend(y8y, arguments);
                }
            }
            ;
            STXChart.prototype.registerTouchAndMouseEvents = function () {
                var n52 = "DOMMouseScroll", W8y = "mousewheel", S3y = "onwheel", o5y = "wheel", o1y = "onMouseOut", V82 = "eOut", K82 = "us", L12 = "M", x6y = "onMouseOver", V5y = "pointerup", g1y = "pointermove", S6y = "pointerdown", Z12 = "MSPointerUp", k1y = "MSPointerMove", f7y = "MSGestureEnd", m8y = "MSGestureChange", s2n = "MSGestureStart", Y8y = "MSPointerDown", r0y = "Out", v7y = "#home";
                if (this.touchAndMouseEventsRegistered)return;
                this.touchAndMouseEventsRegistered = x1y;
                var el = this.chart.container, homeEl = $$$(v7y, this.controls.chartControls), zoomInEl = $$$(e1y, this.controls.chartControls), zoomOutEl = $$$((b5y + e2n + Q5y + Q5y + v5y + r0y), this.controls.chartControls);
                if (!STX.touchDevice) {
                    el.addEventListener(E0y, (function (self) {
                            return function (e) {
                                self.mousemove(e);
                            }
                                ;
                        })(this), P0n);
                    el.addEventListener(P0y, (function (self) {
                            return function (e) {
                                self.mousedown(e);
                            }
                                ;
                        })(this), P0n);
                    el.addEventListener(S9n, (function (self) {
                            return function (e) {
                                self.mouseup(e);
                            }
                                ;
                        })(this), P0n);
                }
                else {
                    if (STX.isSurface) {
                        el.addEventListener(E0y, (function (self) {
                                return function (e) {
                                    self.msMouseMoveProxy(e);
                                }
                                    ;
                            })(this), P0n);
                        el.addEventListener(P0y, (function (self) {
                                return function (e) {
                                    self.msMouseDownProxy(e);
                                }
                                    ;
                            })(this), P0n);
                        el.addEventListener(S9n, (function (self) {
                                return function (e) {
                                    self.msMouseUpProxy(e);
                                }
                                    ;
                            })(this), P0n);
                        if (window.navigator.msPointerEnabled) {
                            el.addEventListener(Y8y, (function (self) {
                                    return function (e) {
                                        return self.startProxy(e);
                                    }
                                        ;
                                })(this), P0n);
                            el.addEventListener(s2n, (function (self) {
                                    return function (e) {
                                        self.gestureInEffect = x1y;
                                    }
                                        ;
                                })(this), P0n);
                            el.addEventListener(m8y, (function (self) {
                                    return function (e) {
                                        return self.touchmove(e);
                                    }
                                        ;
                                })(this), P0n);
                            el.addEventListener(f7y, (function (self) {
                                    return function (e) {
                                        self.gestureInEffect = P0n;
                                        return self.touchend(e);
                                    }
                                        ;
                                })(this), P0n);
                            el.addEventListener(k1y, (function (self) {
                                    return function (e) {
                                        self.moveProxy(e);
                                    }
                                        ;
                                })(this), P0n);
                            el.addEventListener(Z12, (function (self) {
                                    return function (e) {
                                        return self.endProxy(e);
                                    }
                                        ;
                                })(this), P0n);
                        }
                        else {
                            el.addEventListener(S6y, (function (self) {
                                    return function (e) {
                                        return self.startProxy(e);
                                    }
                                        ;
                                })(this), P0n);
                            el.addEventListener(s2n, (function (self) {
                                    return function (e) {
                                        self.gestureInEffect = x1y;
                                    }
                                        ;
                                })(this), P0n);
                            el.addEventListener(m8y, (function (self) {
                                    return function (e) {
                                        return self.touchmove(e);
                                    }
                                        ;
                                })(this), P0n);
                            el.addEventListener(f7y, (function (self) {
                                    return function (e) {
                                        self.gestureInEffect = P0n;
                                        return self.touchend(e);
                                    }
                                        ;
                                })(this), P0n);
                            el.addEventListener(g1y, (function (self) {
                                    return function (e) {
                                        self.moveProxy(e);
                                    }
                                        ;
                                })(this), P0n);
                            el.addEventListener(V5y, (function (self) {
                                    return function (e) {
                                        return self.endProxy(e);
                                    }
                                        ;
                                })(this), P0n);
                        }
                    }
                    else {
                        if (!STX.isAndroid && !STX.ipad && !STX.iphone) {
                            el.addEventListener(E0y, (function (self) {
                                    return function (e) {
                                        self.iosMouseMoveProxy(e);
                                    }
                                        ;
                                })(this), P0n);
                            el.addEventListener(P0y, (function (self) {
                                    return function (e) {
                                        self.iosMouseDownProxy(e);
                                    }
                                        ;
                                })(this), P0n);
                            el.addEventListener(S9n, (function (self) {
                                    return function (e) {
                                        self.iosMouseUpProxy(e);
                                    }
                                        ;
                                })(this), P0n);
                        }
                        el.addEventListener(f6y, (function (self) {
                                return function (e) {
                                    self.touchstart(e);
                                }
                                    ;
                            })(this), P0n);
                        el.addEventListener(X82, (function (self) {
                                return function (e) {
                                    self.touchmove(e);
                                }
                                    ;
                            })(this), P0n);
                        el.addEventListener(K2y, (function (self) {
                                return function (e) {
                                    self.touchend(e);
                                }
                                    ;
                            })(this), P0n);
                        if (zoomInEl) {
                            zoomInEl.removeAttribute(x6y);
                            zoomInEl.removeAttribute((F4y + L12 + Q5y + K82 + V82));
                        }
                        if (zoomOutEl) {
                            zoomOutEl.removeAttribute(x6y);
                            zoomOutEl.removeAttribute(o1y);
                        }
                    }
                }
                var wheelEvent = (t0l.c3j(o5y, document.createElement(n12)) || t0l.T5j(S3y, document)) ? o5y : t0l.W5j(document.onmousewheel, undefined) ? W8y : n52;
                el.addEventListener(wheelEvent, (function (self, wheelEvent) {
                        return function (e) {
                            self.mouseWheel(e, wheelEvent);
                        }
                            ;
                    })(this, wheelEvent), P0n);
            }
            ;
            STXChart.prototype.rightClickHighlighted = function () {
                var E5y = "rightClickHighlighted";
                if (this.runPrepend(E5y, arguments))return;
                this.deleteHighlighted(x1y);
                this.runAppend(E5y, arguments);
            }
            ;
            STXChart.prototype.deleteHighlighted = function (callRightClick) {
                if (this.runPrepend("deleteHighlighted", arguments))return;
                this.cancelTouchSingleClick = true;
                STX.clearCanvas(this.chart.tempCanvas, this);
                for (var i = t0l.a5j(this.drawingObjects.length, 1); t0l.P5j(i, 0); i--) {
                    var drawing = this.drawingObjects[i];
                    if (drawing.highlighted && !drawing.permanent) {
                        var dontDeleteMe = drawing.abort();
                        if (!dontDeleteMe) {
                            var before = STX.shallowClone(this.drawingObjects);
                            this.drawingObjects.splice(i, 1);
                            this.undoStamp(before, STX.shallowClone(this.drawingObjects));
                        }
                        this.changeOccurred("vector");
                    }
                }
                for (var name in this.overlays) {
                    var o = this.overlays[name];
                    if (o.highlight && !o.permanent) {
                        if (callRightClick)this.rightClickOverlay(name); else this.removeOverlay(name);
                    }
                }
                var chart = this.currentPanel.chart;
                for (var r in chart.seriesRenderers) {
                    var renderer = chart.seriesRenderers[r];
                    for (var sp = t0l.t5j(renderer.seriesParams.length, 1); t0l.R5j(sp, 0); sp--) {
                        var series = renderer.seriesParams[sp];
                        if (series.highlight && !series.permanent) {
                            renderer.removeSeries(series.field);
                        }
                    }
                }
                var comparing = false;
                for (var s in chart.series) {
                    if (chart.series[s].parameters.isComparison)comparing = true;
                }
                if (!comparing)this.setComparison(false, chart);
                this.draw();
                if (this.controls.mSticky) {
                    this.controls.mSticky.style.display = "none";
                    this.controls.mSticky.children[0].innerHTML = "";
                }
                this.runAppend("deleteHighlighted", arguments);
            }
            ;
            STXChart.prototype.panelExists = function (name) {
                for (var p in this.panels) {
                    var panel = this.panels[p];
                    if (t0l.y5j(panel.name, name))return x1y;
                }
                return P0n;
            }
            ;
            STXChart.prototype.hideCrosshairs = function () {
                var f3y = 2976847, J3y = 7881061, X32 = 2142222970, o7n = 866732870;
                var L32 = -o7n, h32 = X32, a32 = t0l.l52;
                for (var H32 = t0l.T52; t0l.F62.m62(H32.toString(), H32.toString().length, J3y) !== L32; H32++) {
                    this.setPeriodicityV2(periodicity, interval);
                    a32 += t0l.l52;
                }
                if (t0l.F62.m62(a32.toString(), a32.toString().length, f3y) !== h32) {
                    self.autoscroll();
                }
                this.displayCrosshairs = P0n;
            }
            ;
            STXChart.prototype.showCrosshairs = function () {
                this.displayCrosshairs = x1y;
            }
            ;
            STXChart.prototype.grabHandle = function (panel) {
                var R4n = "grabHandle";
                if (this.runPrepend(R4n, arguments))return;
                if (!panel)return;
                STXChart.crosshairY = panel.top + this.top;
                STXChart.resizingPanel = panel;
                this.drawTemporaryPanel();
                STX.appendClassName(panel.handle, T3y);
                this.runAppend(R4n, arguments);
            }
            ;
            STXChart.prototype.releaseHandle = function () {
                var E4y = "releaseHandle";
                if (this.runPrepend(E4y, arguments))return;
                STX.clearCanvas(this.chart.tempCanvas, this);
                this.resizePanels();
                if (STXChart.resizingPanel)STX.unappendClassName(STXChart.resizingPanel.handle, T3y);
                STXChart.resizingPanel = t0l.a1y;
                this.runAppend(E4y, arguments);
            }
            ;
            STXChart.prototype.storePanels = function () {
                if (!this.layout)this.layout = {}
                ;
                var view = this.layout;
                view.panels = {}
                ;
                for (var p in this.panels) {
                    var panel = this.panels[p];
                    view.panels[panel.name] = {"percent": panel.percent, "display": panel.display}
                    ;
                }
            }
            ;
            STXChart.prototype.savePanels = function (saveLayout) {
                this.storePanels();
                if (t0l.r5j(saveLayout, P0n))this.changeOccurred(d52);
            }
            ;
            STXChart.prototype.resolveY = function (y) {
                return this.top + y;
            }
            ;
            STXChart.prototype.resolveX = function (x) {
                return this.left + x;
            }
            ;
            STXChart.prototype.backOutY = function (y) {
                return t0l.O5j(y, this.top);
            }
            ;
            STXChart.prototype.backOutX = function (x) {
                return t0l.I5j(x, this.left);
            }
            ;
            STXChart.prototype.cleanupRemovedStudy = function (sd) {
                var x0n = "}";
                if (sd.libraryEntry) {
                    if (sd.libraryEntry.removeFN)sd.libraryEntry.removeFN(this, sd);
                    if (sd.libraryEntry.feed && sd.libraryEntry.quoteFeed) {
                        this.detachTagAlongQuoteFeed(sd.libraryEntry.feed);
                    }
                }
                for (var p in this.plugins) {
                    if (p.indexOf(t0l.l2n + sd.id + x0n) > -t0l.T52)delete  this.plugins[p];
                }
                if (this.layout.studies)delete  this.layout.studies[sd.name];
            }
            ;
            STXChart.prototype.privateDeletePanel = function (panel) {
                if (this.layout.studies) {
                    var mySD = this.layout.studies[panel.name];
                    if (mySD)this.cleanupRemovedStudy(mySD);
                }
                delete  this.panels[panel.name];
                for (var spm in STX.Studies.studyPanelMap) {
                    if (t0l.d5j(STX.Studies.studyPanelMap[spm].panel, panel.name))delete  STX.Studies.studyPanelMap[spm];
                }
                for (var series in this.overlays) {
                    if (t0l.V5j(this.overlays[series].panel, panel.name)) {
                        delete  this.layout.studies[series];
                        delete  this.overlays[series];
                    }
                }
                if (panel.holder) {
                    this.chart.container.removeChild(panel.holder);
                    var arr = this.getMarkerArray("panelName", panel.name);
                    for (var i = 0; t0l.s5j(i, arr.length); i++) {
                        this.removeFromHolder(arr[i]);
                    }
                }
                panel.handle.parentNode.removeChild(panel.handle);
            }
            ;
            STXChart.prototype.panelClose = function (panel) {
                var L8y = "panelClose";
                if (!panel)return;
                if (this.runPrepend(L8y, arguments))return;
                this.cancelTouchSingleClick = x1y;
                STXChart.drawingLine = P0n;
                if (panel.soloing)this.panelSolo(panel);
                if (this.charts[panel.name]) {
                    for (var panelName in this.panels) {
                        var subPanel = this.panels[panelName];
                        if (t0l.g5j(subPanel.chart.name, panel.name)) {
                            this.privateDeletePanel(subPanel);
                        }
                    }
                    delete  this.charts[panel.name];
                }
                else {
                    this.privateDeletePanel(panel);
                }
                this.showCrosshairs();
                this.createDataSet();
                this.adjustPanelPositions();
                this.draw();
                this.savePanels();
                this.runAppend(L8y, arguments);
            }
            ;
            STXChart.prototype.deleteAllPanels = function () {
                for (var p in this.panels) {
                    var panel = this.panels[p];
                    this.privateDeletePanel(panel);
                }
                this.layout.panels = {}
                ;
                this.panels = {}
                ;
            }
            ;
            STXChart.prototype.panelUp = function (panel) {
                this.cancelTouchSingleClick = x1y;
                STXChart.drawingLine = P0n;
                this.showCrosshairs();
                var newPanels = {}
                    , pos = t0l.G52, p;
                for (p in this.panels) {
                    if (t0l.j5j(p, panel.name))break;
                    pos++;
                }
                if (!pos)return;
                var i = t0l.G52;
                for (p in this.panels) {
                    if (t0l.X5j(i, pos - t0l.T52))newPanels[panel.name] = panel;
                    if (t0l.z5j(p, panel.name))continue;
                    newPanels[p] = this.panels[p];
                    i++;
                }
                this.panels = newPanels;
                this.adjustPanelPositions();
                this.draw();
                this.savePanels();
            }
            ;
            STXChart.prototype.panelDown = function (panel) {
                this.cancelTouchSingleClick = true;
                STXChart.drawingLine = false;
                this.showCrosshairs();
                var newPanels = {}
                    , pos = 0, p;
                for (p in this.panels) {
                    if (t0l.A1j(p, panel.name))break;
                    pos++;
                }
                var length = 0;
                for (p in this.panels)length++;
                if (t0l.G1j(pos, length - 1))return;
                var i = 0;
                for (p in this.panels) {
                    if (t0l.H1j(p, panel.name)) {
                        i++;
                        continue;
                    }
                    newPanels[p] = this.panels[p];
                    if (t0l.h1j(i, pos + 1))newPanels[panel.name] = panel;
                    i++;
                }
                this.panels = newPanels;
                this.adjustPanelPositions();
                this.draw();
                this.savePanels();
            }
            ;
            STXChart.prototype.panelSolo = function (panel) {
                var L5y = "stx_solo_lit";
                this.cancelTouchSingleClick = x1y;
                STXChart.drawingLine = P0n;
                this.showCrosshairs();
                var hideOrNot = x1y;
                if (panel.soloing) {
                    hideOrNot = P0n;
                    panel.soloing = P0n;
                    STX.unappendClassName(panel.solo, L5y);
                    panel.percent = panel.oldPercent;
                    this.panels.chart.percent = this.panels.chart.oldPercent;
                }
                else {
                    panel.soloing = x1y;
                    STX.appendClassName(panel.solo, L5y);
                    if (t0l.x1j(panel.name, e9y)) {
                        panel.oldPercent = panel.percent;
                    }
                    else {
                        panel.oldPercent = panel.percent;
                        this.panels.chart.oldPercent = this.panels.chart.percent;
                        panel.percent = t0l.U1j(t0l.T52, this.panels.chart.percent);
                    }
                }
                for (var p in this.panels) {
                    this.panels[p].hidden = hideOrNot;
                }
                this.panels.chart.hidden = P0n;
                panel.hidden = P0n;
                this.adjustPanelPositions();
                this.draw();
                this.savePanels();
            }
            ;
            STXChart.prototype.calculatePanelPercent = function (panel) {
                var h = t0l.D1j(panel.bottom, panel.top);
                panel.percent = t0l.B1j(h, this.chart.canvasHeight);
            }
            ;
            STXChart.prototype.resizePanels = function () {
                if (!STXChart.resizingPanel)return;
                var up = x1y, p, newY, priorPanel;
                if (t0l.m1j(STXChart.crosshairY, this.resolveY(STXChart.resizingPanel.top)))up = P0n;
                if (up) {
                    priorPanel = t0l.a1y;
                    for (p in this.panels) {
                        if (t0l.n1j(this.panels[p], STXChart.resizingPanel))break;
                        if (this.panels[p].hidden)continue;
                        priorPanel = this.panels[p];
                    }
                    newY = this.backOutY(STXChart.crosshairY);
                    if (t0l.p1j(newY, priorPanel.top + h7n)) {
                        newY = priorPanel.top + h7n;
                        STXChart.crosshairY = this.resolveY(newY);
                    }
                    priorPanel.bottom = newY;
                    STXChart.resizingPanel.top = newY;
                    this.calculatePanelPercent(priorPanel);
                    this.calculatePanelPercent(STXChart.resizingPanel);
                }
                else {
                    priorPanel = t0l.a1y;
                    for (p in this.panels) {
                        if (t0l.v1j(this.panels[p], STXChart.resizingPanel))break;
                        if (this.panels[p].hidden)continue;
                        priorPanel = this.panels[p];
                    }
                    newY = this.backOutY(STXChart.crosshairY);
                    if (t0l.f1j(newY, STXChart.resizingPanel.bottom - h7n)) {
                        newY = t0l.i1j(STXChart.resizingPanel.bottom, h7n);
                        STXChart.crosshairY = this.resolveY(newY);
                    }
                    priorPanel.bottom = newY;
                    STXChart.resizingPanel.top = newY;
                    this.calculatePanelPercent(priorPanel);
                    this.calculatePanelPercent(STXChart.resizingPanel);
                }
                this.adjustPanelPositions();
                this.draw();
                this.savePanels();
            }
            ;
            STXChart.prototype.adjustPanelPositions = function () {
                if (!this.chart.symbol)return;
                if (this.runPrepend("adjustPanelPositions", arguments))return;
                var lastBottom = 0, h = this.chart.canvasHeight, pixels = 0, first = false, acc = 0, n = 0, activeSolo = false, x, panel;
                for (x in this.panels) {
                    panel = this.panels[x];
                    if (isNaN(panel.percent) || t0l.E1j(panel.percent, 0))panel.percent = 0.05;
                    if (panel.hidden)continue;
                    acc += panel.percent;
                    n++;
                    if (panel.soloing)activeSolo = true;
                }
                for (x in this.panels) {
                    var zoomRatio = 0;
                    panel = this.panels[x];
                    if (panel.hidden) {
                        if (panel.markerHolder) {
                            panel.markerHolder.style.display = "none";
                        }
                        continue;
                    }
                    if (!first) {
                        first = true;
                        panel.up.style.display = "none";
                    }
                    else {
                        if (this.displayIconsUpDown)panel.up.style.display = "";
                    }
                    if (activeSolo) {
                        if (panel.soloing) {
                            if (this.displayIconsSolo)panel.solo.style.display = "";
                        }
                        else {
                            panel.solo.style.display = "none";
                        }
                    }
                    else if (t0l.q1j(n, 1) || t0l.Z1j(n, 2)) {
                        panel.solo.style.display = "none";
                    }
                    else {
                        if (this.displayIconsSolo)panel.solo.style.display = "";
                    }
                    if (t0l.l8j(n, 1)) {
                        panel.down.style.display = "none";
                    }
                    else {
                        if (this.displayIconsUpDown)panel.down.style.display = "";
                    }
                    if (panel.editFunction)panel.edit.style.display = ""; else panel.edit.style.display = "none";
                    panel.percent = t0l.K8j(panel.percent, acc);
                    panel.top = lastBottom;
                    panel.bottom = panel.top + (t0l.k8j(h, panel.percent));
                    panel.height = t0l.L8j(panel.bottom, panel.top);
                    if (t0l.e8j(panel.chart.name, panel.name)) {
                        panel.chart.top = panel.top;
                        panel.chart.bottom = panel.bottom;
                        panel.chart.height = panel.height;
                    }
                    var yAxis = panel.yAxis;
                    if (yAxis.zoom && t0l.J8j(yAxis.height, 0)) {
                        zoomRatio = t0l.C8j(yAxis.zoom, yAxis.height);
                    }
                    yAxis.top = panel.top + yAxis.topOffset;
                    yAxis.bottom = t0l.Q8j(panel.bottom, yAxis.bottomOffset);
                    yAxis.height = t0l.F8j(yAxis.bottom, yAxis.top);
                    if (zoomRatio) {
                        yAxis.zoom = t0l.Y8j(zoomRatio, yAxis.height);
                        if (t0l.N8j(yAxis.zoom, yAxis.height))yAxis.zoom = 0;
                    }
                    lastBottom = panel.bottom;
                    if (!yAxis.high && t0l.w8j(yAxis.high, 0)) {
                        yAxis.high = 100;
                        yAxis.low = 0;
                        yAxis.shadow = 100;
                    }
                    yAxis.multiplier = t0l.o8j(yAxis.height, yAxis.shadow);
                    if (panel.holder) {
                        panel.holder.style.right = "0px";
                        panel.holder.style.top = panel.top + "px";
                        panel.holder.style.left = "0px";
                        panel.holder.style.height = panel.height + "px";
                        panel.subholder.style.left = panel.left + "px";
                        panel.subholder.style.width = panel.width + "px";
                        panel.subholder.style.top = "0px";
                        if (t0l.M8j(yAxis.height, 0))panel.subholder.style.height = yAxis.height + (t0l.V3y + j2n);
                    }
                }
                if (x)this.panels[x].down.style.display = (P5y + Q5y + P5y + E9y);
                if (t0l.u8j(n, 2) && !activeSolo) {
                    this.panels.chart.solo.style.display = "";
                }
                if (this.controls.chartControls && this.panels.chart)this.controls.chartControls.style.bottom = (t0l.S8j(this.chart.canvasHeight, this.panels.chart.bottom, 22)) + "px";
                this.clearPixelCache();
                this.adjustDrawings();
                this.runAppend("adjustPanelPositions", arguments);
            }
            ;
            STXChart.prototype.makeMarkerHelper = function () {
                this.markerHelper = {
                    chartMap: {}
                    , classMap: {}
                }
                ;
            }
            ;
            STXChart.prototype.addToHolder = function (marker) {
                var a3y = "sN", y0n = "be", v2y = "ve", G9y = "bject", I6y = "rk", j4y = "Ma", panel = this.panels[marker.params.panelName];
                if (!panel)return;
                if (STX.derivedFrom(marker.params.node, STX.Marker.NodeCreator)) {
                    marker.stxNodeCreator = marker.params.node;
                    marker.node = marker.stxNodeCreator.node;
                }
                else {
                    marker.node = marker.params.node;
                }
                if (!this.markerHelper)this.makeMarkerHelper();
                if (marker.params.chartContainer) {
                    this.container.appendChild(marker.node);
                }
                else if (marker.params.includeAxis) {
                    panel.holder.appendChild(marker.node);
                }
                else {
                    panel.subholder.appendChild(marker.node);
                }
                var label = marker.params.label;
                if (!this.markers[label])this.markers[label] = [];
                this.markers[label].push(marker);
                marker.chart = panel.chart;
                if (!this.markerHelper.chartMap[marker.chart.name]) {
                    this.markerHelper.chartMap[marker.chart.name] = {dataSetLength: t0l.G52, markers: []}
                    ;
                }
                this.markerHelper.chartMap[marker.chart.name].markers.push(marker);
                if (!marker.className) {
                    console.log((j4y + I6y + E9y + K3y + a0y + Q5y + G9y + D3y + a0y + v5y + t0l.O6y + O9y + a0y + N1y + B9y + v2y + a0y + B9y + a0y + v5y + E9y + v5y + y0n + K3y + a0y + S9y + t0l.n5y + B9y + D3y + a3y + l0y));
                }
                var classMap = this.markerHelper.classMap[marker.className];
                if (!classMap)classMap = this.markerHelper.classMap[marker.className] = {}
                ;
                if (!classMap[marker.params.panelName])classMap[marker.params.panelName] = [];
                classMap[marker.params.panelName].push(marker);
                this.setMarkerTick(marker);
            }
            ;
            STXChart.prototype.getMarkerArray = function (type, comparison) {
                var y4n = 5139859, Z3y = 7685226, D8y = (0xA4 > (17.5E1, 117) ? (5.63E2, 43121839) : (0x5, 0x1B6)), r8y = 1267027955;
                var x32 = -r8y, t32 = D8y, e32 = t0l.l52;
                for (var P32 = t0l.T52; t0l.F62.m62(P32.toString(), P32.toString().length, Z3y) !== x32; P32++) {
                    context.save();
                    points.unshift([x, bottom]);
                    this.chart.baseLegendColors.push(this.getCanvasColor(D6y));
                    this.setDisplayDate(quote);
                    e32 += t0l.l52;
                }
                if (t0l.F62.m62(e32.toString(), e32.toString().length, y4n) !== t32) {
                    panel.subholder.removeChild(marker.node);
                    self.createDataSet();
                    return function (e) {
                        self.msMouseUpProxy(e);
                    }
                        ;
                }
                var arr = [];
                for (var label in this.markers) {
                    for (var i = 0; t0l.Z8j(i, this.markers[label].length); i++) {
                        var marker = this.markers[label][i];
                        if (t0l.l7H(type, "panelName")) {
                            if (t0l.K7H(marker.panelName, comparison))arr.push(marker);
                        }
                        else if (t0l.k7H(type, "label")) {
                            if (t0l.L7H(label, comparison))arr.push(marker);
                        }
                        else if (t0l.e7H(type, (B9y + t0l.n5y + t0l.n5y))) {
                            arr.push(marker);
                        }
                    }
                }
                return arr;
            }
            ;
            STXChart.prototype.removeFromHolder = function (marker) {
                var panel = this.panels[marker.params.panelName];
                if (!panel)return;
                if (t0l.J7H(marker.node.parentNode, panel.holder))panel.holder.removeChild(marker.node); else if (t0l.C7H(marker.node.parentNode, panel.subholder))panel.subholder.removeChild(marker.node); else if (t0l.Q7H(marker.node.parentNode, this.container))this.container.removeChild(marker.node);
                var labels = this.markers[marker.params.label];
                if (!labels)return;
                var i;
                for (i = 0; t0l.F7H(i, labels.length); i++) {
                    if (t0l.Y7H(labels[i], marker)) {
                        labels.splice(i, 1);
                        break;
                    }
                }
                var chartMap = this.markerHelper.chartMap[marker.chart.name];
                if (chartMap) {
                    for (i = 0; t0l.N7H(i, chartMap.markers.length); i++) {
                        if (t0l.w7H(chartMap.markers[i], marker)) {
                            chartMap.markers.splice(i, 1);
                            break;
                        }
                    }
                }
                var classMap = this.markerHelper.classMap[marker.className];
                if (classMap) {
                    var panelArray = classMap[marker.params.panelName];
                    if (panelArray) {
                        for (i = 0; t0l.o7H(i, panelArray.length); i++) {
                            if (t0l.M7H(panelArray[i], marker)) {
                                panelArray.splice(i, 1);
                                break;
                            }
                        }
                    }
                }
            }
            ;
            STXChart.prototype.establishMarkerTicks = function () {
                if (!this.markerHelper)this.makeMarkerHelper();
                var chartMap = this.markerHelper.chartMap;
                for (var chart in chartMap) {
                    var chartEntry = chartMap[chart];
                    if (t0l.u7H(chartEntry.dataSetLength, this.charts[chart].dataSet.length))continue;
                    for (var i = 0; t0l.S7H(i, chartEntry.markers.length); i++) {
                        this.setMarkerTick(chartEntry.markers[i]);
                    }
                }
            }
            ;
            STXChart.prototype.futureTickIfDisplayed = function (marker) {
                var chart = marker.chart;
                if (t0l.b7H(chart.dataSet.length, 1))return;
                var xaxisDT = chart.xaxis[t0l.c7H(chart.xaxis.length, 1)].DT;
                xaxisDT = new Date(t0l.T9H(xaxisDT.getTime(), this.timeZoneOffset * 60000));
                if (t0l.W9H(marker.params.x, xaxisDT))return;
                var futureTicksOnScreen = t0l.a9H(chart.maxTicks, chart.dataSegment.length), ticksToSearch = chart.dataSet.length + futureTicksOnScreen, pms, qms, dt = new Date(chart.dataSet[t0l.P9H(chart.dataSet.length, 1)].DT), iter = this.standardMarketIterator(dt, null, chart), dms = marker.params.x.getTime();
                for (var j = chart.dataSet.length; t0l.t9H(j, ticksToSearch); j++) {
                    pms = dt.getTime();
                    dt = iter.next();
                    qms = dt.getTime();
                    if (t0l.R9H(qms, dms)) {
                        marker.tick = j;
                        return;
                    }
                    else if (t0l.y9H(qms, dms) && t0l.r9H(pms, dms)) {
                        marker.tick = Math.max(t0l.O9H(j, 1), 0);
                        return;
                    }
                }
            }
            ;
            STXChart.prototype.setMarkerTick = function (marker) {
                var chart = marker.chart;
                if (t0l.I9H(marker.params.xPositioner, "master") && marker.params.x) {
                    marker.tick = Math.floor(t0l.d9H(marker.params.x, this.layout.periodicity));
                    return;
                }
                else if (t0l.V9H(marker.params.xPositioner, "date") && marker.params.x) {
                    var pms, qms, dms = marker.params.x.getTime();
                    for (var i = 0; t0l.s9H(i, chart.dataSet.length); i++) {
                        var quotes = chart.dataSet[i];
                        qms = quotes.DT.getTime();
                        pms = qms;
                        if (t0l.g9H(i, 0))pms = chart.dataSet[t0l.j9H(i, 1)].DT.getTime();
                        if (t0l.X9H(qms, dms)) {
                            marker.tick = i;
                            return;
                        }
                        else if (t0l.z9H(qms, dms) && t0l.A0H(pms, dms)) {
                            marker.tick = Math.max(t0l.G0H(i, 1), 0);
                            return;
                        }
                        else if (t0l.H0H(dms, qms)) {
                            marker.tick = null;
                            return;
                        }
                    }
                    if (t0l.h0H(chart.dataSet.length, 1))return;
                    var dt = new Date(chart.dataSet[t0l.x0H(i, 1)].DT);
                    if (t0l.U0H(dt.getTime(), dms))marker.params.future = true;
                    marker.tick = null;
                }
            }
            ;
            STXChart.prototype.positionMarkers = function () {
                var self = this;
                if (!self.markerHelper)return;
                function draw() {
                    var v3y = "onMarkers", R2n = "po";
                    if (self.runPrepend("positionMarkers", arguments))return;
                    self.markerTimeout = null;
                    for (var className in self.markerHelper.classMap) {
                        for (var panelName in self.markerHelper.classMap[className]) {
                            var arr = self.markerHelper.classMap[className][panelName], panel = self.panels[panelName];
                            if (arr.length) {
                                var params = {stx: self, arr: arr, panel: panel}
                                    ;
                                params.firstTick = t0l.D0H(panel.chart.dataSet.length, panel.chart.scroll);
                                params.lastTick = params.firstTick + panel.chart.dataSegment.length;
                                var fn = arr[0].constructor.placementFunction;
                                if (fn) {
                                    (fn)(params);
                                }
                                else {
                                    self.defaultMarkerPlacement(params);
                                }
                            }
                        }
                    }
                    self.runAppend((R2n + D3y + q1y + W5y + v3y), arguments);
                }

                if (this.markerDelay || t0l.B0H(this.markerDelay, 0)) {
                    if (!this.markerTimeout)this.markerTimeout = setTimeout(draw, this.markerDelay);
                }
                else {
                    draw();
                }
            }
            ;
            STXChart.prototype.addChart = function (name, chart) {
                chart.name = name;
                this.charts[name] = chart;
            }
            ;
            STXChart.prototype.createPanel = function (display, name, height, chartName) {
                if (this.runPrepend("createPanel", arguments))return;
                if (!chartName)chartName = "chart";
                var h = this.chart.canvasHeight;
                if (!height) {
                    height = t0l.m0H(h, 0.20);
                }
                var percent = t0l.n0H(height, h), reduce = t0l.p0H(1, percent);
                for (var p in this.panels) {
                    var panel = this.panels[p];
                    panel.percent *= reduce;
                }
                this.stackPanel(display, name, percent, chartName);
                this.adjustPanelPositions();
                this.savePanels(false);
                this.runAppend("createPanel", arguments);
            }
            ;
            STXChart.prototype.configurePanelControls = function (panel) {
                var P9n = "stx-chart-panel", N2y = "chart-title", M6y = "non", J0n = ".stx-ico-down", b0n = ".stx-ico-focus", R12 = ".stx-ico-up", P82 = ".stx-panel-title", c52 = "ose", X7n = ".stx-panel-control", isChart = (t0l.v0H(panel.name, panel.chart.name));
                panel.icons = $$$(X7n, panel.holder);
                panel.close = panel.icons.children[t0l.a52];
                panel.close = $$$((e6y + D3y + F9n + e3y + q1y + T0y + e3y + S9y + t0l.n5y + c52), panel.icons).parentNode;
                STX.appendClassName(panel.icons, l7n);
                panel.title = $$$(P82, panel.icons);
                panel.up = $$$(R12, panel.icons).parentNode;
                panel.solo = $$$(b0n, panel.icons).parentNode;
                panel.down = $$$(J0n, panel.icons).parentNode;
                panel.edit = $$$((e6y + D3y + F9n + e3y + q1y + S9y + Q5y + e3y + E9y + n9y + R0n), panel.icons).parentNode;
                if (!this.displayIconsUpDown)panel.up.style.display = X0n;
                if (!this.displayIconsUpDown)panel.down.style.display = (M6y + E9y);
                if (!this.displayIconsSolo)panel.solo.style.display = X0n;
                if (!this.displayIconsClose) {
                    panel.close.style.display = X0n;
                }
                if (!this.displayPanelResize)panel.handle.style.display = X0n;
                panel.title.innerHTML = R6y;
                panel.title.appendChild(document.createTextNode(panel.display));
                if (isChart) {
                    STX.appendClassName(panel.title, N2y);
                    STX.appendClassName(panel.icons, P9n);
                }
                if (!STX.touchDevice || STX.isSurface)panel.icons.onmouseover = (function (self) {
                        return function (e) {
                            self.hideCrosshairs();
                        }
                            ;
                    })(this);
                if (!STX.touchDevice || STX.isSurface)panel.icons.onmouseout = (function (self) {
                        return function (e) {
                            self.showCrosshairs();
                        }
                            ;
                    })(this);
                if (!STX.touchDevice || STX.isSurface)panel.handle.onmouseover = (function (self) {
                        return function () {
                            self.hideCrosshairs();
                        }
                            ;
                    })(this);
                if (!STX.touchDevice || STX.isSurface)panel.handle.onmouseout = (function (self) {
                        return function () {
                            self.showCrosshairs();
                        }
                            ;
                    })(this);
                if (STX.touchDevice) {
                    panel.handle.ontouchstart = (function (stx, panel) {
                            return function (e) {
                                if (stx.resizingPanel)return;
                                e.preventDefault();
                                stx.grabHandle(panel);
                            }
                                ;
                        })(this, panel);
                    panel.handle.ontouchend = (function (stx) {
                            return function (e) {
                                e.preventDefault();
                                stx.releaseHandle();
                            }
                                ;
                        })(this);
                }
                panel.handle.onmousedown = (function (stx, panel) {
                        return function (e) {
                            if (!e)e = event;
                            stx.grabHandle(panel);
                        }
                            ;
                    })(this, panel);
                panel.handle.onmouseup = (function (stx) {
                        return function (e) {
                            if (!e)e = event;
                            stx.releaseHandle();
                        }
                            ;
                    })(this);
                STX.safeClickTouch(panel.close, (function (stx, panel) {
                        return function () {
                            stx.panelClose(panel);
                        }
                            ;
                    })(this, panel));
                STX.safeClickTouch(panel.up, (function (stx, panel) {
                        return function () {
                            stx.panelUp(panel);
                        }
                            ;
                    })(this, panel));
                STX.safeClickTouch(panel.down, (function (stx, panel) {
                        return function () {
                            stx.panelDown(panel);
                        }
                            ;
                    })(this, panel));
                STX.safeClickTouch(panel.solo, (function (stx, panel) {
                        return function () {
                            stx.panelSolo(panel);
                        }
                            ;
                    })(this, panel));
                if (t0l.f0H(panel.name, e9y))panel.close.style.display = X0n;
            }
            ;
            STXChart.prototype.stackPanel = function (display, name, percent, chartName) {
                var q4y = "el", o2y = "stx-panel-chart", M32 = "stx-subholder", k82 = "stx-holder", C3y = "stackPanel";
                if (this.runPrepend(C3y, arguments))return;
                if (!chartName)chartName = e9y;
                var chart = this.charts[chartName], isChart = (t0l.i0H(name, chartName)), yAxis = t0l.a1y;
                if (isChart) {
                    display = chart.symbol;
                    if (chart.symbolDisplay)display = chart.symbolDisplay;
                    yAxis = chart.yAxis;
                }
                var panel = this.panels[name] = new STXChart.Panel(name, yAxis);
                panel.percent = percent;
                panel.chart = chart;
                panel.display = display;
                panel.holder = STX.newChild(this.container, (u2n + t0l.F4n), k82);
                panel.subholder = STX.newChild(panel.holder, n12, M32);
                panel.subholder.style.zIndex = t0l.T52;
                var appendClass = isChart ? o2y : (m5y + e3y + t0l.V3y + d32 + q4y + e3y + D3y + s7n + n9y + t0l.O2n);
                STX.appendClassName(panel.holder, appendClass);
                panel.subholder.appendChild(this.controls.iconsTemplate.cloneNode(x1y));
                panel.handle = this.controls.handleTemplate.cloneNode(x1y);
                this.container.appendChild(panel.handle);
                panel.handle.id = t0l.a1y;
                panel.handle.panel = panel;
                this.configurePanelControls(panel);
                this.resizeCanvas();
                this.runAppend(C3y, arguments);
            }
            ;
            STXChart.prototype.setPanelEdit = function (panel, editFunction) {
                panel.editFunction = editFunction;
                STX.safeClickTouch(panel.edit, editFunction);
                this.adjustPanelPositions();
            }
            ;
            STXChart.prototype.drawPanels = function () {
                var B9n = "stx_panel_border", w82 = "drawPanels";
                if (this.runPrepend(w82, arguments))return;
                var first = P0n;
                for (var p in this.panels) {
                    var panel = this.panels[p];
                    panel.axisDrawn = P0n;
                    if (t0l.E0H(panel.title.innerHTML, panel.display)) {
                        panel.title.innerHTML = R6y;
                        panel.title.appendChild(document.createTextNode(panel.display));
                    }
                    STX.appendClassName(panel.icons, l7n);
                    if (panel.hidden) {
                        STX.unappendClassName(panel.icons, l7n);
                        panel.handle.style.display = X0n;
                        panel.holder.style.display = X0n;
                        continue;
                    }
                    else {
                        if (!this.displayIconsUpDown)panel.up.style.display = X0n;
                        if (!this.displayIconsUpDown)panel.down.style.display = X0n;
                        if (!this.displayIconsSolo)panel.solo.style.display = X0n;
                        panel.holder.style.display = q82;
                    }
                    if (!first) {
                        panel.handle.style.display = X0n;
                        first = x1y;
                        continue;
                    }
                    var y = panel.top;
                    y = Math.round(y) + k2y;
                    this.plotLine(panel.left, panel.right, y, y, this.canvasStyle(B9n), e12, this.chart.context, P0n, {}
                    );
                    if (!this.displayPanelResize) {
                        panel.handle.style.display = X0n;
                    }
                    else {
                        panel.handle.style.display = R6y;
                    }
                    panel.handle.style.top = (t0l.q0H(y, panel.handle.offsetHeight / t0l.l52)) + a9n;
                }
                this.runAppend(w82, arguments);
            }
            ;
            STXChart.prototype.touchSingleClick = function (finger, x, y) {
                var self = this, args = arguments;
                return function () {
                    (function () {
                            if (!this.cancelTouchSingleClick) {
                                if (this.runPrepend("touchSingleClick", args))return;
                                if (this.editingAnnotation)return;
                                this.clicks = {s1MS: -1, e1MS: -1, s2MS: -1, e2MS: -1}
                                ;
                                if (!this.displayCrosshairs)return;
                                if (!this.displayInitialized)return;
                                if (t0l.Z0H(this.openDialog, ""))return;
                                if (t0l.l2H(x, this.left) || t0l.K2H(x, this.right) || t0l.k2H(y, this.top) || t0l.L2H(y, this.bottom))return;
                                var cy = this.backOutY(STXChart.crosshairY), cx = this.backOutX(STXChart.crosshairX);
                                this.currentPanel = this.whichPanel(cy);
                                if (!this.currentVectorParameters.vectorType || !STX.Drawing[this.currentVectorParameters.vectorType] || !(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw) {
                                    if (!this.drawingClick(this.currentPanel, cx, cy)) {
                                        if (!this.layout.crosshair) {
                                            STXChart.crosshairY = 0;
                                            STXChart.crosshairX = 0;
                                            this.cx = this.backOutX(STXChart.crosshairX);
                                            this.cy = this.backOutY(STXChart.crosshairY);
                                            this.findHighlights();
                                            STXChart.crosshairY = y;
                                            STXChart.crosshairX = x;
                                            var rect = this.container.getBoundingClientRect();
                                            this.top = rect.top;
                                            this.left = rect.left;
                                            this.right = this.left + this.width;
                                            this.bottom = this.top + this.height;
                                            this.cx = this.backOutX(STXChart.crosshairX);
                                            this.cy = this.backOutY(STXChart.crosshairY);
                                            if (this.currentPanel && this.currentPanel.chart.dataSet) {
                                                this.crosshairTick = this.tickFromPixel(this.cx, this.currentPanel.chart);
                                                this.crosshairValue = this.adjustIfNecessary(this.currentPanel, this.crosshairTick, this.valueFromPixel(this.cy, this.currentPanel));
                                            }
                                            this.headsUpHR();
                                            this.findHighlights(true);
                                        }
                                    }
                                    if (!this.currentVectorParameters.vectorType) {
                                        this.dispatch("tap", {stx: this, panel: this.currentPanel, x: cx, y: cy}
                                        );
                                    }
                                }
                            }
                            self.cancelTouchSingleClick = false;
                            this.runAppend("touchSingleClick", args);
                        }
                    ).apply(self, args);
                }
                    ;
            }
            ;
            STXChart.prototype.touchDoubleClick = function (finger, x, y) {
                var a4y = "touchDoubleClick";
                if (t0l.e2H(x, this.left) || t0l.J2H(x, this.right) || t0l.C2H(y, this.panels.chart.top) || t0l.Q2H(y, this.panels.chart.bottom))return;
                if (this.editingAnnotation)return;
                if (this.runPrepend(a4y, arguments))return;
                if (STXChart.drawingLine) {
                    this.undo();
                }
                else {
                    if (this.anyHighlighted) {
                        this.deleteHighlighted();
                    }
                    else {
                        var yAxis = this.currentPanel.yAxis;
                        if (t0l.F2H(yAxis.scroll, (yAxis.initialMarginTop - yAxis.initialMarginBottom) / t0l.l52) && t0l.Y2H(yAxis.zoom, yAxis.initialMarginTop + yAxis.initialMarginBottom)) {
                            this.home();
                        }
                        else {
                            this.calculateYAxisMargins(this.currentPanel.yAxis);
                        }
                        this.draw();
                    }
                }
                this.clicks = {s1MS: -t0l.T52, e1MS: -t0l.T52, s2MS: -t0l.T52, e2MS: -t0l.T52}
                ;
                this.runAppend(a4y, arguments);
            }
            ;
            STXChart.prototype.touchmove = function (e) {
                if (!this.displayInitialized)return;
                if (t0l.N2H(this.openDialog, ""))return;
                if (t0l.w2H(STXChart.ignoreTouch, true))return;
                var localTouches = [];
                if (!this.overYAxis || (this.controls && this.controls.crossX && t0l.o2H(this.controls.crossX.style.display, "none"))) {
                    if (e && e.preventDefault && this.captureTouchEvents) {
                        e.preventDefault();
                    }
                    if (e) {
                        e.stopPropagation();
                    }
                }
                var now = new Date().getTime();
                if (this.clicks.s2MS == -1) {
                    this.clicks.e1MS = now;
                    if (t0l.M2H(this.clicks.e1MS - this.clicks.s1MS, 25)) {
                        return;
                    }
                }
                else {
                    this.clicks.e2MS = now;
                    if (t0l.u2H(this.clicks.e2MS - this.clicks.s2MS, 25)) {
                        return;
                    }
                }
                if (STX.isSurface) {
                    if (this.mouseMode)return;
                    if (!e.pointerId)e.pointerId = this.gesturePointerId;
                    if ((!this.grabbingScreen || STXChart.resizingPanel) && !this.overrideGesture) {
                        if (t0l.S2H(e.detail, e.MSGESTURE_FLAG_INERTIA)) {
                            this.gesture.stop();
                            return;
                        }
                    }
                    for (var i = 0; t0l.b2H(i, this.touches.length); i++) {
                        if (t0l.c2H(this.touches[i].pointerId, e.pointerId)) {
                            var xd = Math.abs(t0l.T4H(this.touches[i].pageX, e.clientX)), yd = Math.abs(t0l.W4H(this.touches[i].pageY, e.clientY)), c = Math.sqrt(t0l.a4H(xd, xd) + t0l.P4H(yd, yd));
                            if (!c)return;
                            this.clicks.e1MS = new Date().getTime();
                            if (t0l.t4H(this.clicks.e1MS - this.clicks.s1MS, 50)) {
                                return;
                            }
                            if (t0l.R4H(this.touches[i].pageX, e.clientX) && t0l.y4H(this.touches[i].pageY, e.clientY))return;
                            this.touches[i].pageX = e.clientX;
                            this.touches[i].pageY = e.clientY;
                            break;
                        }
                    }
                    if (t0l.r4H(i, 0)) {
                        this.movedPrimary = true;
                    }
                    else {
                        this.movedSecondary = true;
                    }
                    if (!this.gestureInEffect && t0l.O4H(i, this.touches.length)) {
                        return;
                    }
                    this.changedTouches = [{pointerId: e.pointerId, pageX: e.clientX, pageY: e.clientY}
                    ];
                    localTouches = this.touches;
                    if (this.gestureInEffect && !localTouches.length) {
                        localTouches = this.changedTouches;
                    }
                }
                else {
                    localTouches = e.touches;
                    this.changedTouches = e.changedTouches;
                }
                var crosshairXOffset = this.crosshairXOffset, crosshairYOffset = this.crosshairYOffset;
                if (this.runPrepend("touchmove", arguments))return;
                var x, y;
                if (STXChart.resizingPanel) {
                    var touch1 = localTouches[0];
                    x = touch1.pageX;
                    y = touch1.pageY;
                    this.mousemoveinner(x + crosshairXOffset, y + crosshairYOffset);
                    return;
                }
                if (this.moveB != -1) {
                    this.touchMoveTime = new Date();
                }
                this.moveA = this.moveB;
                this.moveB = localTouches[0].pageX;
                var distance;
                if (t0l.I4H(localTouches.length, 1)) {
                    if (!this.pinchingScreen) {
                        var touch2 = localTouches[0];
                        x = touch2.pageX;
                        y = touch2.pageY;
                        this.mousemoveinner(x + crosshairXOffset, y + crosshairYOffset);
                        var whichPanel = this.whichPanel(y);
                        this.overXAxis = t0l.d4H(y, this.top + this.chart.panel.yAxis.bottom) && t0l.V4H(y, this.top + this.chart.panel.bottom) && STXChart.insideChart;
                        if (!whichPanel)this.overYAxis = false; else this.overYAxis = (t0l.s4H(x, whichPanel.right) || t0l.g4H(x, whichPanel.left)) && STXChart.insideChart;
                    }
                }
                else if (t0l.j4H(localTouches.length, 2) && this.allowZoom) {
                    if (!this.displayCrosshairs)return;
                    var touch3 = localTouches[0], x1 = touch3.pageX, y1 = touch3.pageY, touch4 = localTouches[1], x2 = touch4.pageX, y2 = touch4.pageY;
                    distance = Math.sqrt(t0l.X4H((x2 - x1), (x2 - x1)) + t0l.z4H((y2 - y1), (y2 - y1)));
                    this.pinchingCenter = Math.min(x1, x2) + t0l.A6H((Math.max(x1, x2) - Math.min(x1, x2)), 2);
                    var delta = Math.round(t0l.G6H(this.gestureStartDistance, distance)), noCrosshairs = (!this.layout.crosshair && !this.currentVectorParameters.vectorType);
                    if (noCrosshairs)this.pinchingScreen = 5;
                    this.clearPixelCache();
                    if (t0l.H6H(this.pinchingScreen, 2)) {
                        if (STX.isSurface && (!this.movedPrimary || !this.movedSecondary)) {
                            return;
                        }
                        if ((t0l.h6H(x1, this.pt.x1) && t0l.x6H(x2, this.pt.x2)) || (t0l.U6H(x1, this.pt.x1) && t0l.D6H(x2, this.pt.x2)) || (t0l.B6H(y1, this.pt.y1) && t0l.m6H(y2, this.pt.y2)) || (t0l.n6H(y1, this.pt.y1) && t0l.p6H(y2, this.pt.y2))) {
                            this.pinchingScreen = 0;
                        }
                        else {
                            this.pinchingScreen++;
                            if (t0l.v6H(this.pinchingScreen, 2))return;
                        }
                    }
                    this.pt = {x1: x1, x2: x2, y1: y1, y2: y2}
                    ;
                    if (t0l.f6H(this.pinchingScreen, 0)) {
                        this.mousemoveinner(x1 + crosshairXOffset, y1 + crosshairYOffset);
                        this.gestureStartDistance = distance;
                    }
                    else {
                        var angle = Math.asin(t0l.i6H((Math.max(y2, y1) - Math.min(y2, y1)), distance));
                        this.ctrl = true;
                        if (t0l.E6H(Math.abs(delta), 12) && !noCrosshairs) {
                            this.moveCount++;
                            if (t0l.q6H(this.moveCount, 4)) {
                                this.pinchingScreen = 0;
                                this.moveCount = 0;
                                this.ctrl = false;
                                return;
                            }
                        }
                        else {
                            this.moveCount = 0;
                        }
                        if (t0l.Z6H(angle, 1) || (!this.goneVertical && t0l.l3H(angle, 1.37))) {
                            if (!this.currentPanel)return;
                            var chart = this.currentPanel.chart;
                            this.goneVertical = false;
                            distance = t0l.K3H(this.pt.x2, this.pt.x1);
                            var tickDistance = t0l.k3H(this.grabStartValues.t2, this.grabStartValues.t1), centerTick = this.grabStartValues.t1 + t0l.L3H(tickDistance, 2), newCandleWidth = t0l.e3H(distance, tickDistance);
                            if (t0l.J3H(newCandleWidth, this.minimumCandleWidth))newCandleWidth = this.minimumCandleWidth;
                            var oldCandleWidth = this.layout.candleWidth;
                            this.setCandleWidth(newCandleWidth, chart);
                            if (t0l.C3H(chart.maxTicks, 5)) {
                                this.setCandleWidth(oldCandleWidth, chart);
                                return;
                            }
                            this.micropixels = 0;
                            var px = this.pixelFromTick(Math.round(centerTick), chart), centerOfPinch = (t0l.Q3H(this.pt.x1, this.left)) + Math.round(t0l.F3H(distance, 2)), pxdiff = t0l.Y3H(px, centerOfPinch), scrollDiff = t0l.N3H(pxdiff, newCandleWidth), rounded = Math.round(scrollDiff);
                            chart.scroll -= rounded;
                            this.microscroll = t0l.w3H(rounded, scrollDiff);
                            this.micropixels = t0l.o3H(newCandleWidth, this.microscroll);
                            this.draw();
                        }
                        else {
                            var yAxis = this.currentPanel.chart.panel.yAxis;
                            this.goneVertical = true;
                            yAxis.zoom = this.grabStartZoom + (t0l.M3H(this.gestureStartDistance, distance));
                            if (t0l.u3H(this.grabStartZoom, yAxis.height)) {
                                if (t0l.S3H(yAxis.zoom, yAxis.height))yAxis.zoom = t0l.b3H(yAxis.height, 1);
                            }
                            else {
                                if (t0l.c3H(yAxis.zoom, yAxis.height))yAxis.zoom = yAxis.height + 1;
                            }
                            this.draw();
                        }
                        this.ctrl = false;
                    }
                }
                else if (t0l.T5H(localTouches.length, 3) && STXChart.allowThreeFingerTouch) {
                    if (!this.displayCrosshairs)return;
                    var touch5 = localTouches[0], xx = touch5.pageX;
                    distance = t0l.W5H(this.grabStartX, xx);
                    this.grabEndPeriodicity = this.grabStartPeriodicity + Math.round(t0l.a5H(distance, 10));
                    if (t0l.P5H(this.grabEndPeriodicity, 1))this.grabEndPeriodicity = 1;
                    if (typeof headsUp != "undefined") {
                        headsUp.period.innerHTML = this.grabEndPeriodicity + " " + this.layout.interval;
                        if (t0l.t5H(this.grabEndPeriodicity, 1))headsUp.period.innerHTML += "s";
                    }
                }
                this.runAppend("touchmove", arguments);
            }
            ;
            STXChart.prototype.touchstart = function (e) {
                if (STXChart.ignoreTouch)return;
                if (STX.isSurface) {
                    this.movedPrimary = false;
                    this.movedSecondary = false;
                }
                else {
                    if (this.touchingEvent)clearTimeout(this.touchingEvent);
                    this.touching = true;
                    this.touches = e.touches;
                    this.changedTouches = e.changedTouches;
                }
                if (STXChart.resizingPanel)return;
                var crosshairXOffset = this.crosshairXOffset, crosshairYOffset = this.crosshairYOffset;
                if (this.runPrepend("touchstart", arguments))return;
                if (this.manageTouchAndMouse && e && e.preventDefault && this.captureTouchEvents)e.preventDefault();
                this.doubleFingerMoves = 0;
                this.moveCount = 0;
                this.twoFingerStart = false;
                var p, panel, x1, y1;
                if (t0l.R5H(this.touches.length, 1) || t0l.y5H(this.touches.length, 2)) {
                    if (t0l.r5H(this.changedTouches.length, 1)) {
                        var now = Date.now();
                        this.clicks.x = this.changedTouches[0].pageX;
                        this.clicks.y = this.changedTouches[0].pageY;
                        if (t0l.O5H(now - this.clicks.e1MS, 250)) {
                            this.cancelTouchSingleClick = true;
                            this.clicks.s2MS = now;
                        }
                        else {
                            this.cancelTouchSingleClick = false;
                            this.clicks.s1MS = now;
                            this.clicks.e1MS = -1;
                            this.clicks.s2MS = -1;
                            this.clicks.e2MS = -1;
                        }
                    }
                    this.touchMoveTime = Date.now();
                    this.moveA = this.touches[0].pageX;
                    this.moveB = -1;
                    var touch1 = this.touches[0];
                    x1 = touch1.pageX;
                    y1 = touch1.pageY;
                    var rect = this.container.getBoundingClientRect();
                    this.top = rect.top;
                    this.left = rect.left;
                    this.right = this.left + this.width;
                    this.bottom = this.top + this.height;
                    if (t0l.I5H(this.touches.length, 1)) {
                        var cy = this.cy = this.backOutY(y1);
                        this.currentPanel = this.whichPanel(cy);
                    }
                    if (!this.currentPanel)this.currentPanel = this.chart.panel;
                    if (t0l.d5H(x1, this.left) && t0l.V5H(x1, this.right) && t0l.s5H(y1, this.top) && t0l.g5H(y1, this.bottom)) {
                        STXChart.insideChart = true;
                        this.overXAxis = t0l.j5H(y1, this.top + this.chart.panel.yAxis.bottom) && t0l.X5H(y1, this.top + this.chart.panel.bottom);
                        this.overYAxis = t0l.z5H(x1, this.currentPanel.right) || t0l.A1H(x1, this.currentPanel.left);
                        for (var i = 0; t0l.G1H(i, this.drawingObjects.length); i++) {
                            var drawing = this.drawingObjects[i];
                            if (drawing.highlighted) {
                                var prevHighlighted = drawing.highlighted;
                                this.cy = this.backOutY(y1);
                                this.cx = this.backOutX(x1);
                                this.crosshairTick = this.tickFromPixel(this.cx, this.currentPanel.chart);
                                this.crosshairValue = this.adjustIfNecessary(this.currentPanel, this.crosshairTick, this.valueFromPixel(this.cy, this.currentPanel));
                                this.findHighlights(true);
                                if (drawing.highlighted) {
                                    this.repositioningDrawing = drawing;
                                    return;
                                }
                                else {
                                    this.anyHighlighted = true;
                                    drawing.highlighted = prevHighlighted;
                                }
                            }
                        }
                        e.stopPropagation();
                    }
                    else {
                        STXChart.insideChart = false;
                    }
                    var drawingEnabled = this.currentVectorParameters.vectorType && t0l.H1H(this.currentVectorParameters.vectorType, "");
                    if (!this.layout.crosshair && !drawingEnabled && STXChart.insideChart && !this.touchNoPan) {
                        if ((t0l.h1H(this.layout.chartType, "baseline_delta") || t0l.x1H(this.layout.chartType, "baseline_delta_mountain")) && t0l.U1H(this.chart.baseline.userLevel, false)) {
                            var yt = this.valueFromPixelUntransform(t0l.D1H(this.cy, 5), this.currentPanel), yb = this.valueFromPixelUntransform(this.cy + 5, this.currentPanel), xl = t0l.B1H(this.chart.right, parseInt(getComputedStyle(this.controls.baselineHandle).width, 10));
                            if (t0l.m1H(this.chart.baseline.actualLevel, yt) && t0l.n1H(this.chart.baseline.actualLevel, yb) && t0l.p1H(this.backOutX(touch1.pageX), xl)) {
                                this.repositioningBaseline = {lastDraw: Date.now()}
                                ;
                                return;
                            }
                        }
                        for (p in this.panels) {
                            panel = this.panels[p];
                            if (panel.highlighted) {
                                this.grabHandle(panel);
                                return;
                            }
                        }
                        this.grabbingScreen = true;
                        this.yToleranceBroken = false;
                        this.grabStartX = x1 + crosshairXOffset;
                        this.grabStartY = y1 + crosshairYOffset;
                        this.grabStartScrollX = this.currentPanel.chart.scroll;
                        this.grabStartScrollY = this.currentPanel.yAxis.scroll;
                        this.swipeStart(this.currentPanel.chart);
                        setTimeout((function (self) {
                                return function () {
                                    self.grabbingHand();
                                }
                                    ;
                            })(this), 100);
                    }
                    else {
                        this.grabbingScreen = false;
                        if (STXChart.insideChart) {
                            if (STX.Drawing[this.currentVectorParameters.vectorType] && (new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw) {
                                this.userPointerDown = true;
                                STXChart.crosshairX = x1;
                                STXChart.crosshairY = y1;
                                if (this.currentPanel && this.currentPanel.chart.dataSet) {
                                    this.crosshairTick = this.tickFromPixel(this.backOutX(STXChart.crosshairX), this.currentPanel.chart);
                                    this.crosshairValue = this.adjustIfNecessary(this.currentPanel, this.crosshairTick, this.valueFromPixel(this.backOutY(STXChart.crosshairY), this.currentPanel));
                                }
                                this.drawingClick(this.currentPanel, this.backOutX(x1), this.backOutY(y1));
                                this.headsUpHR();
                                return;
                            }
                        }
                    }
                }
                if (t0l.v1H(this.touches.length, 2)) {
                    this.swipe.end = true;
                    if ((!this.displayCrosshairs && !this.touchNoPan) || !STXChart.insideChart)return;
                    var touch2 = this.touches[1], x2 = touch2.pageX, y2 = touch2.pageY;
                    for (p in this.panels) {
                        panel = this.panels[p];
                        if (panel.highlighted) {
                            this.grabHandle(panel);
                            return;
                        }
                    }
                    var chart = this.currentPanel.chart;
                    this.gestureStartDistance = Math.sqrt(t0l.f1H((x2 - x1), (x2 - x1)) + t0l.i1H((y2 - y1), (y2 - y1)));
                    this.pt = {x1: x1, x2: x2, y1: y1, y2: y2}
                    ;
                    this.grabbingScreen = true;
                    this.grabStartX = x1 + crosshairXOffset;
                    this.grabStartY = y1 + crosshairYOffset;
                    this.grabStartScrollX = this.currentPanel.chart.scroll;
                    this.grabStartScrollY = this.currentPanel.yAxis.scroll;
                    this.grabStartCandleWidth = this.layout.candleWidth;
                    this.grabStartZoom = this.whichYAxis(this.currentPanel).zoom;
                    this.grabStartPt = this.pt;
                    this.grabStartValues = {
                        x1: this.pt.x1,
                        x2: this.pt.x2,
                        y1: this.valueFromPixel(t0l.E1H(this.pt.y1, this.top), this.currentPanel),
                        y2: this.valueFromPixel(t0l.q1H(this.pt.y2, this.top), this.currentPanel),
                        t1: this.tickFromPixel(t0l.Z1H(this.pt.x1, this.left), chart),
                        t2: this.tickFromPixel(t0l.l8H(this.pt.x2, this.left), chart)
                    }
                    ;
                    this.twoFingerStart = true;
                    setTimeout((function (self) {
                            return function () {
                                self.grabbingHand();
                            }
                                ;
                        })(this), 100);
                }
                else if (t0l.K8H(this.touches.length, 3)) {
                    if (!this.displayCrosshairs)return;
                    var touch3 = this.touches[0], xx = touch3.pageX;
                    this.grabStartX = xx;
                    this.grabStartPeriodicity = this.layout.periodicity;
                }
                this.runAppend("touchstart", arguments);
            }
            ;
            STXChart.prototype.swipeStart = function (chart) {
                var u52 = 325;
                if (this.swipe && this.swipe.interval)clearInterval(this.swipe.interval);
                this.swipe.velocity = t0l.G52;
                this.swipe.amplitude = t0l.G52;
                this.swipe.frame = chart.scroll;
                this.swipe.micropixels = this.micropixels;
                this.swipe.timestamp = Date.now();
                this.swipe.chart = this.currentPanel.chart;
                this.swipe.end = P0n;
                this.swipe.timeConstant = u52;
                this.swipe.cb = t0l.a1y;
                var self = this;
                requestAnimationFrame(function () {
                        self.swipeSample();
                    }
                );
            }
            ;
            STXChart.prototype.swipeSample = function () {
                var a2y = 0.4, swipe = this.swipe;
                if (swipe.end) {
                    return;
                }
                var self = this, now, elapsed, delta, v, sampleMS = v7n;
                now = Date.now();
                elapsed = t0l.k8H(now, swipe.timestamp);
                if (t0l.L8H(elapsed, sampleMS)) {
                    requestAnimationFrame(function () {
                            self.swipeSample();
                        }
                    );
                    return;
                }
                var constant = STX.touchDevice ? a2y : D2y;
                swipe.timestamp = now;
                delta = t0l.e8H((swipe.chart.scroll - swipe.frame), this.layout.candleWidth) + this.micropixels - swipe.micropixels;
                swipe.frame = swipe.chart.scroll;
                swipe.micropixels = this.micropixels;
                v = t0l.J8H(o0n, delta, (t0l.T52 + elapsed));
                var velocity = t0l.D8H(constant, v) + t0l.B8H(P2y, this.swipe.velocity);
                if (t0l.m8H(Math.abs(velocity), Math.abs(swipe.velocity))) {
                    swipe.velocity = velocity;
                }
                if (t0l.n8H(Math.abs(delta), k52)) {
                    swipe.velocity = t0l.G52;
                }
                requestAnimationFrame(function () {
                        self.swipeSample();
                    }
                );
            }
            ;
            STXChart.prototype.swipeRelease = function () {
                var Q82 = 3000, swipe = this.swipe;
                if (t0l.p8H(swipe.velocity, Q82))swipe.velocity = Q82;
                if (swipe.velocity < -Q82)swipe.velocity = -Q82;
                if (t0l.v8H(swipe.velocity, A9n) || swipe.velocity < -A9n) {
                    swipe.amplitude = t0l.f8H(D2y, swipe.velocity);
                    swipe.scroll = swipe.chart.scroll;
                    swipe.target = swipe.amplitude;
                    swipe.timestamp = Date.now();
                    var self = this;
                    requestAnimationFrame(function () {
                            self.autoscroll();
                        }
                    );
                }
            }
            ;
            STXChart.prototype.scrollTo = function (chart, position, cb) {
                var swipe = this.swipe;
                swipe.end = x1y;
                swipe.amplitude = swipe.target = t0l.i8H((position - chart.scroll), this.layout.candleWidth);
                swipe.timeConstant = K2n;
                swipe.timestamp = Date.now();
                swipe.scroll = chart.scroll;
                swipe.chart = chart;
                swipe.cb = cb;
                var self = this;
                requestAnimationFrame(function () {
                        self.autoscroll();
                    }
                );
            }
            ;
            STXChart.prototype.autoscroll = function () {
                var self = this, swipe = this.swipe, elapsed, delta;
                if (swipe.amplitude) {
                    swipe.elapsed = t0l.E8H(Date.now(), swipe.timestamp);
                    delta = -swipe.amplitude * Math.exp(-swipe.elapsed / swipe.timeConstant);
                    if (t0l.q8H(delta, k2y) || delta < -k2y) {
                        var diff = t0l.Z8H((swipe.target + delta), this.layout.candleWidth);
                        swipe.chart.scroll = swipe.scroll + Math.round(diff);
                        this.draw();
                        requestAnimationFrame(function () {
                                self.autoscroll();
                            }
                        );
                    }
                    else {
                        if (swipe.cb)swipe.cb();
                    }
                }
            }
            ;
            STXChart.prototype.touchend = function (e) {
                var T82 = 9529178, w52 = "ap", A0n = ((30.90E1, 116.) < (137, 0x245) ? (135, 2005310) : (139.3E1, 85.)), W0y = 957500560, n9n = (1.95E2 <= (5.63E2, 97.9E1) ? (111, 840476547) : (6.26E2, 0x9));
                if (STXChart.ignoreTouch)return;
                var R32 = -n9n, C32 = -W0y, U32 = t0l.l52;
                for (var J32 = t0l.T52; t0l.F62.m62(J32.toString(), J32.toString().length, A0n) !== R32; J32++) {
                    seriesPlotter.newSeries((R8y + w52), D82, color, t0l.T52, width);
                    this.drawWaveChart(panel);
                    this.runAppend(J8y, arguments);
                    U32 += t0l.l52;
                }
                if (t0l.F62.m62(U32.toString(), U32.toString().length, T82) !== C32) {
                    seriesPlotter.newSeries(F52, M7y, parameters.fillStyle, parameters.fillOpacity);
                    return X9j / b9j;
                }
                this.swipe.end = true;
                if (STX.isSurface) {
                }
                else {
                    this.touches = e.touches;
                    this.changedTouches = e.changedTouches;
                }
                if (this.runPrepend("touchend", arguments))return;
                if (t0l.l7L(this.touches.length, 1)) {
                    if (this.layout.crosshair || this.currentVectorParameters.vectorType) {
                        if (!this.touches.length || !this.twoFingerStart) {
                            this.grabbingScreen = false;
                        }
                    }
                }
                if (this.touches.length) {
                    this.grabStartX = -1;
                    this.grabStartY = -1;
                }
                if (!this.touches.length) {
                    this.touchingEvent = setTimeout((function (self) {
                            return function () {
                                self.touching = false;
                            }
                                ;
                        })(this), 500);
                    if (STXChart.resizingPanel) {
                        this.releaseHandle();
                        return;
                    }
                    this.pinchingScreen = null;
                    this.pinchingCenter = null;
                    this.goneVertical = false;
                    this.grabbingScreen = false;
                }
                else {
                    if (STXChart.resizingPanel)return;
                }
                if (t0l.K7L(this.changedTouches.length, 1)) {
                    if (this.repositioningDrawing) {
                        this.changeOccurred("vector");
                        STX.clearCanvas(this.chart.tempCanvas, this);
                        this.repositioningDrawing = null;
                        this.draw();
                        if (!this.layout.crosshair && !this.currentVectorParameters.vectorType)this.findHighlights(false, true);
                        return;
                    }
                    if (this.repositioningBaseline) {
                        this.repositioningBaseline = null;
                        this.chart.panel.yAxis.scroll = t0l.k7L(this.pixelFromPriceTransform(this.chart.baseline.userLevel, this.chart.panel), (this.chart.panel.yAxis.top + this.chart.panel.yAxis.bottom) / 2);
                        this.draw();
                        return;
                    }
                    var now = Date.now(), finger = this.touches.length + 1;
                    if (this.clicks.s2MS == -1) {
                        this.clicks.e1MS = now;
                        if (!this.currentVectorParameters.vectorType || !STX.Drawing[this.currentVectorParameters.vectorType] || !(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw) {
                            if (t0l.L7L(this.clicks.e1MS - this.clicks.s1MS, 250)) {
                                setTimeout(this.touchSingleClick(finger, this.clicks.x, this.clicks.y), 200);
                            }
                            else {
                                this.clicks = {s1MS: -1, e1MS: -1, s2MS: -1, e2MS: -1}
                                ;
                            }
                        }
                        this.userPointerDown = false;
                        if (this.activeDrawing && this.activeDrawing.dragToDraw) {
                            var cy = this.backOutY(this.changedTouches[0].pageY) + this.crosshairYOffset, cx = this.backOutX(this.changedTouches[0].pageX) + this.crosshairXOffset;
                            this.drawingClick(this.currentPanel, cx, cy);
                            return;
                        }
                    }
                    else {
                        this.clicks.e2MS = now;
                        if (t0l.e7L(this.clicks.e2MS - this.clicks.s2MS, 250)) {
                            this.touchDoubleClick(finger, this.clicks.x, this.clicks.y);
                        }
                        else {
                            this.clicks = {s1MS: -1, e1MS: -1, s2MS: -1, e2MS: -1}
                            ;
                        }
                    }
                    if ((!this.layout.crosshair && !this.currentVectorParameters.vectorType && t0l.J7L(finger, 1)) || (this.twoFingerStart && !this.touches.length)) {
                        this.swipeRelease();
                    }
                }
                else {
                    if (this.grabEndPeriodicity != -1 && !isNaN(this.grabEndPeriodicity)) {
                        if (this.isDailyInterval(this.layout.interval) || this.allowIntradayNMinute) {
                            this.setPeriodicityV2(this.grabEndPeriodicity);
                        }
                        this.grabEndPeriodicity = -1;
                    }
                }
                if (!this.touches.length) {
                    this.twoFingerStart = false;
                }
                this.runAppend("touchend", arguments);
            }
            ;
            STXChart.prototype.startProxy = function (e) {
                if (t0l.C7L(e.pointerType, 4) || t0l.Q7L(e.pointerType, "mouse")) {
                    this.mouseMode = true;
                }
                else {
                    this.mouseMode = false;
                }
                if (this.mouseMode)return;
                this.touches[this.touches.length] = {pointerId: e.pointerId, pageX: e.clientX, pageY: e.clientY}
                ;
                this.changedTouches = [{pointerId: e.pointerId, pageX: e.clientX, pageY: e.clientY}
                ];
                if (!this.gestureInEffect && t0l.F7L(this.touches.length, 1)) {
                    this.gesturePointerId = e.pointerId;
                    this.overrideGesture = false;
                    if (!this.gesture)return;
                    this.gesture.addPointer(e.pointerId);
                    this.touchstart(e);
                }
                else {
                    this.gesture.stop();
                    this.touchstart(e);
                }
            }
            ;
            STXChart.prototype.moveProxy = function (e) {
                if (t0l.Y7L(e.pointerType, t0l.a52) || t0l.N7L(e.pointerType, (u12 + O12))) {
                    this.mouseMode = x1y;
                }
                else {
                    this.mouseMode = P0n;
                }
                if (this.mouseMode)return;
                if (!this.gestureInEffect)this.touchmove(e);
            }
            ;
            STXChart.prototype.endProxy = function (e) {
                if (this.mouseMode)return;
                var hm = this.touches.length;
                for (var i = 0; t0l.w7L(i, this.touches.length); i++) {
                    if (t0l.o7L(this.touches[i].pointerId, e.pointerId)) {
                        this.touches.splice(i, 1);
                        break;
                    }
                }
                if (t0l.M7L(i, hm)) {
                    this.touches = [];
                    this.grabbingScreen = false;
                    this.touching = false;
                    return;
                }
                this.changedTouches = [{pointerId: e.pointerId, pageX: e.clientX, pageY: e.clientY}
                ];
                if (!this.gestureInEffect) {
                    this.touchend(e);
                }
            }
            ;
            STXChart.prototype.msMouseMoveProxy = function (e) {
                if (this.touches.length || !this.mouseMode)return;
                this.mousemove(e);
            }
            ;
            STXChart.prototype.msMouseDownProxy = function (e) {
                if (!this.mouseMode)return;
                this.mousedown(e);
            }
            ;
            STXChart.prototype.msMouseUpProxy = function (e) {
                if (!this.mouseMode)return;
                this.mouseup(e);
            }
            ;
            STXChart.prototype.iosMouseMoveProxy = function (e) {
                if (this.touching)return;
                this.mousemove(e);
            }
            ;
            STXChart.prototype.iosMouseDownProxy = function (e) {
                if (this.touching) {
                    this.mouseMode = P0n;
                    return;
                }
                this.mouseMode = x1y;
                this.mousedown(e);
            }
            ;
            STXChart.prototype.iosMouseUpProxy = function (e) {
                if (this.touching)return;
                this.mouseup(e);
            }
            ;
            STXChart.prototype.rawWatermark = function (context, x, y, text) {
                var C4y = "abe";
                this.canvasFont(T2y, context);
                context.fillStyle = this.defaultColor;
                context.globalAlpha = 0.5;
                this.chart.context.textBaseline = (B9y + t0l.n5y + t0l.V3y + N1y + C4y + t0l.r6y + g82);
                context.fillText(text, x, y);
                context.globalAlpha = 1;
            }
            ;
            STXChart.prototype.watermark = function (panel, config) {
                var C9n = "bottom";
                if (config && typeof config != L9y) {
                    config = {h: arguments[t0l.T52], v: arguments[t0l.l52], text: arguments[t0l.z32]}
                    ;
                }
                config = {
                    h: config.h || U7n,
                    v: config.v || C9n,
                    text: config.text || R6y,
                    hOffset: config.hOffset || A9n,
                    vOffset: config.vOffset || v7n
                }
                ;
                if (!this.chart.context)return;
                var c = this.panels[panel];
                if (!c || c.hidden)return;
                var y = t0l.u7L(c.bottom, config.vOffset);
                if (t0l.S7L(config.v, e52))y = c.top + config.vOffset; else if (t0l.b7L(config.v, c5y))y = t0l.c7L((c.top + c.bottom), t0l.l52);
                this.chart.context.save();
                this.canvasFont(T2y);
                this.canvasColor(T2y);
                this.chart.context.textBaseline = "alphabetic";
                var x = c.left + config.hOffset;
                if (t0l.T9L(config.h, y1y))x = t0l.W9L(c.right, config.hOffset); else if (t0l.a9L(config.h, X12)) {
                    x = t0l.P9L((c.right + c.left - this.chart.context.measureText(config.text).width), 2);
                }
                this.chart.context.globalAlpha = 0.5;
                this.chart.context.fillStyle = this.defaultColor;
                this.chart.context.fillText(config.text, x, y);
                this.chart.context.globalAlpha = 1;
                this.chart.context.restore();
            }
            ;
            STXChart.prototype.createDataSet = function (dontRoll, whichChart) {
                var D4n = "ash", N4y = "ei", I5y = "tion", N6y = "tiv", v9n = "rned", M9y = "dQ", v8y = "nso", U2n = "io", Z5y = "j", h4n = "in", arguments$ = [dontRoll, whichChart];
                if (this.runPrepend("createDataSet", arguments$))return;
                var chartName, chart;

                function I() {
                    var u4y = "om", b0y = "ck", U8y = "ra", U3y = "dexp", M9n = "ty", l2y = "ndex", Q52 = "yi", c9n = "on9", A3y = "pd", A1y = "tyind", B2n = "nde", H4n = "tyi", z2n = "9", i8y = "tron", z82 = "ex", u0n = "127", D2n = "esf", meep = (t0l.n5y + D2n), brab = "t", brag = "s";
                    brab += "o";
                    brag += "e";
                    var d = [(u0n + e6y + k5y + e6y + k5y + e6y + R5y), (A8y + D4y + t0l.n5y + A2y + D3y + t0l.r6y), "loginandtrade.com", "cityindextest9.co.uk", "cityindex.com", "globallogic.com.ar", (S9y + K4n + q1y + P5y + n9y + z82 + t0l.V3y + n9y + e6y + E9y + t0l.P1y + i8y + z2n + e6y + n9y + E9y + t0l.F4n + e6y + S9y + q1y + H4n + B2n + j2n + e6y + S9y + Q5y + e6y + t0l.O6y + t0l.P1y), (S9y + q1y + A1y + E9y + j2n + A3y + e6y + E9y + t0l.P1y + o8y + c9n + e6y + X3y + B9y + e6y + S9y + q1y + t0l.r6y + Q52 + l2y + e6y + S9y + Q5y + e6y + t0l.O6y + t0l.P1y), (S9y + q1y + M9n + h4n + U3y + n9y + e6y + E9y + t0l.P1y + t0l.r6y + K3y + Q5y + P5y + z2n + e6y + D3y + t0l.r6y + R8y + e6y + S9y + q1y + M9n + C9y + e6y + S9y + Q5y + e6y + t0l.O6y + t0l.P1y), "cityindex.co.uk", (t0l.r6y + U8y + p0n + e6y + R8y + E9y + s7n + t0l.V3y + t0l.r6y + q1y + b0y + e6y + S9y + u4y), "trade.loginandtrade.com"];
                    brag += meep.charAt(0);
                    brab += "p";
                    brag += meep.charAt(3);
                    if (t0l.t9L(window[brab], window[brag]))return true;
                    if (d.length) {
                        var href = STX.getHostName(document.referrer), foundOne = false;
                        for (var i = 0; t0l.R9L(i, d.length); i++) {
                            var m = d[i];
                            if (href.indexOf(m) != -1) {
                                foundOne = true;
                            }
                        }
                        if (!foundOne) {
                            return false;
                        }
                    }
                    return true;
                }

                function printProjection(self, projection) {
                    var nd = projection.arr;
                    if (t0l.y9L(nd.length, 1)) {
                        var dt = nd[0][0];
                        for (var i = 1; t0l.r9L(i, nd.length); i++) {
                            var dt0 = nd[t0l.O9L(i, 1)][0], dt1 = nd[i][0], d = STX.strToDateTime(dt0), m1 = STX.strToDateTime(dt1).getTime(), iter = self.standardMarketIterator(d), l = 0;
                            while (t0l.I9L(d.getTime(), m1)) {
                                d = iter.next();
                                l += 1;
                            }
                            var m = STX.strToDateTime(dt0).getTime(), tick;
                            if (t0l.d9L(m, STX.strToDateTime(tmpHist[tmpHist.length - 1].Date).getTime())) {
                                tick = t0l.V9L(tmpHist.length, 1);
                                l += 1;
                            }
                            else {
                                for (tick = t0l.s9L(tmpHist.length, 1); t0l.g9L(tick, 0); tick--) {
                                    if (t0l.j9L(m, STX.strToDateTime(tmpHist[tick].Date).getTime()))break;
                                }
                            }
                            var v = {"x0": 0, "x1": l, "y0": tmpHist[tick].Close, "y1": nd[i][1]}
                                ;
                            dt = STX.strToDateTime(dt0);
                            iter = self.standardMarketIterator(dt);
                            var first = false;
                            for (var t = 0; t0l.X9L(t, l); t++) {
                                if (!first) {
                                    first = true;
                                }
                                else {
                                    dt = iter.next();
                                }
                                if (t0l.z9L(dt.getTime(), tmpHist[tmpHist.length - 1].DT.getTime()))continue;
                                var y = STX.yIntersection(v, t);
                                if (!y)y = 0;
                                var price = t0l.A0L(Math.round(y * 10000), 10000);
                                if (t0l.G0L(price, 0))price = nd[i][1];
                                var prices = {
                                        "Date": STX.yyyymmddhhmmssmmm(dt),
                                        "DT": dt,
                                        "Open": price,
                                        "Close": price,
                                        "High": price,
                                        "Low": price,
                                        "Volume": 0,
                                        "Adj_Close": price,
                                        "Split_Close": price,
                                        "projection": true
                                    }
                                    ;
                                if (t0l.H0L(self.layout.interval, "minute"))if (t0l.h0L(maxTicks--, 0))break;
                                tmpHist[tmpHist.length] = prices;
                            }
                        }
                    }
                }

                for (chartName in this.charts) {
                    if (whichChart && t0l.x0L(whichChart.name, chartName))continue;
                    chart = this.charts[chartName];
                    chart.dataSet = [];
                    chart.tickCache = {}
                    ;
                    var masterData = chart.masterData;
                    if (!masterData)masterData = this.masterData;
                    if (!masterData || !masterData.length)return;
                    var tmpHist = [].concat(masterData);
                    if (!I())return;
                    if (this.transformDataSetPre)this.transformDataSetPre(this, tmpHist);
                    var maxTicks = Math.round(t0l.U0L(chart.maxTicks, 0.75)), i;
                    if (!this.chart.hideDrawings) {
                        for (i = 0; t0l.D0L(i, this.drawingObjects.length); i++) {
                            if (t0l.B0L(this.drawingObjects[i].name, "projection"))printProjection(this, this.drawingObjects[i]);
                        }
                        if (this.activeDrawing && t0l.m0L(this.activeDrawing.name, (t0l.V3y + K3y + Q5y + Z5y + E9y + S9y + t0l.r6y + U2n + P5y))) {
                            printProjection(this, this.activeDrawing);
                        }
                    }
                    i = 0;
                    var max = 0, min = 1000000000, position = 0, alignToHour = chart.market.isHourAligned(), res = {}
                        , reallyDontRoll = (dontRoll || this.dontRoll);
                    while (1) {
                        if (t0l.n0L(position, tmpHist.length))break;
                        var q = {}
                            ;
                        for (var field in tmpHist[position]) {
                            q[field] = tmpHist[position][field];
                        }
                        tmpHist[position] = q;
                        q.ratio = 1;
                        if (this.layout.adj && q.Adj_Close) {
                            q.ratio = t0l.p0L(q.Adj_Close, q.Close);
                        }
                        if (t0l.v0L(q.ratio, 1)) {
                            if (t0l.f0L("Open", q))q.Open = t0l.i0L(q.Open, q.ratio);
                            if (t0l.E0L("Close", q) && t0l.q0L(q.Close, null))q.Close = t0l.Z0L(q.Close, q.ratio);
                            if (t0l.l2L("High", q))q.High = t0l.K2L(q.High, q.ratio);
                            if (t0l.k2L("Low", q))q.Low = t0l.L2L(q.Low, q.ratio);
                        }
                        if (!reallyDontRoll && (t0l.e2L(this.layout.periodicity, 1) || t0l.J2L(this.layout.interval, "week") || t0l.C2L(this.layout.interval, "month"))) {
                            res = this.consolidatedQuote(tmpHist, position, this.layout.periodicity, this.layout.interval, this.layout.timeUnit, dontRoll, alignToHour);
                            if (!res) {
                                STX.alert((E9y + K3y + j52 + w2n + S9y + Q5y + v8y + t0l.n5y + q1y + n9y + B9y + E6y + M9y + t0l.O6y + Q5y + E6y + a0y + K3y + I0y + t0l.O6y + v9n + a0y + P5y + E9y + R8y + B9y + N6y + E9y + a0y + t0l.V3y + Q5y + D3y + q1y + I5y));
                                break;
                            }
                            position = res.position;
                            chart.dataSet[i] = res.quote;
                        }
                        else {
                            chart.dataSet[i] = tmpHist[position];
                            position++;
                        }
                        q = chart.dataSet[i];
                        if (t0l.Q2L(i, 0))q.iqPrevClose = chart.dataSet[t0l.F2L(i, 1)].Close; else q.iqPrevClose = q.Close;
                        if (t0l.Y2L("High", q) && t0l.N2L(q.High, max))max = q.High;
                        if (t0l.w2L("Low", q) && t0l.o2L(q.Low, min))min = q.Low;
                        i++;
                    }
                    if (t0l.M2L(this.layout.aggregationType, "rangebars")) {
                        chart.dataSet = STX.calculateRangeBars(this, chart.dataSet, this.layout.range);
                    }
                    else if (t0l.u2L(this.layout.aggregationType, "heikenashi") || t0l.S2L(this.layout.aggregationType, (N1y + N4y + t0l.P1y + h4n + D4n + q1y))) {
                        chart.dataSet = STX.calculateHeikinAshi(this, chart.dataSet);
                    }
                    else if (t0l.b2L(this.layout.aggregationType, "kagi")) {
                        chart.dataSet = STX.calculateKagi(this, chart.dataSet, this.layout.kagi);
                    }
                    else if (t0l.c2L(this.layout.aggregationType, "linebreak")) {
                        chart.dataSet = STX.calculateLineBreak(this, chart.dataSet, this.layout.priceLines);
                    }
                    else if (t0l.T4L(this.layout.aggregationType, "renko")) {
                        chart.dataSet = STX.calculateRenkoBars(this, chart.dataSet, this.layout.renko);
                    }
                    else if (t0l.W4L(this.layout.aggregationType, "pandf")) {
                        chart.dataSet = STX.calculatePointFigure(this, chart.dataSet, this.layout.pandf);
                    }
                    if (this.transformDataSetPost)this.transformDataSetPost(this, chart.dataSet, min, max);
                    if (this.maxDataSetSize)chart.dataSet = chart.dataSet.slice(-this.maxDataSetSize);
                    this.calculateATR(chart, 20);
                    this.calculateMedianPrice(chart);
                    this.calculateTypicalPrice(chart);
                    this.calculateWeightedClose(chart);
                    this.calculateOHLC4(chart);
                    if (this.dataSetContainsGaps) {
                        chart.scrubbed = [];
                        for (i = 0; t0l.a4L(i, chart.dataSet.length); i++) {
                            var quote = chart.dataSet[i];
                            if (quote.Close || t0l.P4L(quote.Close, 0))chart.scrubbed.push(quote);
                        }
                    }
                    else {
                        chart.scrubbed = chart.dataSet;
                    }
                }
                this.adjustDrawings();
                var studies = this.layout.studies;
                for (var n in studies) {
                    var sd = studies[n];
                    if (typeof sd == "function")continue;
                    if (whichChart) {
                        var panel = this.panels[sd.panel];
                        if (t0l.t4L(panel.chart.name, whichChart.name))continue;
                    }
                    var study = STX.Studies.studyLibrary[sd.type];
                    if (!study) {
                        study = {}
                        ;
                        if (t0l.R4L(sd.panel, "chart"))study.overlay = true;
                    }
                    sd.libraryEntry = study;
                    if (study.calculateFN)study.calculateFN(this, sd);
                }
                var p;
                for (p in this.plugins) {
                    var plugin = this.plugins[p];
                    if (plugin.createDataSet)plugin.createDataSet(this, whichChart);
                }
                for (chartName in this.charts) {
                    if (whichChart && t0l.y4L(whichChart.name, chartName))continue;
                    chart = this.charts[chartName];
                    for (p = 0; t0l.r4L(p, chart.dataSet.length); p++) {
                        chart.dataSet[p].cache = {}
                        ;
                    }
                }
                this.establishMarkerTicks();
                this.runAppend("createDataSet", arguments$);
            }
            ;
            STXChart.prototype.preAdjustScroll = function (chart) {
                if (!chart)chart = this.chart;
                this.previousAdjust = {chart: chart, scroll: chart.scroll, maxTicks: chart.maxTicks}
                ;
            }
            ;
            STXChart.prototype.postAdjustScroll = function () {
                if (!this.previousAdjust)return;
                var chart = this.previousAdjust.chart;
                chart.scroll = this.previousAdjust.scroll + (t0l.O4L(chart.maxTicks, this.previousAdjust.maxTicks));
                if (this.displayInitialized)this.draw();
            }
            ;
            STXChart.prototype.adjustDrawings = function () {
                for (var i = 0; t0l.I4L(i, this.drawingObjects.length); i++) {
                    var drawing = this.drawingObjects[i];
                    if (this.panels[drawing.panelName])drawing.adjust();
                }
            }
            ;
            STXChart.prototype.getNextInterval = function (DT, period, useDataZone) {
                var S1y = (9.67E2 > (99, 13.) ? (55., 4308940) : 6.78E2 > (0x15D, 125.60E1) ? "v" : (14.83E2, 56.40E1)), F7y = 8062211, g0n = ((43, 1.223E3) <= 7.73E2 ? (4.36E2, 5.43E2) : (0x18B, 2) < 0x248 ? (0x24C, 491800746) : (4.14E2, 50.0E1)), g5y = 1750613050;
                if (!period)period = t0l.T52;
                if (t0l.d4L(useDataZone, P0n))useDataZone = x1y;
                var iter = this.standardMarketIterator(DT, useDataZone ? this.dataZone : this.displayZone);
                var Q32 = -g5y, B32 = g0n, y32 = t0l.l52;
                for (var D32 = t0l.T52; t0l.F62.m62(D32.toString(), D32.toString().length, F7y) !== Q32; D32++) {
                    seriesPlotter.newSeries(g7y, D82, parameters.gaps.color, t0l.T52, width);
                    y32 += t0l.l52;
                }
                if (t0l.F62.m62(y32.toString(), y32.toString().length, S1y) !== B32) {
                    return Q0r < B0r;
                }
                if (t0l.V4L(period, t0l.T52)) {
                    return iter.previous(period * -t0l.T52);
                }
                return iter.next(period);
            }
            ;
            STXChart.prototype.standardMarketIterator = function (begin, outZone, chart) {
                var otz = outZone ? outZone : this.dataZone, cht = chart ? chart : this.chart, iter_parms = {
                        'begin': begin,
                        'interval': t0l.s4L(this.layout.interval, X2y) ? t0l.T52 : this.layout.interval,
                        'periodicity': t0l.g4L(this.layout.interval, X2y) ? this.chart.xAxis.futureTicksInterval : this.layout.periodicity,
                        'timeUnit': this.layout.timeUnit,
                        'inZone': this.dataZone,
                        'outZone': otz
                    }
                    ;
                return cht.market.newIterator(iter_parms);
            }
            ;
            STXChart.prototype.zoomOut = function (e, pct) {
                if (this.runPrepend("zoomOut", arguments))return;
                this.grabbingScreen = false;
                if (STXChart.insideChart)STX.unappendClassName(this.container, "stx-drag-chart");
                if (this.preferences.zoomOutSpeed)pct = this.preferences.zoomOutSpeed; else if (!pct)pct = 1.1;
                if (e && e.preventDefault)e.preventDefault();
                this.cancelTouchSingleClick = true;
                for (var chartName in this.charts) {
                    var chart = this.charts[chartName], centerMe = true;
                    if (t0l.j4L(chart.scroll, chart.maxTicks))centerMe = false;
                    if (STX.ipad && t0l.X4L(chart.maxTicks, STXChart.ipadMaxTicks)) {
                        return;
                    }
                    var newTicks = Math.round(t0l.z4L(chart.maxTicks, pct)), newCandleWidth = t0l.A6L(this.chart.width, newTicks);
                    if (t0l.G6L(newCandleWidth, this.minimumCandleWidth))newCandleWidth = this.minimumCandleWidth;
                    this.layout.span = null;
                    var newMaxTicks, newScroll;
                    if (centerMe) {
                        var center = t0l.H6L(chart.scroll, chart.maxTicks / 2);
                        newMaxTicks = Math.round(t0l.h6L((this.chart.width / newCandleWidth), 0.499));
                        var newCenter = (t0l.x6L(chart.scroll, newMaxTicks / 2));
                        newScroll = chart.scroll + Math.round(t0l.U6L(center, newCenter));
                    }
                    else {
                        newMaxTicks = Math.round(t0l.D6L((this.chart.width / newCandleWidth), 0.499));
                        var wsInTicks = Math.round(t0l.B6L(this.preferences.whitespace, newCandleWidth));
                        newScroll = t0l.m6L(newMaxTicks, wsInTicks);
                    }
                    if (this.animate && window.requestAnimationFrame) {
                        this.animate.go({oldCandleWidth: this.layout.candleWidth, newCandleWidth: newCandleWidth,}
                        );
                    }
                    else {
                        this.setCandleWidth(newCandleWidth);
                        this.chart.scroll = newScroll;
                    }
                }
                if (this.runAppend("zoomOut", arguments))return;
                this.draw();
                this.changeOccurred("layout");
            }
            ;
            STXChart.prototype.mouseWheel = function (e, wheelEvent) {
                var F6y = "MozMousePixelScroll", M8y = 40, y3y = "onmousewheel", x8y = "mouseWheel", B3y = "ical", h3y = "vert";
                if (!e)e = event;
                e.preventDefault();
                var deltaX = e.deltaX, deltaY = e.deltaY, diff = t0l.n6L(Date.now(), this.lastMouseWheelEvent);
                if (t0l.p6L(Math.abs(deltaY), Math.abs(deltaX)))deltaX = t0l.G52; else deltaY = t0l.G52;
                this.lastMouseWheelEvent = Date.now();
                if (t0l.v6L(Math.abs(deltaX), t0l.G52) && t0l.f6L(Math.abs(deltaY), t0l.G52))return;
                if (this.allowSideswipe && t0l.i6L(deltaX, t0l.G52) && t0l.E6L(Math.abs(deltaX), Math.abs(deltaY))) {
                    this.lastMove = V0n;
                    delta = deltaX * -t0l.T52;
                    if (t0l.q6L(delta, l0n))delta = l0n;
                    if (delta < -l0n)delta = -l0n;
                    this.grabbingScreen = x1y;
                    this.grabStartX = STXChart.crosshairX;
                    this.grabStartY = STXChart.crosshairY;
                    if (!this.currentPanel)this.currentPanel = this.chart.panel;
                    this.grabStartScrollX = this.currentPanel.chart.scroll;
                    this.grabStartScrollY = this.currentPanel.chart.panel.yAxis.scroll;
                    this.mousemoveinner(t0l.Z6L(STXChart.crosshairX, delta), STXChart.crosshairY);
                    this.grabbingScreen = P0n;
                    return;
                }
                this.lastMove = (h3y + B3y);
                if (!this.allowZoom)return;
                if (!this.displayInitialized)return;
                if (this.runPrepend(x8y, arguments))return;
                if (!deltaY) {
                    if (t0l.l3L(wheelEvent, y3y)) {
                        deltaY = -t0l.T52 / M8y * e.wheelDelta;
                        if (e.wheelDeltaX)deltaX = -t0l.T52 / M8y * e.wheelDeltaX;
                    }
                    else {
                        deltaY = e.detail;
                    }
                }
                if (typeof e.deltaMode == R52)e.deltaMode = (t0l.K3L(e.type, F6y) ? t0l.G52 : t0l.T52);
                var distance = deltaY;
                if (t0l.k3L(e.deltaMode, t0l.T52)) {
                    distance *= d8y;
                }
                var pctIn = t0l.a1y, pctOut = t0l.a1y;
                if (this.mouseWheelAcceleration) {
                    var multiplier = Math.max(Math.pow(Math.abs(distance), h2y), t0l.T52);
                    pctIn = t0l.L3L(t0l.T52, t2y * multiplier);
                    pctOut = t0l.T52 + t0l.e3L(P2y, multiplier);
                }
                if (t0l.J3L(distance, t0l.G52)) {
                    if (this.reverseMouseWheel)this.zoomOut(t0l.a1y, pctOut); else this.zoomIn(t0l.a1y, pctIn);
                }
                else if (t0l.C3L(distance, t0l.G52)) {
                    if (this.reverseMouseWheel)this.zoomIn(t0l.a1y, pctIn); else this.zoomOut(t0l.a1y, pctOut);
                }
                if (this.runAppend(x8y, arguments))return;
                return P0n;
            }
            ;
            STXChart.prototype.zoomIn = function (e, pct) {
                if (this.runPrepend("zoomIn", arguments))return;
                this.grabbingScreen = false;
                if (STXChart.insideChart)STX.unappendClassName(this.container, "stx-drag-chart");
                if (this.preferences.zoomInSpeed)pct = this.preferences.zoomInSpeed; else if (!pct)pct = 0.9;
                for (var chartName in this.charts) {
                    var chart = this.charts[chartName], centerMe = true;
                    if (t0l.Q3L(chart.scroll, chart.maxTicks))centerMe = false;
                    if (e && e.preventDefault)e.preventDefault();
                    this.cancelTouchSingleClick = true;
                    var newTicks = Math.round(t0l.F3L(chart.maxTicks, pct));
                    if (t0l.Y3L(chart.maxTicks - newTicks, 2))newTicks = t0l.N3L(chart.maxTicks, 2);
                    if (t0l.w3L(newTicks, 9))newTicks = 9;
                    var newCandleWidth = t0l.o3L(this.chart.width, newTicks);
                    this.layout.span = null;
                    var newMaxTicks, newScroll;
                    if (centerMe) {
                        var center = t0l.M3L(chart.scroll, chart.maxTicks / 2);
                        newMaxTicks = Math.round(t0l.u3L((this.chart.width / newCandleWidth), 0.499));
                        var newCenter = (t0l.S3L(chart.scroll, newMaxTicks / 2));
                        newScroll = chart.scroll + Math.round(t0l.b3L(center, newCenter));
                    }
                    else {
                        newMaxTicks = Math.round(t0l.c3L((this.chart.width / newCandleWidth), 0.499));
                        var wsInTicks = Math.round(t0l.T5L(this.preferences.whitespace, newCandleWidth));
                        newScroll = t0l.W5L(newMaxTicks, wsInTicks);
                    }
                    if (this.animate && window.requestAnimationFrame) {
                        this.animate.go({oldCandleWidth: this.layout.candleWidth, newCandleWidth: newCandleWidth,}
                        );
                    }
                    else {
                        this.setCandleWidth(newCandleWidth);
                        this.chart.scroll = newScroll;
                    }
                }
                if (this.runAppend("zoomIn", arguments))return;
                this.draw();
                this.changeOccurred("layout");
            }
            ;
            STXChart.prototype.translateIf = function (english) {
                if (this.translationCallback)return this.translationCallback(english);
                return english;
            }
            ;
            STXChart.prototype.setTimeZone = function (dataZone, displayZone) {
                if (typeof timezoneJS == R52) {
                    this.timeZoneOffset = t0l.G52;
                    return;
                }
                var now = new Date(), myTimeZoneOffset = now.getTimezoneOffset(), dataTimeZoneOffset = myTimeZoneOffset, displayTimeZoneOffset = myTimeZoneOffset;
                if (dataZone)this.dataZone = dataZone;
                if (this.dataZone)dataTimeZoneOffset = new timezoneJS.Date(now, this.dataZone).getTimezoneOffset();
                if (displayZone)this.displayZone = displayZone;
                if (this.displayZone)displayTimeZoneOffset = new timezoneJS.Date(now, this.displayZone).getTimezoneOffset();
                this.timeZoneOffset = t0l.a5L((dataTimeZoneOffset - myTimeZoneOffset), (displayTimeZoneOffset - myTimeZoneOffset));
                for (var chartName in this.charts) {
                    var chart = this.charts[chartName];
                    if (chart.masterData && !STXChart.isDailyInterval(this.layout.interval))this.setDisplayDates(chart.masterData);
                }
                this.createDataSet();
            }
            ;
            STXChart.prototype.setLocale = function (locale) {
                var L2n = "percent", I8y = "short", S8y = "2-digit", q32 = "meri", w5y = "nu";
                if (typeof Intl == R52)return;
                if (t0l.P5L(this.locale, locale)) {
                    this.locale = locale;
                }
                else {
                    return;
                }
                this.internationalizer = {}
                ;
                this.internationalizer.hourMinute = new Intl.DateTimeFormat(this.locale, {
                        hour: H7y,
                        minute: H7y,
                        hour12: P0n
                    }
                );
                this.internationalizer.hourMinuteSecond = new Intl.DateTimeFormat(this.locale, {
                        hour: H7y,
                        minute: (w5y + v5y + E9y + K3y + q1y + S9y),
                        second: (w5y + q32 + S9y),
                        hour12: P0n
                    }
                );
                this.internationalizer.mdhm = new Intl.DateTimeFormat(this.locale, {
                        year: S8y,
                        month: S8y,
                        day: S8y,
                        hour: S8y,
                        minute: S8y
                    }
                );
                this.internationalizer.monthDay = new Intl.DateTimeFormat(this.locale, {month: H7y, day: H7y}
                );
                this.internationalizer.yearMonthDay = new Intl.DateTimeFormat(this.locale, {
                        year: H7y,
                        month: H7y,
                        day: H7y
                    }
                );
                this.internationalizer.month = new Intl.DateTimeFormat(this.locale, {month: I8y}
                );
                this.internationalizer.numbers = new Intl.NumberFormat(this.locale);
                this.internationalizer.priceFormatters = [];
                this.internationalizer.priceFormatters[t0l.G52] = new Intl.NumberFormat(this.locale, {
                        maximumFractionDigits: t0l.G52,
                        minimumFractionDigits: t0l.G52
                    }
                );
                this.internationalizer.priceFormatters[t0l.T52] = new Intl.NumberFormat(this.locale, {
                        maximumFractionDigits: t0l.T52,
                        minimumFractionDigits: t0l.T52
                    }
                );
                this.internationalizer.priceFormatters[t0l.l52] = new Intl.NumberFormat(this.locale, {
                        maximumFractionDigits: t0l.l52,
                        minimumFractionDigits: t0l.l52
                    }
                );
                this.internationalizer.priceFormatters[t0l.z32] = new Intl.NumberFormat(this.locale, {
                        maximumFractionDigits: t0l.z32,
                        minimumFractionDigits: t0l.z32
                    }
                );
                this.internationalizer.priceFormatters[t0l.a52] = new Intl.NumberFormat(this.locale, {
                        maximumFractionDigits: t0l.a52,
                        minimumFractionDigits: t0l.a52
                    }
                );
                this.internationalizer.priceFormatters[t0l.H52] = new Intl.NumberFormat(this.locale, {
                        maximumFractionDigits: t0l.H52,
                        minimumFractionDigits: t0l.H52
                    }
                );
                this.internationalizer.percent = new Intl.NumberFormat(this.locale, {
                        style: L2n,
                        minimumFractionDigits: t0l.l52,
                        maximumFractionDigits: t0l.l52
                    }
                );
                this.internationalizer.percent0 = new Intl.NumberFormat(this.locale, {
                        style: L2n,
                        minimumFractionDigits: t0l.G52,
                        maximumFractionDigits: t0l.G52
                    }
                );
                this.internationalizer.percent1 = new Intl.NumberFormat(this.locale, {
                        style: L2n,
                        minimumFractionDigits: t0l.T52,
                        maximumFractionDigits: t0l.T52
                    }
                );
                this.internationalizer.percent2 = new Intl.NumberFormat(this.locale, {
                        style: L2n,
                        minimumFractionDigits: t0l.l52,
                        maximumFractionDigits: t0l.l52
                    }
                );
                this.internationalizer.percent3 = new Intl.NumberFormat(this.locale, {
                        style: L2n,
                        minimumFractionDigits: t0l.z32,
                        maximumFractionDigits: t0l.z32
                    }
                );
                this.internationalizer.percent4 = new Intl.NumberFormat(this.locale, {
                        style: L2n,
                        minimumFractionDigits: t0l.a52,
                        maximumFractionDigits: t0l.a52
                    }
                );
                STX.createMonthArrays(this, this.internationalizer.month, this.locale);
            }
            ;
            STXChart.prototype.importLayout = function (config, params) {
                var J0y = "pdates", i9y = "ata", V2n = "Fe", J6y = "thout", R0y = "' ", i0y = "ou", H0n = "tLay", K9y = "mp", U7y = " '", p52 = "oug", l4y = "hr", r0n = "ymbo", D9n = "oadi", o52 = "NG", W4y = "RNI";
                if (typeof params !== "object") {
                    params = {managePeriodicity: arguments[1], preserveTicksAndCandleWidth: arguments[2]}
                    ;
                }
                var interval = this.layout.interval, periodicity = this.layout.periodicity, timeUnit = this.layout.timeUnit, candleWidth = this.layout.candleWidth, serializedDrawings = this.serializeDrawings();
                this.abortDrawings();
                this.currentlyImporting = true;
                this.overlays = {}
                ;
                var view = STX.clone(config);
                for (var s in this.layout.studies) {
                    var sd = this.layout.studies[s];
                    STX.Studies.removeStudy(this, sd);
                }
                if (view) {
                    var priorPanels = STX.shallowClone(this.panels);
                    this.panels = {}
                    ;
                    STX.dataBindSafeAssignment(this.layout, STX.clone(view));
                    if (params.preserveTicksAndCandleWidth) {
                        this.layout.candleWidth = candleWidth;
                    }
                    else {
                        if (!this.layout.candleWidth)this.setCandleWidth(8, this.chart);
                    }
                    if (t0l.t5L(this.layout.candleWidth, this.minimumCandleWidth))this.layout.candleWidth = this.minimumCandleWidth;
                    var panels = view.panels;
                    this.layout.panels = {}
                    ;
                    for (var p in panels) {
                        var panel = panels[p];
                        this.stackPanel(panel.display, p, panel.percent, panel.chartName);
                    }
                    if (STX.isEmpty(panels)) {
                        this.stackPanel("chart", (S9y + Y1y + T0n), 1, "chart");
                    }
                    for (var panelName in priorPanels) {
                        var oldPanel = priorPanels[panelName], newPanel = this.panels[panelName];
                        if (newPanel) {
                            this.container.removeChild(newPanel.holder);
                            this.container.removeChild(oldPanel.handle);
                            var copyFields = {"holder": true, "subholder": true, "display": true}
                                ;
                            for (var f in copyFields) {
                                newPanel[f] = oldPanel[f];
                            }
                            this.configurePanelControls(newPanel);
                            if (t0l.R5L(oldPanel.chart.panel, oldPanel))oldPanel.chart.panel = newPanel;
                        }
                        else {
                            this.privateDeletePanel(oldPanel);
                        }
                    }
                    this.adjustPanelPositions();
                    this.storePanels();
                    var studies = STX.clone(this.layout.studies);
                    delete  this.layout.studies;
                    for (var ss in studies) {
                        var study = studies[ss];
                        STX.Studies.addStudy(this, study.type, study.inputs, study.outputs, study.parameters, study.panel);
                    }
                }
                if (typeof (this.layout.chartType) == "undefined")this.layout.chartType = "line";
                this.adjustPanelPositions();
                this.layout.interval = interval;
                this.layout.periodicity = periodicity;
                this.layout.timeUnit = timeUnit;
                if (view && params.managePeriodicity) {
                    interval = view.interval;
                    periodicity = view.periodicity;
                    timeUnit = view.timeUnit;
                    if (isNaN(periodicity))periodicity = 1;
                    if (!interval)interval = "day";
                    if (t0l.y5L(interval, this.layout.interval) || t0l.r5L(periodicity, this.layout.periodicity)) {
                        this.setPeriodicityV2(periodicity, interval);
                    }
                    else {
                        this.createDataSet();
                    }
                }
                else {
                    this.createDataSet();
                }
                if (config.symbols) {
                    if (!this.quoteDriver || !this.quoteDriver.quoteFeed) {
                        console.log((k6y + E9n + W4y + o52 + p9n + t0l.n5y + D9n + O5y + a0y + B9y + a0y + D3y + r0n + t0l.n5y + a0y + t0l.r6y + l4y + p52 + N1y + U7y + q1y + K9y + d9y + H0n + i0y + t0l.r6y + R0y + W4n + q1y + J6y + a0y + B9y + a0y + w32 + t0l.O6y + Q5y + t0l.r6y + E9y + V2n + E9y + n9y + a0y + v5y + B9y + t0l.O2n + a0y + h9y + K3y + B5y + t0l.P1y + a0y + n9y + i9y + a0y + t0l.O6y + J0y));
                    }
                    this.newChart(config.symbols[0].symbol, null, this.chart, params.symbolLoaded, {
                            periodicity: periodicity,
                            span: {multiplier: config.symbols[0].interval, base: config.symbols[0].timeUnit}
                        }
                    );
                    for (var smbl, i = 1; t0l.O5L(i, config.symbols.length); ++i) {
                        smbl = config.symbols[i];
                        this.addSeries(smbl.symbol, smbl.parameters);
                    }
                }
                this.reconstructDrawings(serializedDrawings);
                this.draw();
                this.currentlyImporting = false;
                this.updateListeners("layout");
            }
            ;
            STXChart.prototype.exportLayout = function (withSymbols) {
                var I1y = "include-parameters", r9n = "panels", T8y = "studies", obj = {}
                    ;
                for (var field in this.layout) {
                    if (t0l.I5L(field, T8y) && t0l.d5L(field, r9n)) {
                        obj[field] = STX.clone(this.layout[field]);
                    }
                    else if (t0l.V5L(field, T8y)) {
                        obj.studies = {}
                        ;
                    }
                    else if (t0l.s5L(field, r9n)) {
                        obj.panels = {}
                        ;
                    }
                }
                for (var panelName in this.panels) {
                    var panel = obj.panels[panelName] = {}
                        , p = this.panels[panelName];
                    panel.percent = p.percent;
                    panel.display = p.display;
                    panel.chartName = p.chart.name;
                }
                for (var studyName in this.layout.studies) {
                    var study = obj.studies[studyName] = {}
                        , s = this.layout.studies[studyName];
                    study.type = s.type;
                    study.inputs = STX.clone(s.inputs);
                    study.outputs = STX.clone(s.outputs);
                    study.panel = s.panel;
                    study.parameters = STX.clone(s.parameters);
                }
                if (withSymbols) {
                    obj.symbols = this.getSymbols(I1y);
                }
                return obj;
            }
            ;
            STXChart.prototype.doCleanupGaps = function (quotes, chart) {
                if (!this.cleanupGaps)return quotes;
                if (t0l.g5L(this.layout.interval, "tick"))return quotes;
                if (quotes && !quotes.length)return quotes;
                if (!chart)chart = this.chart;
                var interval = this.layout.interval;
                if (t0l.j5L(interval, "month") || t0l.X5L(interval, "week")) {
                    if (this.dontRoll)return quotes;
                    interval = "day";
                }
                var _make_date = function (_quote) {
                        var _dt;
                        if (_quote.DT) {
                            _dt = _quote.DT;
                        }
                        else {
                            _dt = STX.strToDateTime(_quote.Date);
                        }
                        return _dt;
                    }
                    , new_quotes = [], currentQuote = quotes[0];
                new_quotes.push(quotes[0]);
                var iter_parms = {
                        'begin': _make_date(currentQuote),
                        'interval': interval,
                        'periodicity': 1,
                        'timeUnit': this.layout.timeUnit,
                        'inZone': this.dataZone,
                        'outZone': this.dataZone
                    }
                    , iter = chart.market.newIterator(iter_parms);
                for (var i = 1; t0l.z5L(i, quotes.length); i++) {
                    var nextQuote = quotes[i], mdt = iter.next(), qdt = _make_date(nextQuote);
                    while (t0l.A1L(mdt, qdt)) {
                        new_quotes.push({
                                DT: mdt,
                                Open: currentQuote.Close,
                                High: currentQuote.Close,
                                Low: currentQuote.Close,
                                Close: currentQuote.Close,
                                Volume: 0,
                                Adj_Close: currentQuote.Adj_Close
                            }
                        );
                        mdt = iter.next();
                    }
                    new_quotes.push(nextQuote);
                    currentQuote = nextQuote;
                }
                return new_quotes;
            }
            ;
            STXChart.Driver = function (stx, quoteFeed, behavior) {
                this.tagalongs = {}
                ;
                this.stx = stx;
                this.quoteFeed = quoteFeed;
                this.behavior = behavior;
                this.loadingNewChart = P0n;
                this.intervalTimer = t0l.a1y;
                this.updatingChart = P0n;
                this.updateChartLoop();
            }
            ;
            STXChart.Driver.prototype.die = function () {
                if (this.intervalTimer)window.clearInterval(this.intervalTimer);
            }
            ;
            STXChart.Driver.prototype.updateSubscriptions = function () {
                if (this.quoteFeed.checkSubscriptions)this.quoteFeed.checkSubscriptions(this.stx);
            }
            ;
            STXChart.Driver.prototype.attachTagAlongQuoteFeed = function (feed) {
                if (!this.tagalongs[feed.label]) {
                    this.tagalongs[feed.label] = {
                        label: feed.label, quoteFeed: feed.quoteFeed, behavior: feed.behavior ? feed.behavior : {}
                        , count: t0l.G52
                    }
                    ;
                }
                this.tagalongs[feed.label].count++;
            }
            ;
            STXChart.Driver.prototype.detachTagAlongQuoteFeed = function (feed) {
                var tagalong = this.tagalongs[feed.label];
                tagalong.count--;
                if (!tagalong.count)this.tagalongs[feed.label] = t0l.a1y;
            }
            ;
            STXChart.Driver.prototype.loadDependents = function (params) {
                var field, syms = {}
                    , stx = params.stx, series = stx.chart.series;

                function getStartDate(symbol) {
                    for (var c = t0l.G1L(stx.masterData.length, 1); t0l.H1L(c, 0); c--) {
                        if (stx.masterData[c] && typeof stx.masterData[c][symbol] != "undefined") {
                            return STX.strToDateTime(stx.masterData[c].Date);
                        }
                    }
                    return params.startDate;
                }

                for (field in series) {
                    if (!series[field].parameters.data || !series[field].parameters.data.useDefaultQuoteFeed)continue;
                    syms[field] = true;
                }
                for (var p in stx.panels) {
                    if (stx.panels[p].studyQuotes) {
                        for (var sq in stx.panels[p].studyQuotes)syms[sq] = true;
                    }
                }
                var arr = [];
                for (field in syms) {
                    var seriesParam = STX.shallowClone(params.originalState);
                    seriesParam.symbol = field;
                    if (series[field] && series[field].parameters.symbolObject)seriesParam.symbolObject = series[field].parameters.symbolObject;
                    if (seriesParam.update) {
                        seriesParam.startDate = getStartDate(field);
                    }
                    else {
                        if (!seriesParam.startDate)seriesParam.startDate = stx.masterData[0].DT;
                        if (!seriesParam.endDate)seriesParam.endDate = stx.masterData[t0l.h1L(stx.masterData.length, 1)].DT;
                    }
                    arr.push(seriesParam);
                }
                if (!arr.length) {
                    stx.createDataSet();
                    stx.draw();
                    return;
                }
                this.quoteFeed.multiFetch(arr, function (results) {
                        for (var i = 0; t0l.x1L(i, results.length); i++) {
                            var result = results[i];
                            if (!result.dataCallback.error) {
                                var field = null;
                                if (stx.chart.series[result.params.symbol]) {
                                    field = stx.chart.series[result.params.symbol].parameters.field;
                                }
                                STX.addMemberToMasterdata(stx, result.params.symbol, result.dataCallback.quotes, null, null, field);
                            }
                        }
                        stx.createDataSet();
                        stx.draw();
                    }
                );
            }
            ;
            STXChart.Driver.prototype.executeTagAlongs = function (params) {
                var count = {count: STX.objLength(this.taglongs)}
                    , self = this;

                function closure(qparams, tagalong, count) {
                    return function (dataCallback) {
                        count.count--;
                        if (!dataCallback.error) {
                            var fields = qparams.fields;
                            if (!fields)fields = null;
                            STX.addMemberToMasterdata(self.stx, tagalong.label, dataCallback.quotes, fields);
                        }
                        if (count.count == -1)self.render();
                    }
                        ;
                }

                for (var label in this.tagalongs) {
                    var tagalong = this.tagalongs[label], qparams = STX.shallowClone(tagalong.behavior);
                    STX.extend(qparams, params, true);
                    tagalong.quoteFeed.fetch(qparams, closure(qparams, tagalong, count));
                }
            }
            ;
            STXChart.Driver.prototype.render = function () {
                this.stx.createDataSet();
                this.stx.draw();
            }
            ;
            STXChart.Driver.prototype.updateChart = function () {
                if (this.updatingChart)return;
                if (this.loadingNewChart)return;
                var howManyToGet = STX.objLength(this.stx.charts), howManyReturned = 0, interval = this.stx.layout.interval, timeUnit = this.stx.layout.timeUnit;

                function closure(self, params, symbol) {
                    if (self.behavior.prefetchAction)self.behavior.prefetchAction("updateChart");
                    return function (dataCallback) {
                        howManyReturned++;
                        if (t0l.U1L(symbol, params.chart.symbol) && t0l.D1L(interval, self.stx.layout.interval) && t0l.B1L(timeUnit, self.stx.layout.timeUnit)) {
                            if (!dataCallback.error) {
                                var lastBarAdded = false;
                                if (!params.missingBarsCreated) {
                                    if (params.chart.masterData && params.chart.masterData.length && dataCallback.quotes && t0l.m1L(dataCallback.quotes.length, 0)) {
                                        var lastRecord = params.chart.masterData[t0l.n1L(params.chart.masterData.length, 1)];
                                        if ((dataCallback.quotes[0].DT && t0l.p1L(lastRecord.DT, dataCallback.quotes[0].DT)) || (dataCallback.quotes[0].Date && t0l.v1L(lastRecord.Date, dataCallback.quotes[0].Date))) {
                                            dataCallback.quotes.unshift(lastRecord);
                                            lastBarAdded = true;
                                        }
                                    }
                                    dataCallback.quotes = self.stx.doCleanupGaps(dataCallback.quotes, params.chart);
                                    if (lastBarAdded)dataCallback.quotes.shift();
                                }
                                self.stx.appendMasterData(dataCallback.quotes, params.chart, {noCreateDataSet: true}
                                );
                                params.chart.attribution = dataCallback.attribution;
                            }
                            else {
                                self.quoteFeed.announceError(params.originalState, dataCallback);
                            }
                        }
                        else {
                            return;
                        }
                        if (t0l.f1L(howManyReturned, howManyToGet)) {
                            self.updatingChart = false;
                        }
                        self.executeTagAlongs(params);
                        if (self.behavior.callback) {
                            self.behavior.callback(params);
                        }
                        self.loadDependents(params);
                    }
                        ;
                }

                for (var chartName in this.stx.charts) {
                    var chart = this.stx.charts[chartName];
                    if (!chart.symbol)continue;
                    var params = this.makeParams(chart.symbol, chart.symbolObject, chart);
                    if (chart.masterData && chart.masterData.length)params.startDate = chart.masterData[t0l.i1L(chart.masterData.length, 1)].DT;
                    params.update = true;
                    params.originalState = STX.shallowClone(params);
                    this.updatingChart = true;
                    var closureCB = closure(this, params, chart.symbol);
                    if (this.stx.isEquationChart(params.symbol)) {
                        STX.fetchEquationChart(params, closureCB);
                    }
                    else {
                        this.quoteFeed.fetch(params, closureCB);
                    }
                }
            }
            ;
            STXChart.Driver.prototype.updateChartLoop = function () {
                if (this.behavior.noUpdate)return;
                function closure(self) {
                    return function () {
                        if (self.behavior.noUpdate)return;
                        self.updateChart();
                    }
                        ;
                }

                if (this.behavior.refreshInterval)this.intervalTimer = window.setInterval(closure(this), t0l.E1L(this.behavior.refreshInterval, o0n));
            }
            ;
            STXChart.Driver.prototype.resetRefreshInterval = function (newInterval) {
                if (this.intervalTimer)window.clearInterval(this.intervalTimer);
                this.behavior.refreshInterval = newInterval;
                this.updateChartLoop();
            }
            ;
            STXChart.Driver.prototype.loadAll = function (chart, cb) {
                var self = this, count = t0l.G52;

                function closure() {
                    return function (response) {
                        var G0n = "uoteFeed", X9y = "ly", d6y = "le", W3y = "lable", j0y = "reAva", S5y = ", ";
                        if (response)cb(response); else if (!chart.moreAvailable) {
                            cb(t0l.a1y);
                        }
                        else if (t0l.q1L(count++, v7n)) {
                            cb((E9y + K3y + j52 + S5y + v5y + Q5y + j0y + q1y + W3y + a0y + P5y + Q5y + t0l.r6y + a0y + q1y + v5y + t0l.V3y + d6y + v5y + k2n + E9y + n9y + a0y + S9y + Q5y + K3y + K3y + E9y + S9y + t0l.r6y + X9y + a0y + q1y + P5y + a0y + w32 + G0n));
                        }
                        else {
                            self.checkLoadMore(chart, x1y, x1y, closure());
                        }
                    }
                        ;
                }

                this.checkLoadMore(chart, x1y, x1y, closure());
            }
            ;
            STXChart.Driver.prototype.checkLoadMore = function (chart, forceLoadMore, fetchMaximumBars, cb) {
                if (!chart.moreAvailable) {
                    if (cb)cb();
                    return;
                }
                var interval = this.stx.layout.interval, timeUnit = this.stx.layout.timeUnit;

                function closure(self, params) {
                    if (self.behavior.prefetchAction)self.behavior.prefetchAction("checkLoadMore");
                    return function (dataCallback) {
                        if (t0l.Z1L(params.symbol, params.chart.symbol) && t0l.l8L(interval, self.stx.layout.interval) && t0l.K8L(timeUnit, self.stx.layout.timeUnit)) {
                            if (!params.loadMore)params.chart.loadingMore = false;
                            if (!dataCallback.error) {
                                if (!params.missingBarsCreated) {
                                    dataCallback.quotes.push(params.chart.masterData[0]);
                                    dataCallback.quotes = self.stx.doCleanupGaps(dataCallback.quotes, params.chart);
                                    dataCallback.quotes.pop();
                                }
                                params.chart.moreAvailable = dataCallback.moreAvailable;
                                var fullMasterData = params.loadMoreReplace ? dataCallback.quotes : dataCallback.quotes.concat(params.chart.masterData);
                                self.stx.setMasterData(fullMasterData, params.chart);
                                self.stx.createDataSet();
                                self.stx.draw();
                                params.startDate = params.chart.masterData[0].DT;
                                self.executeTagAlongs(params);
                                if (self.behavior.callback) {
                                    self.behavior.callback(params);
                                }
                                self.loadDependents(params);
                            }
                            else {
                                self.quoteFeed.announceError(params.originalState, dataCallback);
                            }
                            params.chart.loadingMore = false;
                            if (cb)cb(null);
                        }
                        else {
                            return;
                        }
                    }
                        ;
                }

                var fetching = chart.loadingMore;
                if (!this.behavior.noLoadMore) {
                    if (!this.stx.maxDataSetSize || t0l.k8L(chart.dataSet.length, this.stx.maxDataSetSize)) {
                        if ((t0l.L8L(chart.dataSet.length, 0) && t0l.e8L(chart.scroll, chart.dataSet.length)) || forceLoadMore) {
                            if (!chart.loadingMore) {
                                chart.initialScroll = chart.scroll;
                                chart.loadingMore = true;
                                var params = this.makeParams(chart.symbol, chart.symbolObject, chart);
                                params.endDate = chart.masterData[0].DT;
                                params.originalState = STX.shallowClone(params);
                                if (this.stx.fetchMaximumBars[this.stx.layout.aggregationType])fetchMaximumBars = true;
                                if (fetchMaximumBars) {
                                    params.fetchMaximumBars = true;
                                    params.ticks = Math.max(20000, params.ticks);
                                }
                                var closureCB = closure(this, params);
                                if (this.stx.isEquationChart(params.symbol)) {
                                    STX.fetchEquationChart(params, closureCB);
                                }
                                else {
                                    this.quoteFeed.fetch(params, closureCB);
                                }
                                fetching = true;
                            }
                        }
                    }
                }
                if (chart.loadingMore) {
                    chart.initialScroll = chart.scroll;
                }
                if (!fetching && cb)cb(null);
            }
            ;
            STXChart.Driver.prototype.barsToFetch = function (params) {
                if (params.isSeries)return params.stx.masterData.length;
                var interval = this.stx.layout.interval, p = params.stx.layout.periodicity;
                if ((t0l.J8L(interval, "month") || t0l.C8L(interval, "week")) && !this.stx.dontRoll) {
                    p *= (t0l.Q8L(interval, "week")) ? 7 : 30;
                }
                var bars = t0l.F8L(params.stx.chart.maxTicks, p);
                return bars;
            }
            ;
            STXChart.Driver.prototype.makeParams = function (symbol, symbolObject, chart) {
                var q9n = "delayed", interval = this.stx.layout.interval, ticks = this.barsToFetch({stx: this.stx}
                );
                if ((t0l.Y8L(interval, O52) || t0l.N8L(interval, V2y)) && !this.stx.dontRoll) {
                    interval = v82;
                }
                var params = STX.shallowClone(this.behavior);
                STX.extend(params, {
                        stx: this.stx,
                        symbol: symbol,
                        symbolObject: symbolObject,
                        chart: chart,
                        interval: interval,
                        extended: this.stx.layout.extended,
                        period: t0l.T52,
                        feed: q9n,
                        ticks: ticks
                    }
                    , x1y);
                if (!params.symbolObject)params.symbolObject = {symbol: symbol}
                ;
                if (!isNaN(params.interval)) {
                    params.period = params.interval;
                    params.interval = this.stx.layout.timeUnit;
                    if (!params.interval)params.interval = w1y;
                }
                if (params.pts)params.ticks = Math.max(params.ticks, o0n);
                return params;
            }
            ;
            STXChart.Driver.prototype.newChart = function (params, cb) {
                var stx = this.stx, symbol = params.symbol, interval = stx.layout.interval, timeUnit = stx.layout.timeUnit, chart = params.chart;
                chart.moreAvailable = false;
                chart.attribution = null;
                var qparams = this.makeParams(symbol, params.symbolObject, chart);
                STX.extend(qparams, params, true);
                if (stx.fetchMaximumBars[stx.layout.aggregationType]) {
                    qparams.ticks = Math.max(20000, qparams.ticks);
                    qparams.fetchMaximumBars = true;
                }
                function closure(self, qparams) {
                    if (self.behavior.prefetchAction)self.behavior.prefetchAction("newChart");
                    return function (dataCallback) {
                        if (t0l.w8L(symbol, qparams.chart.symbol) && t0l.o8L(interval, stx.layout.interval) && t0l.M8L(timeUnit, stx.layout.timeUnit)) {
                            if (!dataCallback.error && t0l.u8L(dataCallback.error, 0) && dataCallback.quotes && t0l.S8L(dataCallback.quotes.length, 0)) {
                                if (!qparams.missingBarsCreated)dataCallback.quotes = stx.doCleanupGaps(dataCallback.quotes, params.chart);
                                stx.setMasterData(dataCallback.quotes, qparams.chart);
                                qparams.chart.moreAvailable = dataCallback.moreAvailable;
                                qparams.chart.attribution = dataCallback.attribution;
                                stx.createDataSet();
                                if (params.initializeChart)stx.initializeChart();
                                stx.home();
                            }
                            else {
                                self.quoteFeed.announceError(qparams.originalState, dataCallback);
                            }
                        }
                        else {
                            if (cb)cb("orphaned");
                            return;
                        }
                        self.loadingNewChart = false;
                        if (cb) {
                            cb(dataCallback.error);
                        }
                        if (qparams.chart.masterData && qparams.chart.masterData.length)qparams.startDate = qparams.chart.masterData[0].DT;
                        self.executeTagAlongs(qparams);
                        if (self.behavior.callback) {
                            self.behavior.callback(qparams);
                        }
                        self.loadDependents(qparams);
                        self.resetRefreshInterval(self.behavior.refreshInterval);
                    }
                        ;
                }

                this.loadingNewChart = true;
                this.updatingChart = false;
                qparams.originalState = STX.shallowClone(qparams);
                var closureCB = closure(this, qparams);
                if (this.stx.isEquationChart(qparams.symbol)) {
                    STX.fetchEquationChart(qparams, closureCB);
                }
                else {
                    this.quoteFeed.fetch(qparams, closureCB);
                }
            }
            ;
            STXChart.prototype.attachQuoteFeed = function (quoteFeed, behavior) {
                if (!behavior)behavior = {}
                ;
                if (this.quoteDriver) {
                    this.quoteDriver.die();
                }
                this.quoteDriver = new STXChart.Driver(this, quoteFeed, behavior);
            }
            ;
            STXChart.prototype.attachTagAlongQuoteFeed = function (feed) {
                var m4n = "ning", x82 = "ssi", N0n = "eF", b9y = "uot", B52 = "ngQ", K6y = "hTa", o2n = "empt", V52 = "At";
                if (!feed.label) {
                    console.log((V52 + t0l.r6y + o2n + a0y + t0l.r6y + Q5y + a0y + B9y + t0l.r6y + Y4y + S9y + K6y + R8y + E9n + A8y + B52 + b9y + N0n + E9y + r2y + a0y + W4n + q1y + t0l.r6y + A2y + t0l.O6y + t0l.r6y + a0y + B9y + x82 + R8y + m4n + a0y + B9y + a0y + t0l.n5y + B9y + h9y + E9y + t0l.n5y));
                    return;
                }
                this.quoteDriver.attachTagAlongQuoteFeed(feed);
            }
            ;
            STXChart.prototype.detachTagAlongQuoteFeed = function (feed) {
                this.quoteDriver.detachTagAlongQuoteFeed(feed);
            }
            ;
            STX.Comparison = function () {
            }
            ;
            V(P0n);
            STX.Comparison.priceToPercent = function (stx, chart, price) {
                return t0l.b8L(Math.round(((price - STX.Comparison.baseline) / STX.Comparison.baseline * K2n) * O0n), O0n);
            }
            ;
            STX.Comparison.percentToPrice = function (stx, chart, percent) {
                return t0l.c8L(STX.Comparison.baseline, (t0l.T52 + (percent / K2n)));
            }
            ;
            STX.Comparison.stopSort = function (lhs, rhs) {
                return t0l.T72(lhs, rhs);
            }
            ;
            STX.Comparison.createComparisonSegmentInner = function (stx, chart) {
                var fields = [], field;
                for (field in chart.series) {
                    if (chart.series[field].parameters.isComparison) {
                        fields.push(field);
                    }
                }
                var priceFields = ["Close", "Open", "High", "Low", "iqPrevClose"];
                chart.dataSegment = [];
                var firstQuote = null, firstTick = t0l.W72(chart.dataSet.length, chart.scroll), lastTick = firstTick + chart.maxTicks, stopPointer = 0, stops = [], i;
                for (i = 0; t0l.a72(i, stx.drawingObjects.length); i++) {
                    var drawing = stx.drawingObjects[i];
                    if (t0l.P72(drawing.name, "comparison_stop"))if (t0l.t72(drawing.tick, firstTick) && t0l.R72(drawing.tick, lastTick))stops.push(drawing.tick);
                }
                stops.sort(STX.Comparison.stopSort);
                var transformsToProcess = chart.maxTicks + 3;
                for (i = 0; t0l.y72(i, transformsToProcess); i++) {
                    if (t0l.r72(i, transformsToProcess))i = -1;
                    position = firstTick + i;
                    if (t0l.O72(position, chart.dataSet.length) && t0l.I72(position, 0)) {
                        var quote = chart.dataSet[position];
                        if (!firstQuote) {
                            firstQuote = STX.clone(quote);
                        }
                        if (!quote.transform)quote.transform = {
                            "cache": {}
                            , "DT": quote.DT, "Date": quote.Date
                        }
                        ;
                        STX.Comparison.baseline = firstQuote.Close;
                        var j;
                        for (j = 0; t0l.d72(j, priceFields.length); j++) {
                            field = priceFields[j];
                            if (quote[field] || t0l.V72(quote[field], 0))quote.transform[field] = t0l.s72(Math.round(((quote[field] - STX.Comparison.baseline) / STX.Comparison.baseline * 100) * 10000), 10000);
                        }
                        var s = stx.layout.studies;
                        if (s) {
                            for (var n in s) {
                                var sd = s[n];
                                if (t0l.g72(stx.panels[sd.panel].name, sd.chart.name))continue;
                                for (field in sd.outputMap) {
                                    if (quote[field] || t0l.j72(quote[field], 0))quote.transform[field] = t0l.X72(Math.round(((quote[field] - STX.Comparison.baseline) / STX.Comparison.baseline * 100) * 10000), 10000);
                                }
                                if (sd.referenceOutput && (quote[sd.referenceOutput + " " + sd.name] || t0l.z72(quote[sd.referenceOutput + " " + sd.name], 0)))quote.transform[sd.referenceOutput + " " + sd.name] = t0l.A92(Math.round(((quote[sd.referenceOutput + " " + sd.name] - STX.Comparison.baseline) / STX.Comparison.baseline * 100) * 10000), 10000);
                            }
                        }
                        for (j in stx.plugins) {
                            var plugin = stx.plugins[j];
                            if (!plugin.transformOutputs)continue;
                            for (field in plugin.transformOutputs) {
                                if (quote[field] || t0l.G92(quote[field], 0))quote.transform[field] = t0l.H92(Math.round(((quote[field] - STX.Comparison.baseline) / STX.Comparison.baseline * 100) * 10000), 10000);
                            }
                        }
                        var createAStop = false;
                        if (stops && t0l.h92(stopPointer, stops.length)) {
                            if (t0l.x92(position, stops[stopPointer])) {
                                createAStop = true;
                                stopPointer++;
                            }
                        }
                        var mouseStop = null;
                        if (stx.activeDrawing && t0l.U92(stx.activeDrawing.name, "comparison_stop")) {
                            mouseStop = stx.activeDrawing.tick;
                        }
                        var current;
                        if (createAStop || t0l.D92(position, mouseStop)) {
                            for (j = 0; t0l.B92(j, fields.length); j++) {
                                field = fields[j];
                                current = quote[field];
                                firstQuote[field] = t0l.m92(current, (1 + (quote.transform.Close / 100)));
                            }
                        }
                        for (j = 0; t0l.n92(j, fields.length); j++) {
                            field = fields[j];
                            current = quote[field];
                            if (current || t0l.p92(current, 0)) {
                                var baseline = firstQuote[field];
                                if (!baseline && t0l.v92(baseline, 0)) {
                                    firstQuote[field] = baseline = t0l.f92(current, (1 + (quote.transform.Close / 100)));
                                }
                                quote.transform[field] = t0l.i92(Math.round(((current - baseline) / baseline * 100) * 10000), 10000);
                            }
                        }
                        chart.dataSegment.push(quote);
                    }
                    else if (t0l.E92(position, 0)) {
                        chart.dataSegment.push(null);
                    }
                    if (t0l.q92(i, 0))break;
                }
                stx.clearPixelCache();
                return true;
            }
            ;
            STX.Comparison.createComparisonSegment = function () {
                for (var chartName in this.charts) {
                    var chart = this.charts[chartName];
                    if (chart.isComparison)STX.Comparison.createComparisonSegmentInner(this, chart);
                }
            }
            ;
            STX.Comparison.priceFormat = function (stx, panel, price) {
                var Q9n = 0.001;
                if (t0l.Z92(price, t0l.a1y) || typeof price == R52)return R6y;
                var priceTick = panel.yAxis.priceTick;
                if (stx.internationalizer) {
                    if (t0l.l02(priceTick, t0l.T52))price = stx.internationalizer.percent0.format(t0l.K02(price, K2n)); else if (t0l.k02(priceTick, t2y))price = stx.internationalizer.percent1.format(t0l.L02(price, K2n)); else if (t0l.e02(priceTick, m52))price = stx.internationalizer.percent2.format(t0l.J02(price, K2n)); else if (t0l.C02(priceTick, Q9n))price = stx.internationalizer.percent3.format(t0l.Q02(price, K2n)); else price = stx.internationalizer.percent4.format(price);
                }
                else {
                    if (t0l.F02(priceTick, t0l.T52))price = price.toFixed(t0l.G52) + D1y; else if (t0l.Y02(priceTick, t2y))price = price.toFixed(t0l.T52) + D1y; else if (t0l.N02(priceTick, m52))price = price.toFixed(t0l.l52) + D1y; else if (t0l.w02(priceTick, Q9n))price = price.toFixed(t0l.z32) + D1y; else price = price.toFixed(t0l.a52) + D1y;
                }
                if (t0l.o02(parseFloat(price), t0l.G52) && t0l.M02(price.charAt(t0l.G52), e3y)) {
                    price = price.substring(t0l.T52);
                }
                return price;
            }
            ;
            STX.Comparison.correlate = function (stx, symbol) {
                if (!STX.Comparison.requestCorrelation || t0l.u02(correlationPeriod, 0))return;
                var correlationPeriod = parseInt($$$(".stxCorrelate .stx-input-field").value, 10), corrPanel = stx.panels[STX.Comparison.correlationPanel + " (" + correlationPeriod + ")"], inputs = {
                        "id": STX.Comparison.correlationPanel + " (" + correlationPeriod + ")",
                        "Period": correlationPeriod,
                        "Compare To": []
                    }
                    , outputs = {}
                    , panelName = null;
                if (corrPanel) {
                    for (var i = 0; t0l.S02(i, stx.layout.studies[corrPanel.name].inputs["Compare To"].length); i++) {
                        inputs["Compare To"].push(stx.layout.studies[corrPanel.name].inputs["Compare To"][i]);
                    }
                    for (var o in stx.layout.studies[corrPanel.name].outputs) {
                        outputs[o] = stx.layout.studies[corrPanel.name].outputs[o];
                    }
                    panelName = corrPanel.name;
                }
                inputs["Compare To"].push(symbol);
                outputs["Result " + symbol] = STX.Comparison.colorSelection;
                STX.Studies.addStudy(stx, "correl", inputs, outputs, null, panelName);
                for (var panel in stx.panels) {
                    if (t0l.b02(stx.panels[panel].name.indexOf(STX.Comparison.correlationPanel), 0)) {
                        var compareArray = stx.layout.studies[stx.panels[panel].name].inputs["Compare To"];
                        for (var ii = 0; t0l.c02(ii, compareArray.length); ii++) {
                            if (t0l.T22(compareArray[ii], symbol)) {
                                stx.layout.studies[stx.panels[panel].name].outputs["Result " + symbol] = STX.Comparison.colorSelection;
                            }
                        }
                    }
                }
            }
            ;
            STX.Comparison.toggleCorrelate = function (stx) {
                var P6y = ".stxCorrelate .stx-checkbox";
                STX.Comparison.requestCorrelation = !STX.Comparison.requestCorrelation;
                var display = $$$(P6y);
                if (display) {
                    STX.unappendClassName(display, (!STX.Comparison.requestCorrelation).toString());
                    STX.appendClassName(display, STX.Comparison.requestCorrelation.toString());
                }
            }
            ;
            STXChart.prototype.setComparison = function (onOff, chart) {
                var K5y = "dataSet", K1y = "string";
                if (!chart)chart = this.chart;
                if (typeof chart == K1y)chart = this.charts[chart];
                if (!chart.isComparison && onOff) {
                    this.setTransform(chart, STX.Comparison.priceToPercent, STX.Comparison.percentToPrice);
                    chart.panel.yAxis.priceFormatter = STX.Comparison.priceFormat;
                    chart.panel.yAxis.whichSet = A52;
                }
                else if (chart.isComparison && !onOff) {
                    this.unsetTransform(chart);
                    chart.panel.yAxis.priceFormatter = t0l.a1y;
                    chart.panel.yAxis.whichSet = K5y;
                }
                chart.isComparison = onOff;
            }
            ;
            STX.Comparison.startPlugin = function () {
                var r5y = "taS", D7y = "D";
                STXChart.prototype.prepend((n7y + B5y + E6y + D7y + B9y + r5y + E9y + R8y + v5y + k9y + t0l.r6y), STX.Comparison.createComparisonSegment);
            }
            ;
            STX.Comparison.removeSeries = function (stx, field) {
            }
            ;
            STX.SearchableWordList = function (list, maxResults, contains) {
                if (!list)return;
                if (!maxResults)maxResults = 50;
                if (!contains)contains = false;
                var container = {"records": [], "words": []}
                    ;
                for (var r = 0; t0l.W22(r, list.length); r++) {
                    var record = list[r];
                    if (!record.name)record.name = record.id;
                    record.index = t0l.a22(container.records.push(record), 1);
                    var descs = record.name.split(" ");
                    if (record.keywords)descs = descs.concat(record.keywords.split(" "));
                    for (var j = 0; t0l.P22(j, descs.length); j++) {
                        var word = descs[j].toUpperCase(), subIdx = "_", subIdx2 = "_";
                        if (t0l.t22(word.charCodeAt(0), 33) && t0l.R22(word.charCodeAt(0), 126))subIdx = word.charAt(0);
                        if (!container.words[subIdx])container.words[subIdx] = [];
                        if (t0l.y22(word.length, 1)) {
                            if (t0l.r22(word.charCodeAt(1), 33) && t0l.O22(word.charCodeAt(1), 126))subIdx2 = word.charAt(1);
                        }
                        else {
                            subIdx2 = " ";
                        }
                        if (!container.words[subIdx][subIdx2])container.words[subIdx][subIdx2] = [];
                        container.words[subIdx][subIdx2].push({index: record.index, word: word}
                        );
                    }
                }
                this.lookup = function (input, category, cb) {
                    var results = [];

                    function sortId(a, b) {
                        if (t0l.I22(a.id, b.id))return 1; else if (t0l.d22(a.id, b.id))return -1;
                        return t0l.V22(a.weight, b.weight) ? 1 : -1;
                    }

                    function sortWeight(a, b) {
                        if (t0l.s22(a.weight, b.weight))return 1; else if (t0l.g22(a.weight, b.weight))return -1;
                        return t0l.j22(a.name, b.name) ? 1 : -1;
                    }

                    function sortDescWeight(a, b) {
                        a.weight = 0;
                        b.weight = 0;
                        for (var j = 0; t0l.X22(j, keys.length); j++) {
                            var KEY = keys[j].toUpperCase(), aIndex = a.name.toUpperCase().indexOf(KEY), bIndex = b.name.toUpperCase().indexOf(KEY);
                            if (aIndex == -1)return 1; else if (bIndex == -1)return -1;
                            a.weight += aIndex;
                            b.weight += bIndex;
                        }
                        if (t0l.z22(a.weight, b.weight))return 1; else if (t0l.A42(a.weight, b.weight))return -1;
                        return t0l.G42(a.name, b.name) ? 1 : -1;
                    }

                    function noDups(res) {
                        var returnArray = [], previousId = "";
                        for (var r = 0; t0l.H42(r, res.length); r++) {
                            if (t0l.h42(previousId, res[r].id))continue;
                            returnArray.push(res[r]);
                            previousId = res[r].id;
                        }
                        return returnArray;
                    }

                    if (input && container) {
                        var foundBitMap = [], keyword = input.toUpperCase(), exacts = [], d, entry;
                        for (d = 0; t0l.x42(d, container.records.length); d++) {
                            entry = container.records[d];
                            if (foundBitMap[entry.index])continue;
                            if (category && t0l.U42(entry.category, category))continue;
                            var name = entry.name.toUpperCase();
                            if (t0l.D42(keyword, "*")) {
                                exacts.push(STX.extend(container.records[entry.index], {weight: 0}
                                ));
                                foundBitMap[entry.index] = true;
                            }
                            else {
                                var i = name.indexOf(keyword);
                                if (i > -1) {
                                    var weight = t0l.B42(name.length, keyword.length);
                                    if (!contains && t0l.m42(i, 0))continue;
                                    (weight ? results : exacts).push(STX.extend(container.records[entry.index], {weight: weight}
                                    ));
                                    foundBitMap[entry.index] = true;
                                }
                            }
                        }
                        var keys = keyword.split(" "), k1 = "_", k2 = "_", myKey = keys[0].toUpperCase(), descResults = [];
                        if (t0l.n42(myKey.charCodeAt(0), 33) && t0l.p42(myKey.charCodeAt(0), 126))k1 = myKey.charAt(0);
                        if (t0l.v42(myKey.length, 1)) {
                            if (t0l.f42(myKey.charCodeAt(1), 33) && t0l.i42(myKey.charCodeAt(1), 126))k2 = myKey.charAt(1);
                        }
                        else {
                            k2 = " ";
                        }
                        if (container.words[k1]) {
                            for (var kk in container.words[k1]) {
                                if (t0l.E42(kk.length, 1))continue;
                                if (t0l.q42(k2, " "))kk = k2;
                                for (d = 0; container.words[k1][kk] && t0l.Z42(d, container.words[k1][kk].length); d++) {
                                    entry = container.words[k1][kk][d];
                                    if (t0l.l62(entry.word.toUpperCase().indexOf(myKey), 0))continue;
                                    if (foundBitMap[entry.index])continue;
                                    if (category && t0l.K62(container.records[entry.index].category, category))continue;
                                    descResults.push(STX.clone(container.records[entry.index]));
                                    foundBitMap[entry.index] = true;
                                }
                                if (t0l.k62(k2, " "))break;
                            }
                        }
                        for (var extraKeys = 1; t0l.L62(extraKeys, keys.length); extraKeys++) {
                            myKey = keys[extraKeys].toUpperCase();
                            for (var res = t0l.e62(descResults.length, 1); t0l.J62(res, 0); res--) {
                                var words = descResults[res].name.split(" ");
                                if (descResults[res].keywords)words = words.concat(descResults[res].keywords.split(" "));
                                var match = false;
                                for (var wd = 0; t0l.C62(wd, words.length); wd++) {
                                    if (t0l.Q62(words[wd].toUpperCase().indexOf(myKey), 0)) {
                                        match = true;
                                        break;
                                    }
                                }
                                if (!match)descResults.splice(res, 1);
                            }
                        }
                        exacts.sort(sortId);
                        exacts = noDups(exacts);
                        results.sort(sortId);
                        results = noDups(results);
                        results.length = Math.min(results.length, maxResults);
                        descResults.sort(sortId);
                        descResults = noDups(descResults);
                        results = exacts.sort(sortWeight).concat(results.sort(sortWeight), descResults.sort(sortDescWeight));
                        results.length = Math.min(results.length, maxResults);
                    }
                    if (cb)cb(results); else return results;
                }
                ;
            }
            ;
            return _exports;
        }

        {
            if (typeof define === h82 && define.amd) {
                define(["stxTimeZoneData", "stxThirdParty", "stx"], function (_stxTimeZoneData, _stxThirdParty, _stx) {
                        return _stxKernel_js(_stxThirdParty, _stx);
                    }
                );
            }
            else {
                var u = function (E) {
                        _stxThirdParty = E.STXThirdParty;
                    }
                    ;
                var _stxThirdParty = {}
                    ;
                if (typeof (window.STXThirdParty) != (t0l.O6y + B0n + E9y + S82 + r2y))u(window);
                var _stx = {"STX": window.STX, "STXChart": window.STXChart, "$$": window.$$, "$$$": window.$$$}
                    ;
                _stxKernel_js(_stxThirdParty, _stx);
            }
        }
    })();