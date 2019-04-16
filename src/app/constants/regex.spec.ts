import { IDENTITY_POOL_ID_REGEX, REGION_REGEX, USER_POOL_ID_REGEX, USER_POOL_WEB_CLIENT_ID_REGEX } from '.';

describe("Regex", () => {
    describe("Identity Pool Id", () => {
        const regex = new RegExp(IDENTITY_POOL_ID_REGEX);

        it("should match", () => {
            expect(
                regex.test("us-west-2:d065ba6d-caa2-40f9-9b4e-9a675cf54274")
            ).toBe(true);
            expect(
                regex.test("us-west-2:01607243-163f-4ea4-91b8-14340e09b353")
            ).toBe(true);
        });

        it("should fail", () => {
            expect(
                regex.test("us_west-2:d065ba6d-caa2-40f9-9b4e-9a675cf54274")
            ).toBe(false);
            expect(
                regex.test("u1-west-2:d065ba6d-caa2-40f9-9b4e-9a675cf54274")
            ).toBe(false);
            expect(
                regex.test("us-west-2-01607243-163f-4ea4-91b8-14340e09b353")
            ).toBe(false);
            expect(
                regex.test("us-west-2:0160_7243-163f-4ea4-91b8-14340e09b353")
            ).toBe(false);
            expect(
                regex.test("us-west-2:01607243_163f-4ea4-91b8-14340e09b353")
            ).toBe(false);
            expect(
                regex.test("us-west-2:01607243-163f_4ea4-91b8-14340e09b353")
            ).toBe(false);
            expect(
                regex.test("us-west-2:01607243-163f-4ea4_91b8-14340e09b353")
            ).toBe(false);
            expect(
                regex.test("us-west-2:01607243-163f-4ea4-91b8_14340e09b353")
            ).toBe(false);
            expect(
                regex.test("uS-west-2:01607243-163f-4ea4-91b8-14340e09b353")
            ).toBe(false);
            expect(
                regex.test("us-weSt-2:01607243-163f-4ea4-91b8-14340e09b353")
            ).toBe(false);
            expect(
                regex.test("us-wesrt-2:01607243-163f-4ea4-91b8-14340e09b353")
            ).toBe(false);
            expect(
                regex.test("uss-west-2:01607243-163f-4ea4-91b8-14340e09b353")
            ).toBe(false);
            expect(
                regex.test("us-wes1-2:01607243-163f-4ea4-91b8-14340e09b353")
            ).toBe(false);
            expect(
                regex.test("us-west-2:01607243-163f-4ea4-91b8-14340e096b353")
            ).toBe(false);
            expect(
                regex.test("us-west-2:01607243-163f-4ea4-91b8:14340e096b353")
            ).toBe(false);
            expect(
                regex.test("us-west-2:01607243-163f-4ea4s-91b8-14340e096b353")
            ).toBe(false);
            expect(
                regex.test("us-west-2:01607243-163f-4ea4-91bs8-14340e096b353")
            ).toBe(false);
        });
    });

    describe("Region", () => {
        const regex = new RegExp(REGION_REGEX);

        it("should match", () => {
            expect(regex.test("us-west-2")).toBe(true);
            expect(regex.test("us-east-2")).toBe(true);
        });

        it("should fail", () => {
            expect(regex.test("us_west-2")).toBe(false);
            expect(regex.test("u1-west_2")).toBe(false);
            expect(regex.test("us-west-22")).toBe(false);
            expect(regex.test("us-wesat-2")).toBe(false);
            expect(regex.test("usa-west-2")).toBe(false);
            expect(regex.test("u1-west-2")).toBe(false);
            expect(regex.test(":s-west-2")).toBe(false);
        });
    });

    describe("User Pool Id", () => {
        const regex = new RegExp(USER_POOL_ID_REGEX);

        it("should match", () => {
            expect(regex.test("us-west-2_s0z6k1ipU")).toBe(true);
            expect(regex.test("us-west-2_vrAJYvWeh")).toBe(true);
        });

        it("should fail", () => {
            expect(regex.test("us-west-a_s0z6k1ipU")).toBe(false);
            expect(regex.test("u1-west-2_s0z6k1ipU")).toBe(false);
            expect(regex.test("us_west-2_s0z6k1ipU")).toBe(false);
            expect(regex.test("us-west-2:s0z6k1ipU")).toBe(false);
            expect(regex.test("us-west-2s0z6k1ipU")).toBe(false);
            expect(regex.test("us-west-2_s0z6k1ip_")).toBe(false);
            expect(regex.test("us-west-2_s06k1ipU")).toBe(false);
        });
    });

    describe("User Pool Web Client Id", () => {
        const regex = new RegExp(USER_POOL_WEB_CLIENT_ID_REGEX);

        it("should match", () => {
            expect(regex.test("7ietn6uv4fqkelktb9437jl2la")).toBe(true);
            expect(regex.test("58hvefr86km8ceriv7u3s02ll5")).toBe(true);
        });

        it("should fail", () => {
            expect(regex.test("58_vefr86km8ceriv7u3s02ll5")).toBe(false);
            expect(regex.test("58hefr86km8ceriv7u3s02ll5")).toBe(false);
            expect(regex.test("58hvefr86km8ceriv7u3s02ll5a")).toBe(false);
            expect(regex.test("58hVefr86km8ceriv7u3s02ll5")).toBe(false);
        });
    });
});
