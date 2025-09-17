const About = () => {
  return (
    <section id="about" className="bg-white section-padding">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-secondary-800 mb-4">
                  Niza Kareem
                </h3>
                <p className="text-secondary-600 mb-6 leading-relaxed">
                  With years of experience in the real estate industry, I am
                  committed to providing exceptional service to my clients. As a
                  RERA-registered agent, I ensure complete transparency, legal
                  compliance, and customer satisfaction in every transaction.
                </p>
                <p className="text-secondary-600 mb-6 leading-relaxed">
                  Based in PULLATHIL, PERUMBAIKKADU P O, Kottayam, I have an
                  in-depth knowledge of the local property market and can help
                  you find the perfect home or investment opportunity that meets
                  your needs and budget.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-semibold text-primary-600 mb-4">
                  RERA Registration Details
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-secondary-600 font-medium">
                      Certificate No:
                    </span>
                    <span className="text-primary-600 font-semibold">
                      K-RERA/AG/0124/2025
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-secondary-600 font-medium">
                      Status:
                    </span>
                    <span className="text-green-600 font-semibold">Active</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-secondary-600 font-medium">
                      Location:
                    </span>
                    <span className="text-primary-600 font-semibold">
                      Kerala
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-secondary-600 font-medium">
                      Phone:
                    </span>
                    <span className="text-primary-600 font-semibold">
                      8089896947
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
