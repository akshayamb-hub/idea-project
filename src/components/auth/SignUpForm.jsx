import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function SignUpForm({ onLoginClick }) {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setForm((prev) => ({ ...prev, countryCode: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    const fullName = `${form.firstName}${form.middleName ? ' ' + form.middleName : ''}${form.lastName ? ' ' + form.lastName : ''}`;
    alert(`Account created successfully for ${fullName}!`);
  };

  return (
    <div className="w-full max-w-[520px] bg-transparent">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-[38px] font-bold text-[#222222] leading-tight tracking-tight font-sans">
          Creazione
        </h1>
        <p className="text-[#6B7280] text-[15px] mt-2 font-medium">
          Already have an account?{" "}
          <button
            type="button"
            onClick={onLoginClick}
            className="text-[#294835] hover:text-[#355B44] font-semibold transition-colors duration-300 underline underline-offset-4 cursor-pointer"
          >
            Log in
          </button>
        </p>
      </div>

      {/* Form Fields */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Fields (Stacked Vertically) */}
        <div>
          <Label htmlFor="firstName" className="text-[#222222] font-semibold text-xs tracking-wide uppercase mb-2 block">
            First Name
          </Label>
          <Input
            id="firstName"
            name="firstName"
            placeholder="John"
            value={form.firstName}
            onChange={handleChange}
            required
            className="h-11 rounded-xl border-[#D9D9D9] bg-white px-3.5 text-base md:text-sm text-[#222222] placeholder:text-[#7A7A7A]/60 transition-all duration-300 focus:border-[#294835] focus:ring-1 focus:ring-[#294835] shadow-none"
          />
        </div>
        <div>
          <Label htmlFor="middleName" className="text-[#222222] font-semibold text-xs tracking-wide uppercase mb-2 block">
            Middle Name <span className="text-[#7A7A7A] font-normal">(Opt)</span>
          </Label>
          <Input
            id="middleName"
            name="middleName"
            placeholder="Michael"
            value={form.middleName}
            onChange={handleChange}
            className="h-11 rounded-xl border-[#D9D9D9] bg-white px-3.5 text-base md:text-sm text-[#222222] placeholder:text-[#7A7A7A]/60 transition-all duration-300 focus:border-[#294835] focus:ring-1 focus:ring-[#294835] shadow-none"
          />
        </div>
        <div>
          <Label htmlFor="lastName" className="text-[#222222] font-semibold text-xs tracking-wide uppercase mb-2 block">
            Last Name <span className="text-[#7A7A7A] font-normal">(Opt)</span>
          </Label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Doe"
            value={form.lastName}
            onChange={handleChange}
            className="h-11 rounded-xl border-[#D9D9D9] bg-white px-3.5 text-base md:text-sm text-[#222222] placeholder:text-[#7A7A7A]/60 transition-all duration-300 focus:border-[#294835] focus:ring-1 focus:ring-[#294835] shadow-none"
          />
        </div>

        {/* Row 2: Email */}
        <div>
          <Label htmlFor="email" className="text-[#222222] font-semibold text-xs tracking-wide uppercase mb-2 block">
            Email Address
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="name@company.com"
            value={form.email}
            onChange={handleChange}
            required
            className="h-11 rounded-xl border-[#D9D9D9] bg-white px-3.5 text-base md:text-sm text-[#222222] placeholder:text-[#7A7A7A]/60 transition-all duration-300 focus:border-[#294835] focus:ring-1 focus:ring-[#294835] shadow-none"
          />
        </div>

        {/* Row 3: Mobile Number */}
        <div>
          <Label htmlFor="phone" className="text-[#222222] font-semibold text-xs tracking-wide uppercase mb-2 block">
            Mobile Number
          </Label>
          <div className="flex gap-3">
            <div className="w-[100px] shrink-0">
              <Select defaultValue="+91" value={form.countryCode} onValueChange={handleSelectChange}>
                <SelectTrigger className="h-11 rounded-xl border-[#D9D9D9] bg-white focus:border-[#294835] focus:ring-1 focus:ring-[#294835] shadow-none cursor-pointer">
                  <SelectValue placeholder="+91" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+91">+91 (IN)</SelectItem>
                  <SelectItem value="+1">+1 (US)</SelectItem>
                  <SelectItem value="+44">+44 (UK)</SelectItem>
                  <SelectItem value="+61">+61 (AU)</SelectItem>
                  <SelectItem value="+81">+81 (JP)</SelectItem>
                  <SelectItem value="+49">+49 (DE)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="9876543210"
              value={form.phone}
              onChange={handleChange}
              required
              className="flex-1 h-11 rounded-xl border-[#D9D9D9] bg-white px-3.5 text-base md:text-sm text-[#222222] placeholder:text-[#7A7A7A]/60 transition-all duration-300 focus:border-[#294835] focus:ring-1 focus:ring-[#294835] shadow-none"
            />
          </div>
        </div>

        {/* Row 4: Password */}
        <div>
          <Label htmlFor="password" className="text-[#222222] font-semibold text-xs tracking-wide uppercase mb-2 block">
            Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              required
              className="h-11 rounded-xl border-[#D9D9D9] bg-white pl-3.5 pr-11 text-base md:text-sm text-[#222222] placeholder:text-[#7A7A7A]/60 transition-all duration-300 focus:border-[#294835] focus:ring-1 focus:ring-[#294835] shadow-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#222222] transition-colors focus:outline-none p-1 cursor-pointer"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full h-[52px] rounded-[12px] bg-[#294835] hover:bg-[#355B44] text-white font-semibold text-base transition-all duration-300 shadow-none cursor-pointer mt-2"
        >
          Create Account
        </Button>
      </form>

      {/* Footer Text */}
      <p className="text-center text-[12px] text-[#7A7A7A] mt-6 font-medium leading-relaxed">
        By clicking "Create Account", you agree to our{" "}
        <a href="#terms" className="hover:underline text-[#6B7280]">Terms of Service</a> and{" "}
        <a href="#privacy" className="hover:underline text-[#6B7280]">Privacy Policy</a>.
      </p>
    </div>
  );
}
