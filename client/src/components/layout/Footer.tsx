import { Link } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Phone, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateContact } from "@/hooks/use-contacts";
import { api } from "@shared/routes";

import logoSicam from '@assets/Asset_2@2x_1772017659057.png';

// Use schema from shared routes for form validation
type ContactFormData = z.infer<typeof api.contacts.create.input>;

export function Footer() {
  const createContact = useCreateContact();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(api.contacts.create.input),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    createContact.mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="bg-white p-4 rounded-2xl w-fit mb-6">
              <img src={logoSicam} alt="SICAM" className="h-12 w-auto" />
            </div>
            <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
              Société Industrielle de Conserves Alimentaires de Medjez El Bab. Filiale du Groupe Bayahi, fondée en 1969.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-primary">
                  <MapPin size={20} />
                </div>
                <span>Medjez El Bab, Tunisie</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-primary">
                  <Phone size={20} />
                </div>
                <span>+216 71 123 456</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <span>contact@sicam.com.tn</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-display font-bold text-white mb-6">Liens rapides</h3>
            <ul className="space-y-3">
              {[
                { label: "Accueil", href: "/" },
                { label: "Notre Histoire", href: "/#histoire" },
                { label: "Programme ZRP", href: "/zrp" },
                { label: "Nos Produits", href: "/#produits" },
                { label: "Nos Engagements", href: "/#valeurs" }
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="flex items-center gap-2 hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-slate-600 group-hover:text-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-5 bg-slate-800/50 p-8 rounded-3xl border border-slate-700/50">
            <h3 className="text-xl font-display font-bold text-white mb-2">Nous contacter</h3>
            <p className="text-sm text-slate-400 mb-6">Vous avez une question sur nos produits ou le programme ZRP ? Écrivez-nous.</p>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input 
                    placeholder="Votre nom" 
                    className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                    {...form.register("name")}
                  />
                  {form.formState.errors.name && (
                    <p className="text-xs text-destructive mt-1">{form.formState.errors.name.message}</p>
                  )}
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Votre email" 
                    className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                    {...form.register("email")}
                  />
                  {form.formState.errors.email && (
                    <p className="text-xs text-destructive mt-1">{form.formState.errors.email.message}</p>
                  )}
                </div>
              </div>
              <div>
                <Textarea 
                  placeholder="Votre message" 
                  rows={4}
                  className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 resize-none"
                  {...form.register("message")}
                />
                {form.formState.errors.message && (
                  <p className="text-xs text-destructive mt-1">{form.formState.errors.message.message}</p>
                )}
              </div>
              <Button 
                type="submit" 
                className="w-full gap-2" 
                disabled={createContact.isPending}
              >
                {createContact.isPending ? "Envoi en cours..." : "Envoyer le message"}
                <Send size={18} />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} SICAM - Société Industrielle de Conserves Alimentaires. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
