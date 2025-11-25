import { useState } from "react";
import {
  Sparkles,
  Package,
  Mouse,
  Pencil,
  Trash2,
  Check,
  Info,
  Settings,
  Search,
  Plus,
  Download,
  X,
  RotateCcw,
} from "lucide-react";
import GlassCard from "../src/components/GlassCard";
import Button from "../src/components/Button";
import IconButton from "../src/components/IconButton";
import Modal from "../src/components/Modal";

export default function ComponentShowcase() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  return (
    <div className="content-container docs">
      <GlassCard>
        <header className="card-header">
          <h1 className="card-title">Showcase des Composants</h1>
          <div className="header-divider" />
        </header>

        <div className="doc-stack">
          {/* Buttons Section */}
          <div className="doc-card">
            <div className="doc-card-header">
              <span className="doc-badge">1</span>
              <Package size={20} className="doc-icon" />
              <h2>Boutons Principaux (Button)</h2>
            </div>

            <div className="space-y-6">
              {/* Primary Buttons */}
              <div>
                <h3 className="text-sm font-semibold mb-3 text-purple-400">
                  Variante Primary
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary">Créer un utilisateur</Button>
                  <Button variant="primary" icon={<Plus size={20} />}>
                    Ajouter
                  </Button>
                  <Button
                    variant="primary"
                    icon={<Download size={20} />}
                    iconPosition="right"
                  >
                    Télécharger
                  </Button>
                  <Button variant="primary" disabled>
                    Désactivé
                  </Button>
                </div>
              </div>

              {/* Success Buttons */}
              <div>
                <h3 className="text-sm font-semibold mb-3 text-purple-400">
                  Variante Success
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="success">Valider</Button>
                  <Button variant="success" icon={<Check size={20} />}>
                    Confirmer
                  </Button>
                </div>
              </div>

              {/* Danger Buttons */}
              <div>
                <h3 className="text-sm font-semibold mb-3 text-purple-400">
                  Variante Danger
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="danger">Supprimer</Button>
                  <Button variant="danger" icon={<Trash2 size={20} />}>
                    Effacer
                  </Button>
                </div>
              </div>

              {/* Secondary Buttons */}
              <div>
                <h3 className="text-sm font-semibold mb-3 text-purple-400">
                  Variante Secondary
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="secondary">Annuler</Button>
                  <Button variant="secondary" icon={<RotateCcw size={20} />}>
                    Réinitialiser
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Icon Buttons Section */}
          <div className="doc-card">
            <div className="doc-card-header">
              <span className="doc-badge">2</span>
              <Mouse size={20} className="doc-icon" />
              <h2>Boutons Icône (IconButton)</h2>
            </div>

            <div className="space-y-6">
              {/* Sizes */}
              <div>
                <h3 className="text-sm font-semibold mb-3 text-purple-400">
                  Tailles disponibles
                </h3>
                <div className="flex items-center gap-3">
                  <IconButton
                    size="sm"
                    variant="primary"
                    tooltip="Petit"
                    icon={<Pencil size={16} />}
                  />
                  <IconButton
                    size="md"
                    variant="primary"
                    tooltip="Moyen"
                    icon={<Pencil size={20} />}
                  />
                  <IconButton
                    size="lg"
                    variant="primary"
                    tooltip="Grand"
                    icon={<Pencil size={24} />}
                  />
                </div>
              </div>

              {/* Variants */}
              <div>
                <h3 className="text-sm font-semibold mb-3 text-purple-400">
                  Variantes et actions
                </h3>
                <div className="flex flex-wrap gap-3">
                  <div className="flex flex-col items-center gap-2">
                    <IconButton
                      variant="primary"
                      tooltip="Modifier"
                      icon={<Pencil size={20} />}
                    />
                    <span className="text-xs text-gray-400">Modifier</span>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <IconButton
                      variant="danger"
                      tooltip="Supprimer"
                      icon={<Trash2 size={20} />}
                    />
                    <span className="text-xs text-gray-400">Supprimer</span>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <IconButton
                      variant="success"
                      tooltip="Valider"
                      icon={<Check size={20} />}
                    />
                    <span className="text-xs text-gray-400">Valider</span>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <IconButton
                      variant="info"
                      tooltip="Informations"
                      icon={<Info size={20} />}
                    />
                    <span className="text-xs text-gray-400">Info</span>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <IconButton
                      variant="secondary"
                      tooltip="Paramètres"
                      icon={<Settings size={20} />}
                    />
                    <span className="text-xs text-gray-400">Paramètres</span>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <IconButton
                      variant="secondary"
                      tooltip="Rechercher"
                      icon={<Search size={20} />}
                    />
                    <span className="text-xs text-gray-400">Rechercher</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Section */}
          <div className="doc-card">
            <div className="doc-card-header">
              <span className="doc-badge">3</span>
              <Sparkles size={20} className="doc-icon" />
              <h2>Popup / Modal</h2>
            </div>

            <p className="mb-4">
              Cliquez sur les boutons ci-dessous pour ouvrir différents modals
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <Button variant="primary" onClick={() => setIsModalOpen(true)}>
                Ouvrir Modal Simple
              </Button>
              <Button variant="secondary" onClick={() => setIsModalOpen2(true)}>
                Ouvrir Modal avec Formulaire
              </Button>
            </div>
          </div>

          {/* Usage Examples */}
          <details className="doc-accordion" open>
            <summary className="doc-accordion-summary">
              <span className="doc-badge">4</span>
              <h2>Exemples d'utilisation</h2>
            </summary>
            <div className="doc-accordion-panel">
              <h3 className="text-sm font-semibold text-purple-400 mb-3">
                Tableau avec actions
              </h3>
              <div className="overflow-x-auto bg-black/20 rounded-lg p-4 border border-white/10">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-2 px-3">Nom</th>
                      <th className="text-left py-2 px-3">Email</th>
                      <th className="text-left py-2 px-3">Rôle</th>
                      <th className="text-right py-2 px-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-3">Jean Dupont</td>
                      <td className="py-3 px-3 text-gray-400">
                        jean@example.com
                      </td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">
                          Admin
                        </span>
                      </td>
                      <td className="py-3 px-3">
                        <div className="flex gap-2 justify-end">
                          <IconButton
                            variant="primary"
                            size="sm"
                            tooltip="Modifier"
                            icon={<Pencil size={16} />}
                          />
                          <IconButton
                            variant="danger"
                            size="sm"
                            tooltip="Supprimer"
                            icon={<Trash2 size={16} />}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-3">Marie Martin</td>
                      <td className="py-3 px-3 text-gray-400">
                        marie@example.com
                      </td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">
                          Utilisateur
                        </span>
                      </td>
                      <td className="py-3 px-3">
                        <div className="flex gap-2 justify-end">
                          <IconButton
                            variant="primary"
                            size="sm"
                            tooltip="Modifier"
                            icon={<Pencil size={16} />}
                          />
                          <IconButton
                            variant="danger"
                            size="sm"
                            tooltip="Supprimer"
                            icon={<Trash2 size={16} />}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </details>
        </div>
      </GlassCard>

      {/* Modals */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Modal Simple"
        size="md"
      >
        <div className="space-y-4">
          <p className="text-gray-300">
            Ceci est un exemple de modal simple avec du contenu texte.
          </p>
          <p className="text-gray-400">
            Le modal peut être fermé en cliquant sur le bouton X, en appuyant
            sur Échap, ou en cliquant en dehors du modal.
          </p>
          <div className="flex justify-end mt-6" style={{ gap: "0.75rem" }}>
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Annuler
            </Button>
            <Button variant="primary" onClick={() => setIsModalOpen(false)}>
              Confirmer
            </Button>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isModalOpen2}
        onClose={() => setIsModalOpen2(false)}
        title="Créer un utilisateur"
        size="lg"
      >
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <label htmlFor="name">Nom complet</label>
            <input
              id="name"
              type="text"
              className="input-glass"
              placeholder="Jean Dupont"
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="input-glass"
              placeholder="jean@example.com"
            />
          </div>

          <div className="input-group">
            <label htmlFor="role">Rôle</label>
            <select id="role" className="input-glass">
              <option>Utilisateur</option>
              <option>Admin</option>
              <option>Modérateur</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="bio">Biographie</label>
            <textarea
              id="bio"
              className="input-glass"
              rows={4}
              placeholder="Parlez-nous de vous..."
            />
          </div>

          <div className="flex justify-end mt-6" style={{ gap: "0.75rem" }}>
            <Button variant="secondary" onClick={() => setIsModalOpen2(false)}>
              Annuler
            </Button>
            <Button
              variant="success"
              icon={<Plus size={20} />}
              onClick={() => setIsModalOpen2(false)}
            >
              Créer l'utilisateur
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
