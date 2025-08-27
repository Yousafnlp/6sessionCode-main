"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { toast } from "sonner"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  contact: z.string({ required_error: "Number is Required" })
    .min(11, "Contact number must be at least 11 digits")
    .regex(/^\d+$/, "Contact number must be numeric")
    .regex(/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/, "Date must be in DD-MM-YYYY format"),
  gender: z.enum(["male", "female"], {
    required_error: "Please select your gender",
  }),
  course: z.enum(["consultation", "sessions"], {
    required_error: "Please select your concern",
  }),
})

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      contact: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      let response = await fetch("https://yousafmunawartrainings-backend-live.vercel.app/register", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      let result = await response.json();
      if (result?.success) {
        toast.success('Submitted Successfully')
        form.reset()
      } else {
        toast.error(result?.message)
      }
    } catch (err: any) {
      toast.error(err);
    }
  }

  return (
    <section className="relative bg-black min-h-screen py-20 overflow-hidden" id="register">
      <div className="container relative mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto"
        >
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent mb-4">
              Register Now
            </h1>
            <p className="text-gray-400">Take the first step towards transforming your life</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-black backdrop-blur-sm p-6 rounded-lg border border-gold/20">
              <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" className="bg-black border-gold/20 text-white placeholder:text-gray-500" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" type="email" className="bg-black border-gold/20 text-white placeholder:text-gray-500" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="contact" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your phone number" className="bg-black border-gold/20 text-white placeholder:text-gray-500" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="gender" render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-white">Gender</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-wrap gap-4">
                      {["male", "female"].map((gender) => (
                        <FormItem key={gender} className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value={gender} className="border-gold/20 text-gold" />
                          </FormControl>
                          <FormLabel className="text-white font-normal capitalize">{gender}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField
                control={form.control}
                name="course"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Select Your Concern</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-black border-gold/20 text-white">
                          <SelectValue placeholder="Select your concern" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-black border-gold/20">
                        <SelectItem value="consultation" className="text-white">
                          Free Call Consultation
                        </SelectItem>
                        <SelectItem value="sessions" className="text-white">
                          Register for 6 Sessions Series
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full bg-gold hover:bg-gold-light text-black font-medium text-[16px] transition-all duration-300 transform hover:scale-[1.02]">
                Submit Registration
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  )
}
