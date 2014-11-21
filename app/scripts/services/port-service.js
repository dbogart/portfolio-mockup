'use strict';

angular.module('portfolioMockupApp.services', [])
  .factory('portService', function() {

    var results1 = [
            'Actavis',
            'Arava',
            'Avacor',
            'Avagard'
        ];

    var results2 = [
            'Baraclude',
            'Bayer',
            'Bayrab',
            'Bayshore'
        ];

    var results3 = [
            'Tev-Tropin',
            'Teva Pharmaceutical Industries, Ltd.',
            'Teventen',
            'Teveten HCT'
        ];

    var results4 = [
            'Saractinib',
            'Sarafem',
            'Sarasar',
            'Etasorb'
        ];

    var results5 = [
            'Pradaxa',
            'Priligy',
            'Prilosec',
            'Par Pharmaceutical Companies, Inc.'
        ];    

    var companies1 = [
            'Novartis AG',
            'Mylan, Inc.',
            'Hospira, Inc.'
        ];

    var companies2 = [
            'Pfizer, Inc.',
            'Hikma Pharmaceuticals',
            'Apotex, Inc.'
        ];

    var companies3 = [
            'Valeant Pharmaceuticals',
            'Akorn, Inc.',
            'Sanofi SA'
        ];

    var companies4 = [
            'Bayer AG',
            'Strides Arcolab Ltd.',
            'AbbVie Inc.'
        ];

    var companies5 = [
            'Lupid Ltd.',
            'Cipla Ltd.',
            'Emcure Pharmaceuticals'
        ];

    var drugs1 = [
            'Enbrel',
            'Humira',
            'Tysari'
        ];

    var drugs2 = [
            'Avonex',
            'Remicade',
            'Chantix'
        ];

    var drugs3 = [
            'Mirena',
            'Vioxx',
            'Avandia'
        ];

    var drugs4 = [
            'Aleve',
            'Dianeal',
            'Byetta'
        ];

    var drugs5 = [
            'Paxil',
            'Nexium',
            'Rebif'
        ];

    var events1 = [
            { product: 'Enbrel', headline: 'Drug Label Update: A Comparative Safety Analysis' },
            { product: 'Tysari', headline: 'New Drug Approval Safety Comparison: Obizur for Acquired Hemophilia A' },
            { product: 'Enbrel', headline: 'Newly Approved Harvoni, the Safest Hepatitis C Treatment to Date' }
        ];

    var events2 = [
            { product: 'Remicade', headline: 'Comparative Safety Analysis: Lumason, a Newly Approved Ultrasound Imaging Agent' },
            { product: 'Avonex', headline: 'Drug Label Update - A Comparative Safety Analysis' },
            { product: 'Chantix', headline: 'Proposed Removal of Boxed Warning on Chantix Not Supported by Postmarketing Data' }
        ];

    var events3 = [
            { product: 'Vioxx', headline: 'Comparative Analysis of the Newly Approved Obesity Drug, Contrave' },
            { product: 'Avandia', headline: 'FDA Withdraws Prescribing, Dispensing Limitations of Diabetes Drug Avandia' },
            { product: 'Avandia', headline: 'GlaxoSmithKline Agrees to Pay $229 Million over Avandia Lawsuits' }
        ];

    var events4 = [
            { product: 'Bayer AG', headline: 'Nuvaring Drug Label Update: A Comparative Safety Evaluation' },
            { product: 'Dianeal', headline: 'Drug Label Update: A Comparative Safety Analysis' },
            { product: 'Bayer AG', headline: 'Micronor (norethindrone) Drug Label Update: A Comparative Safety Evaluation' }
        ];

    var events5 = [
            { product: 'Nexium', headline: 'Antacid use Linked to Vitamin B12 Deficiency, May Result in Neurological Side Effects' },
            { product: 'Prilosec', headline: 'Study Demonstrates Link between Maternal use of Acid-Suppressive Drugs and Childhood Asthma' },
            { product: 'Prilosec', headline: 'Study Links Acid Reflux Drugs to Development of Heart Disease' }
        ];

    return {
        results: function(portId) { 
            console.log(portId);

            if (portId === '1') {
                return results1; 
            }
            else if (portId === '2') {
                return results2;
            }
            else if (portId === '3') {
                return results3;
            }
            else if (portId === '4') {
                return results4;
            }
            else if (portId === '5') {
                return results5;
            } else {
            }
        },
        companies: function(portId) { 
            console.log(portId);

            if (portId === '1') {
                return companies1; 
            }
            else if (portId === '2') {
                return companies2;
            }
            else if (portId === '3') {
                return companies3;
            }
            else if (portId === '4') {
                return companies4;
            }
            else if (portId === '5') {
                return companies5;
            } else {
            }
        },
        drugs: function(portId) { 
            console.log(portId);

            if (portId === '1') {
                return drugs1; 
            }
            else if (portId === '2') {
                return drugs2;
            }
            else if (portId === '3') {
                return drugs3;
            }
            else if (portId === '4') {
                return drugs4;
            }
            else if (portId === '5') {
                return drugs5;
            } else {
            }
        },
        events: function(portId) { 
            console.log(portId);

            if (portId === '1') {
                return events1; 
            }
            else if (portId === '2') {
                return events2;
            }
            else if (portId === '3') {
                return events3;
            }
            else if (portId === '4') {
                return events4;
            }
            else if (portId === '5') {
                return events5;
            } else {
            }
        },
    };

});