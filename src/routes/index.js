const express = require("express");
const router = express.Router();

const usersRoutes = require("../orms/users/routes/usuarios.routes");
const reviewsRoutes = require("../orms/reviews/routes/reviews.routes");
const authRoutes = require("../orms/users/routes/auth.routes");
const companiesRoutes = require("../orms/companies/routes/companies.routes");
const insurancesRoutes = require("../orms/insurances/routes/insurances.routes");
const healthRoutes = require("../orms/insurances/routes/healthInsurances.routes");
const vehicleRoutes = require("../orms/insurances/routes/vehicleInsurances.routes");
const homeRoutes = require("../orms/insurances/routes/homeInsurances.routes");
const soatRoutes = require("../orms/insurances/routes/soatInsurances.routes");
const documentsRoutes = require("../orms/documents/routes/documents.routes");

router.use("/users", usersRoutes);
router.use("/reviews", reviewsRoutes);
router.use("/auth", authRoutes);
router.use("/companies", companiesRoutes);
router.use("/insurances", insurancesRoutes);
router.use("/health", healthRoutes);
router.use("/vehicle", vehicleRoutes);
router.use("/home", homeRoutes);
router.use("/soat", soatRoutes);
router.use("/documents", documentsRoutes);

module.exports = router;
